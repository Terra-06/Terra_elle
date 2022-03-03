import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Toolbar from './components/Toolbar'
import SidePanel from './components/SidePanel'
import Backdrop from './components/Backdrop'
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

export default function App() {

  const [sidePanelOpen, setSidePanelOpen] = useState(false)

  const handlePanelToggleClick = () => {
    setSidePanelOpen((prevPanelState) => !prevPanelState)
  }

  const handleBackdropClick = () => {
    setSidePanelOpen(false)
  }

  let backdrop;

  if (sidePanelOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />
  }

  return (
    <div style={{ height: '100%' }} className="App">
      <Toolbar handlePanelToggleClick={handlePanelToggleClick} />
      <SidePanel show={sidePanelOpen} />
      {backdrop}
      <main style={{ marginTop: '64px' }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Skills' element={<Skills />} />
        </Routes>
      </main>
    </div >
  );
}

