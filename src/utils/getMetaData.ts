import { getAllBlog } from "./getblog";
import { InterfaceArticleBlog } from "./types";

export async function getDataCategories(): Promise<string[] | undefined>  {
    try {
        const dataBlog: InterfaceArticleBlog[] | undefined = await getAllBlog()
        const dataToUse: InterfaceArticleBlog[] = dataBlog || [];
        const categories = Array.from(new Set(dataToUse.map(item => item.category)));
        const arrayCategories: string[] | undefined = dataToUse ? ['All', ...categories] : [];
              
        return arrayCategories;
    } catch (error) {
        console.log(error);

        return undefined
        
    }
}