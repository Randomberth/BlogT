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
