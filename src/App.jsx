import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'
import { playlists } from './data/playlists.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="d-flex justify-content-center">
     {
      playlists.map(
        (playlist) => <Card img={playlist.img} title={playlist.title} text={playlist.text} />
      )
     } 
    </div>
    </>
  )
}

export default App
