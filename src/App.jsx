import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'



const App = () => {
  return(
    <>
       <Header/>
       <Navbar/>
       <About/>
       <Experience/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
         
    </>
  ) 
  
}

export default App
