import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[length, setLength] = useState(10);
  const[number, setNumber] = useState(false)
  const[special, setSpecial] = useState(false)
  const[password, setPassword] = useState('')

  const passwordGeneraot = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '0123456789'
    if (special) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [number, special, length])
  
  return (
    <>
      <h1 className="flex items-center justify-center">
        <span className="text-white p-1 text-2xl">Password Generator</span>
      </h1>   

      <div className='flex direction-coloum items-center justify-center'>
        <div id='password'>

        </div>

        <div id="inputs">
          <input type="range" min="4" max="16" id='ran' name='ran' className='mr-1 cursor-grab'/>
          <label for="ran" className='cursor-pointer'>Length</label>
          
          <input type="checkbox"  name='number' id='number' className='m-10 mr-1 cursor-pointer' />
          <label for='number' className='cursor-pointer' >Include Numbers</label>

          <input type="checkbox" name='special' id='special' className='ml-10 mr-1 cursor-pointer'/>
          <label for='special' className='cursor-pointer'> Include Special Charecters</label>
        </div>
      </div>
    </>
  )
}

export default App
