
interface propsCategory {
  selectedCategory: string | null,
  onCategoryChange: (currentCategory: string | null) => void,
  categories: string[] | undefined,
}

function Category({ selectedCategory, onCategoryChange, categories }: propsCategory) {


  const setCategoriesName = (val: string): void => {
    const setter: string | null = (val === "All") ? null : val
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