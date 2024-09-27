import axios from "axios";
import { InterfaceArticleBlog } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL
const READ_API_KEY = import.meta.env.VITE_READ_API_KEY
const readAuthKey = import.meta.env.VITE_READ_API_AUTH
const readENDPOINT = import.meta.env.VITE_READ_ALL_ENDPOINT


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
        const response = await instance.get(readENDPOINT)
        const { data } = response;
        //console.log(data);
        return data

    } catch (error) {
        console.log(error);

    }

}

/*
axios.get('/api/productos', {
    params: {
      limit: 10,
      page: 2
    }
  })
  .then(response => {
    // ...
  })
  .catch(error => {
    // ...
  }); */