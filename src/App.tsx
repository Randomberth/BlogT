import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <div className='flex h-screen-minus-60 lg:h-screen-minus-84 '> 
        <Outlet/>
      </div>
    </div>
  )
}

export default App
