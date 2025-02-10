import React from 'react'
import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <>
      <Header /> 
      <main className="main">
      <Home />
      <About/>
      <Skills/>
     
      <Qualification />
      <Contact/>
      <Footer/>

      </main>
      </>
      
    </div>
  )
}

export default App
