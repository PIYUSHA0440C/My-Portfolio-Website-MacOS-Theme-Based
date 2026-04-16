import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import GitHub from './components/windows/GitHub/Github'
import Note from './components/windows/Note/Note'
import Resume from './components/windows/Resume/Resume'
import Spotify from './components/windows/Spotify/Spotify'
import Cli from './components/windows/Cli/Cli'

const App = () => {

  const [windowsState, setWindowsState] = useState(
    {
      github: false,
      note: false,
      resume: false,
      spotify: false,
      cli: false
    }
  )
  
  return (
    <main>
      <Nav />
      <Dock setWindowsState={setWindowsState}/>

      {windowsState.github && <GitHub windowName="github"  setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note"  setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume"  setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify"  setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli"  setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
