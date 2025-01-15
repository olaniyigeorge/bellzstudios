"use server"

import { auth, signIn, signOut } from "@/services/auth";
import { useUser } from "@/services/stores.user";



export async function getSession() {
    console.log("authenticating...")
    const session = await auth()

    return session

}



export async function handleSignIn(provider: string) {
    await signIn(provider)

    const session = await auth()

    const { setUser } = useUser.getState();
    if (session?.user?.id) setUser(session.user);
    
    return session
}



export async function handleSignOut() {
    await signOut()

    const { clearData } = useUser.getState();
    clearData()
}

