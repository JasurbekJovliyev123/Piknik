import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import { Home,About,Contact,Products,Korzinka,Product } from './pages'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Mainlayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        },
        {
          path:'/blog',
          element:<About/>
        },
        {
          path:'korzinka',
          element:<Korzinka/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}
export default App