"use client"
import { auth, signIn, signOut } from "@/services/auth"
import Image from "next/image"
import { useEffect } from "react"
import { useUser } from "@/services/stores.user"
import { handleSignOut } from "@/app/auth/action"

export default function Auth() {
  const { user, setUser, clearData } = useUser()

  useEffect(() => {
    const fetchUser = async () => {
      const session = await auth()
      if (session?.user){
        console.log("setting user...")
        setUser(session.user)
      }
    }
    fetchUser()
  }, [setUser])

  return user ? 
    (
      <form
        action={async () => {
          "use server"
          await signOut()
          clearData()
        }}
      >
        <button className="outline_btn" 
        type="submit">Sign Out</button>
      </form>
    ) 
    :
    (
      <form
        action={async () => {
          "use server"
          await signIn("google")
          const session = await auth()
          console.log("setting user...")
          if (session?.user){
            setUser(session?.user)
          }
        }}
      >
        <button className="black_btn flex gap-2" 
        type="submit">
          <>
            <Image 
              src="/assets/images/socials/google.svg" 
              className="w-5 h-5"
              width={5}
              height={5}
              alt="google" 
            /> 
          </>
          <>Sign in with Google</>
          </button>
      </form>
    )
}




