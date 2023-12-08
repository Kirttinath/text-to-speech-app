import React from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
const App = () => {

  const [isCopied, setCopied] = useClipboard("Text to copy");

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const stopListening = () => SpeechRecognition.stopListening();
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div>
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <br />
        <p>A React hook that coverts speech to Text</p>
        <div className="main-content">
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
    </div>
  )
}

export default App

