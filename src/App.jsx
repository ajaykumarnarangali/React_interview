import React from 'react'

import Search from './problems/Search'
import Todo from './problems/Todo'
import Chips from './problems/Chips'
import Progressbar from './problems/Progressbar'
import Pagination from './problems/Pagination'
import Otp from './problems/Otp'
import Accordion from './problems/Accordion'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tabform from './problems/Tabform'
import Folder from './problems/Folder'
import Memo from './hooks/Memo'
import Callback from './hooks/Callback'
import Reducer from './hooks/reducer'
function App() {

  const items = [
    {
      title: "Javascript basis",
      content: "Learn variables,functions and loops in javascript."
    },
    {
      title: "React js overview",
      content: "Understand components,state and props in react."
    },
    {
      title: "Node js",
      content: "Basics of server-side developement with node js."
    },
    {
      title: "Fullstack developement",
      content: "Build full-stack app with node js and react js."
    }
  ]

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/chips' element={<Chips/>}/>
      <Route path='/progress-bar' element={<Progressbar progress={33}/>}/>
      <Route path='/pagination' element={< Pagination/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/accordion' element={<Accordion items={items}/>}/>
      <Route path='/tab-form' element={<Tabform/>}/>
      <Route path='/folder' element={<Folder/>}/>
      <Route path='/use-memo' element={<Memo/>}/>
      <Route path='/use-callback' element={<Callback/>}/>
      <Route path='/use-reducer' element={<Reducer/>}/>
     </Routes>
    </>

  )
}

export default App