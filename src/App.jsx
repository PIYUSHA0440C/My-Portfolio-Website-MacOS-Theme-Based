import React from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import GitHub from './components/windows/GitHub/Github'
import Note from './components/windows/Note/Note'
import Resume from './components/windows/Resume/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <GitHub />
      <Note />
      <Resume />
    </main>
  )
}

export default App
