import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx'

function App() {

  return (
    <>
      <title>Sorting Visualizer</title>
      <div className='top-bar'>
        <div className="barCont">
          <h1>Sorting Visualizer by Farrakhan Abdoualye, Powered By: <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a></h1>
        </div>
      </div>
      <div>
        <SortingVisualizer></SortingVisualizer>
      </div>
    </>
    
  )
}

export default App
