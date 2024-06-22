import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/project' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        
      </Router>
    </div>
  )
}

export default App