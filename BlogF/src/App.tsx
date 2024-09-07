import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <div className='flex h-[863px] '>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
