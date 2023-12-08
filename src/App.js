import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <br />
        <p>A React hook that coverts speech to Text</p>
        <div className="main-content">

        </div>
        <div className="btn-style">
            <button>Copy</button>
            <button>Start Listening</button>
            <button>Stop Listening</button>
        </div>
      </div>
    </div>
  )
}

export default App

