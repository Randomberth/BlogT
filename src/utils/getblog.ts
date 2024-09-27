import axios from "axios";
import { InterfaceArticleBlog } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL
const READ_API_KEY = import.meta.env.VITE_READ_API_KEY
const readAuthKey = import.meta.env.VITE_READ_API_AUTH
const readAllENDPOINT = import.meta.env.VITE_READ_ALL_ENDPOINT
//const filteredENDPOINT = import.meta.env.VITE_READ_FILTERED_ENDPOINT



const instance = axios.create({
  baseURL: BASE_URL,
  //    timeout: 1000,
  headers: {
    'apikey': READ_API_KEY,
    'Authorization': readAuthKey,
  }
});



export async function getAllBlog(): Promise<InterfaceArticleBlog[] | undefined> {
  try {
    const response = await instance.get(readAllENDPOINT)
    const { data } = response;
    //console.log(data);
    return data

  } catch (error) {
    console.log(error);

  }
}


export async function getFilteredBlog(pageSize: number, currentPage: number, selectedCategory: string | null): Promise<InterfaceArticleBlog[] | undefined> {
  try {
    console.log(pageSize, currentPage, selectedCategory);
    let URL = `https://nnpkwtnuymrjomvbhxww.supabase.co/rest/v1/Blogs?page=${currentPage}&limit=${pageSize}`
    const response = await instance.get(URL)
    /*const response = await instance.get(filteredENDPOINT, {
      params: {
        limit: pageSize,
        page: currentPage,
        category: selectedCategory
      }
    })*/
    const { data } = response;
    console.log(data);
    return data

  } catch (error) {
    console.log(error);

  }
}

