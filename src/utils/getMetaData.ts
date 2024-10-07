import { getAllBlog } from "./getblog";
import { InterfaceArticleBlog } from "./types";

export async function getDataCategories(): Promise<string[] | undefined>  {
    try {
        const dataBlog: InterfaceArticleBlog[] | undefined = await getAllBlog()
        const dataToUse: InterfaceArticleBlog[] = dataBlog || [];
        const categories = new Set(dataToUse.map(item => item.category));
        
        return Array.from(categories);
    } catch (error) {
        console.log(error);

        return undefined
        
    }
}