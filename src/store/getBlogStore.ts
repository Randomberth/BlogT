import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { InterfaceArticleBlog } from '../utils/types';

const BASE_URL: string = import.meta.env.VITE_BASE_URL
const READ_API_KEY: string = import.meta.env.VITE_READ_API_KEY
const readAuthKey: string = import.meta.env.VITE_READ_API_AUTH
const readAllENDPOINT: string = import.meta.env.VITE_READ_ALL_ENDPOINT
const filteredENDPOINT: string = import.meta.env.VITE_READ_FILTERED_ENDPOINT

import axios from 'axios';
const instance = axios.create({
    baseURL: BASE_URL,
    //    timeout: 1000,
    headers: {
        'apikey': READ_API_KEY,
        'Authorization': readAuthKey,
    }
});

// store solicitud de blog

export async function getAllBlog(): Promise<InterfaceArticleBlog[] | undefined> {
    try {
        const response = await instance.get(readAllENDPOINT)
        const { data } = response;
        return data

    } catch (error) {
        console.log(error);

    }
}