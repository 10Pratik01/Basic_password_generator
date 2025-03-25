import { useState, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[length, setLength] = useState(10);
  const[number, setNumber] = useState(false)
  const[special, setSpecial] = useState(false)
  const[password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '0123456789'
    if (special) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [number, special, length]); 
  
  return (
    <>
      <h1 className="flex items-center justify-center">
        <span className="text-white p-1 text-2xl">Password Generator</span>
      </h1>   

<div className='flex flex-col items-center justify-center' id='maindiv'>
        <div id='password'>
          <input 
          type="text" 
          value={password}
          className='w-96 h-10 p-2 border-2 border-gray-400 rounded bg-white text-center text-black'
          placeholder='Password'
          onChange={(e) => {e.target.value}}
          readOnly
          />
          <button className='border-2px border-black m-2 cursor-pointer bg-white text-black rounded-30 p-1'>Copy</button>
        </div>

        <div id="inputs">
          <input type="range" min="4" max="16" id='ran' name='ran' value={length} onChange={(e) => {setLength(e.target.value)}} className='mr-1 cursor-grab'/>
          <label for="ran" className='cursor-pointer'>Length : {length}</label>
          
          <input type="checkbox"  name='number' id='number' value={number} onChange={() => {setNumber((prev)=>!prev) ;}} className='m-10 mr-1 cursor-pointer' />
          <label for='number' className='cursor-pointer' >Include Numbers</label>

          <input type="checkbox" name='special' id='special' value={special}  onChange={() => {setSpecial((prev)=>!prev) ;}} className='ml-10 mr-1 cursor-pointer'/>
          <label for='special' className='cursor-pointer'> Include Special Charecters</label>

          <button onClick={()=>{passwordGenerator()}} className='ml-10 bg-green-400 text-white p-2 pt-1 pb-1 rounded-2xl hover:bg-green-600 cursor-pointer' >submit</button>
        </div>
      </div>
    </>
  )
}

export default App
