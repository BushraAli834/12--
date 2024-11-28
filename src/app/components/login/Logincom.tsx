"use client"

import { signIn } from "next-auth/react";

export default function(){
    return(
        <div>
            <h1 className="font-serif text-2xl text-center justify-center items-center">
                sign in with github
            </h1>
            <br />
            <button className="bg-pink-300 text-white px-4 py-1 rounded-lg shadow-sm text-center items-center justify-center shadow-rose-500  font-serif  " onClick={() => signIn ('github')}> 
                sign in 
            </button>
        </div>
    )
}