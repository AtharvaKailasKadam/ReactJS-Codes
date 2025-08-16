import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App.jsx'
import { Profile } from './profile'
import { State } from './hooks/States'
import { DerivedState } from './hooks/DerivedState'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DerivedState />
  </StrictMode>,
)
