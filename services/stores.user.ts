"use server";
import { create } from 'zustand'

export interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
  }

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

export const useUser = create<UserState>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    logout: () => set({ user: null })
}))
