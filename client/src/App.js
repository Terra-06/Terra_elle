import React, { useState } from 'react'
import './styles/App.css';
import Toolbar from './components/Toolbar'
import SidePanel from './components/SidePanel'
import Backdrop from './components/Backdrop'
import Home from './pages/Home'

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
      <main style={{ marginTop: '65px' }}>
        <Home />
      </main>

    </div >
  );
}

