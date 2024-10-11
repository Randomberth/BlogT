import { createJSONStorage, persist } from "zustand/middleware";
import { create } from 'zustand'

interface BearState {
    bears: number
    increase: (by: number) => void
    decrease: (by: number) => void
}

export const useBearStore = create(persist<BearState>(
    (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        decrease: (by) => set((state) => ({ bears: state.bears - by })),
    }),
    // Opciones de persistencia
    {
        name: 'BlogState',
        storage: createJSONStorage(() => localStorage), // (opcional) valor por defecto 'localStorage'
    },
));