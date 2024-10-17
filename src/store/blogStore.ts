import { createJSONStorage, persist } from "zustand/middleware";
import { create } from 'zustand'
import { InterfaceArticleBlog } from '../utils/types';
import { getAllBlog } from "../utils/getblog";

interface blogState {
  selectedCategory: string | null,
  setSelectedCategory: (category: string | null) => void,
  currentPage: number,
  setCurrentPage: (page: number) => void,
  pageSize: number,
  data: InterfaceArticleBlog[] | undefined,
  fetchData: () => Promise<void>,
  resetData: () => void,
  dataBlog: InterfaceArticleBlog[],
  setDataBlog: (data: InterfaceArticleBlog[]) => void
}


export const useBlogStore = create(persist<blogState>(
  (set) => ({
    /// incluir dataBlog
    dataBlog: [],
    setDataBlog: (data: InterfaceArticleBlog[]) => set({ dataBlog: data }),
    selectedCategory: null,
    setSelectedCategory: (category: string | null) => set({ selectedCategory: category }),
    currentPage: 1,
    setCurrentPage: (page: number) => set({ currentPage: page }),
    pageSize: 9,
    data: [],
    fetchData: async () => {
      const dataToUse = await fetchAux()
      set({ data: dataToUse });

    },
    resetData: () => set({ data: [] }),
  }),
  {
    name: 'BlogState',
    storage: createJSONStorage(() => localStorage),
  },
));



const fetchAux = async () => {
  const response = await getAllBlog()
  const dataToUse = response || [];
  return dataToUse

}


