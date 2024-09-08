import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/index.ts';
import About from './pages/about/index.ts';
import Blogs from './pages/blogs/index.ts';
import Contact from './pages/contact/index.ts';
import Services from './pages/services/index.ts';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/blogs",
        element: <Blogs/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/services",
        element: <Services/>
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
