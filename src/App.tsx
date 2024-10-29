import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <div className=' flex flex-col'>
      <div>
        <Navbar/>
      </div>
{/*      <div className='flex h-screen-minus-60 lg:h-screen-minus-84'> */}
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
