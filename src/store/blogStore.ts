import { createJSONStorage, persist } from "zustand/middleware";
import { create } from 'zustand'
import { InterfaceArticleBlog } from '../utils/types';
import { getAllBlog } from "../utils/getblog";


//const BASE_URL: string = import.meta.env.VITE_BASE_URL
//const READ_API_KEY: string = import.meta.env.VITE_READ_API_KEY
//const readAuthKey: string = import.meta.env.VITE_READ_API_AUTH
//const readAllENDPOINT: string = import.meta.env.VITE_READ_ALL_ENDPOINT
//const filteredENDPOINT: string = import.meta.env.VITE_READ_FILTERED_ENDPOINT

/*
import axios from 'axios';
const instance = axios.create({
    baseURL: BASE_URL,
    //    timeout: 1000,
    headers: {
        'apikey': READ_API_KEY,
        'Authorization': readAuthKey,
    }
});

*/

interface blogState {
    bears: number
    data: InterfaceArticleBlog[] | undefined;
    fetchData: () => Promise<void>;
    increase: (by: number) => void
    decrease: (by: number) => void
}

export const useBearStore = create(persist<blogState>(
    (set) => ({
        bears: 0,
        data: [],
        fetchData: async() => {
          const dataToUse = await fetchAux()
          set({ data: dataToUse });

        },
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        decrease: (by) => set((state) => ({ bears: state.bears - by })),
    }),
    {
        name: 'BlogState',
        storage: createJSONStorage(() => localStorage), 
    },
));



const fetchAux = async() => {
  const response = await getAllBlog()
  const dataToUse = response || [];
  console.log("Fetch Aux",dataToUse);
  
  
  return dataToUse 

}