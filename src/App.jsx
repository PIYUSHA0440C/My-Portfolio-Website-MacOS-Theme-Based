import React from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import GitHub from './components/windows/GitHub/Github'
import Note from './components/windows/Note/Note'
import Resume from './components/windows/Resume/Resume'
import Spotify from './components/windows/Spotify/Spotify'
import Cli from './components/windows/Cli/Cli'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <GitHub />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  )
}

export default App
