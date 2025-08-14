import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { EventHandling } from './components/EventHandling.jsx'
import { App } from './App.jsx'
import { EventProps } from './components/EventProps.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventProps />
    <App />
    <EventHandling />
  </StrictMode>,
)