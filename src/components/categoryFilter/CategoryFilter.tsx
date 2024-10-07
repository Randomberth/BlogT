import { useEffect, useState } from 'react'
import { getDataCategories } from '../../utils/getMetaData'

interface propsCategory {
  selectedCategory : string | null,
  onCategoryChange : (currentCategory: string | null ) => void
}

function Category ({ selectedCategory, onCategoryChange }: propsCategory) {
const [category, setCategory] = useState<string[] | undefined>([])

useEffect(() => {
  getCategories().catch(null)
    
}, [])
    

  const getCategories = async(): Promise<void> => {
    try {
      const dataCategories: string[] | undefined =   await getDataCategories().catch(null)
      const arrayCategories: string[] | undefined = dataCategories ? ['All', ...dataCategories] : [];
      setCategory(arrayCategories)
      console.log("arrayCategories: ",arrayCategories);
      
    } catch (error) {
      console.log(error);
    }
  }

  const setCategories = (val: string ): void => {
    const setter: string | null = (val==="All")? null : val
    console.log("setter",setter);
    onCategoryChange(setter)
  }

  return (
    <div>
      {
      category && category.map((indexCategory) => (
        <button 
          onClick={() => setCategories(indexCategory)}
          key={indexCategory} 
          className={`w-20 h-10 border rounded-md mx-2 ${indexCategory === (selectedCategory === null ? "All" : selectedCategory) ? 'font-extrabold  underline bg-slate-100 h-11 '  : 'font-normal'}`}
          >
          {indexCategory}
        </button>

      ))}
    </div>
  )
}

export default Category