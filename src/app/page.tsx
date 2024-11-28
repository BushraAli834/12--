

// Authentication and authorization today topic
"use  client"

import Sessionwrapper from "@/app/components/login/sessionwrapper"
import {auth} from "@/app/lib/auth"
import Login from "../app/Login/page"
import Logincom from "./components/login/Logincom"
import Signout from "../app/components/login/Signout"

export default async function Home (){
  const session = await auth()
  const isAuthenticated = !!session?.user
  return(
    <div className="bg-gradient-to-r from-yellow-300 to-pink-300 min-h-max min-w-max absolnute bg-cover">
     
      <Sessionwrapper>
        <Logincom/>
        <Login/>
        <Signout/>
      </Sessionwrapper>
    </div>
  )
}
