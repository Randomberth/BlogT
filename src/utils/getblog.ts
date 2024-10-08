import axios from "axios";
import { InterfaceArticleBlog } from "./types";

const BASE_URL: string = import.meta.env.VITE_BASE_URL
const READ_API_KEY: string = import.meta.env.VITE_READ_API_KEY
const readAuthKey: string = import.meta.env.VITE_READ_API_AUTH
const readAllENDPOINT: string = import.meta.env.VITE_READ_ALL_ENDPOINT
const filteredENDPOINT: string = import.meta.env.VITE_READ_FILTERED_ENDPOINT

//const filteredENDPOINT: string = 'Blogs?select=*&category=eq.'


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
    return data

  } catch (error) {
    console.log(error);

  }
}

export async function getFilteredBlog(pageSize: number, currentPage: number, selectedCategory: string | null): Promise<InterfaceArticleBlog[] | undefined> {
  try {
    console.log('selected category :', selectedCategory?.trim());

    const OffSet = (currentPage - 1) * pageSize;
    const FinalEndPoint = selectedCategory ? `${filteredENDPOINT}${selectedCategory}` : readAllENDPOINT
    console.log('Filtered:  ', FinalEndPoint);

    const response = await instance.get(FinalEndPoint, {
      params: {
        limit: pageSize,
        offset: OffSet,
      }
    })
    const { data } = response;
    return data

  } catch (error) {
    console.log(error);

  }
}


export async function getLenghtCategory(selectedCategory: string | null): Promise<number> {
  try {
    const FinalEndPoint = selectedCategory ? `${filteredENDPOINT}${selectedCategory}` : readAllENDPOINT
    const response = await instance.get(FinalEndPoint)
    const { data } = response;
    //    const pages: number = data.length
    const pages = data.pages || data.length; // Check for "pages" property first


    return pages

  } catch (error) {
    console.log(error);

    return 0

  }
}
