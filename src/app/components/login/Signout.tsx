"use client"

import { signOut } from "next-auth/react";

export default function(){
    return(
        <div>
            <h1 className="font-serif text-2xl text-center justify-center items-center">
                sign out with Github
            </h1>
            <button className="bg-pink-300 text-white px-4 py-1 rounded-lg shadow-sm text-center items-center justify-center shadow-rose-500  font-serif" onClick={() => signOut ()}> 
                sign out 
            </button>
        </div>
    )
}