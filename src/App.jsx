import React from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
    <main>
      <Nav />
      <MacWindow>
        <h1>efdf</h1>
      </MacWindow>
      <Dock />
    </main>
  )
}

export default App
