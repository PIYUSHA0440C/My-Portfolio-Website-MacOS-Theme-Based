import React from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import MacWindow from './components/windows/MacWindow'
import GitHub from './components/windows/GitHub/Github'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <GitHub />
    </main>
  )
}

export default App
