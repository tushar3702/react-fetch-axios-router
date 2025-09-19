import { useState , useEffect} from 'react'
import {getPosts} from './api/fetch'
import {getTodos} from './api/axios'
import ShowPosts from './ShowPosts'
import ShowTodos from './ShowTodos'
import { ErrorPage } from './components/ErrorPage'
import { Navbar } from './components/Navbar'
import {RouterProvider, Outlet, createBrowserRouter} from 'react-router-dom'

function App() {
  const [data, setData] = useState(null)
  const [todos, setTodos] = useState(null)

  useEffect(()=> {
    getPosts().then((posts)=> setData(posts))
    getTodos().then((todos) => setTodos(todos))
  },[]);

  const Dashboard = () => {
    return <>
       <Navbar />
       <Outlet />
    </>
  }
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Dashboard />,
      children: [
      {
        path: '/', // index: true,
        element: <ShowTodos todos={todos} />
      },
      {
        path: 'posts',
        element: <ShowPosts data={data} />
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ]
    }
  ])
  return <div className='container'>
      <RouterProvider router={router} />
  </div>
  
}

export default App
