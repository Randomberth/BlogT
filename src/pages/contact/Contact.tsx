import { useEffect } from "react";
import { useBearStore } from "../../store/blogStore"

function Contact() {

  const { bears, increase, decrease, fetchData, data } = useBearStore();
  
  useEffect(() => {
  console.log("ContactPage: ",data);

  }, [])
  


  return (
    <div className="bg-violet-600 w-screen flex flex-col items-center">
      <div className="py-28 bg-black text-center text-white px-4 w-screen h-1/3 flex flex-col items-center justify-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Contact us Page</h2>
<<<<<<< HEAD
        <h4 className="text-green-700 font-bold text-2xl">Pagination Check... </h4>
=======
        <h4 className="text-green-700 font-bold text-2xl">Building Global State... </h4>
      </div>
      <div className="w-52 h-52 bg-lime-500 flex items-center justify-center mt-20 flex-col rounded-sm">
        <h4>Test {bears} </h4>
        <button
          className="w-24 h-10 bg-pink-600 rounded-md m-2"
          onClick={() => increase(5)}
        >
          Test Up
        </button>
        <button
          className="w-24 h-10 bg-pink-600 rounded-md m-2"
          onClick={() => decrease(5)}
        >
          Test Down
        </button>
        <button
          className="w-24 h-10 bg-pink-600 rounded-md m-2"
          onClick={() => fetchData()}
        >
          Test Fetch
        </button>
>>>>>>> globalState

      </div>
    </div>
  )
}

export default Contact