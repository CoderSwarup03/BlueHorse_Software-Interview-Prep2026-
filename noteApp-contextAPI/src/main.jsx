import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NoteProvider from './context/NoteProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteProvider >
      <App />
    </NoteProvider>
  </StrictMode>,
)
