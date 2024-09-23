import axios from "axios";

const BASE_URL  = import.meta.env.VITE_BASE_URL
const readApiKey  = import.meta.env.VITE_READ_API_KEY
const readAuthKey = import.meta.env.VITE_READ_API_AUTH
const readENDPOINT = import.meta.env.VITE_READ_ALL_ENDPOINT


const instance = axios.create({
    baseURL: BASE_URL,
//    timeout: 1000,
    headers: {
        'apikey' : readApiKey,
        'Authorization' : readAuthKey,
    }
  });



export async function getAllBlog() {
    try {
        const response = await instance.get(readENDPOINT)
        const { data } = response;
        console.log(data);
        return []
        
    } catch (error) {
        console.log(error);
        
    }

}


        