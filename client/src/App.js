import React, { useState } from 'react'
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SidePanel from './components/SidePanel/SidePanel'
import Backdrop from './components/Backdrop/Backdrop'

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
        <p>This is Page content! routes to components</p>
      </main>

    </div >
  );
}

