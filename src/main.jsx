import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PasswordGenerat from './PasswordGenerat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGenerat />
  </StrictMode>,
)
