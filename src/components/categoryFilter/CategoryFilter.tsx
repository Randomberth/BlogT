import { useEffect } from 'react'

interface propsCategory {
  selectedCategory: string | null,
  onCategoryChange: (currentCategory: string | null) => void,
  categories: string[] | undefined,
  //setCategories: (set: string[] | undefined ) => void 
}

function Category({ selectedCategory, onCategoryChange, categories }: propsCategory) {
  //const [category, setCategory] = useState<string[] | undefined>([])

  useEffect(() => {
    //  getCategories().catch(null)

  }, [])



  const setCategoriesName = (val: string): void => {
    const setter: string | null = (val === "All") ? null : val.trim()
    console.log("setter", setter);
    onCategoryChange(setter)
  }

  return (
    <div>
      {
        categories && categories.map((indexCategory) => (
          <button
            onClick={() => setCategoriesName(indexCategory)}
            key={indexCategory}
            className={`w-20 h-10 border rounded-md mx-2 ${indexCategory === (selectedCategory === null ? "All" : selectedCategory) ? 'font-extrabold  underline bg-slate-100 h-11 ' : 'font-normal'}`}
          >
            {indexCategory}
          </button>

        ))}
    </div>
  )
}

export default Category