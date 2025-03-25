import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const[length, setLength] = useState(10);
  const[number, setNumber] = useState(false)
  const[special, setSpecial] = useState(false)
  const[password, setPassword] = useState('')
  const passwordref = useRef(null) 

 //function to generate the password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '0123456789'
    if (special) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [number, special, length, setPassword]); 
  
 //using useEffect to call the passwordGenerator function
  useEffect(() => {
    passwordGenerator()
  }, [length, number, special, passwordGenerator])

  //function to copy the password to clipboard
  const Copytoclipboard = useCallback(()=>{
    passwordref.current.select()
    window.navigator.clipboard.writeText(passwordref.current.value)
  }, [password])
  return (  
    <>  
      {/* Header */}
      <h1 className="flex items-center justify-center">
        <span className="text-white p-1 text-2xl">Password Generator</span>
      </h1>   

      <div className='flex flex-col items-center justify-center' id='maindiv'>
      {/* displaying the password */}
        <div id='password'>
          <input 
          type="text" 
          value={password}
          className='w-96 h-10 p-2 border-2 border-gray-400 border-l-0 rounded-xl rounded-br-none rounded-tr-none bg-white text-center  text-black'
          placeholder='Password'
          onChange={(e) => {e.target.value}}
          ref={passwordref}
          readOnly
          />
          <button className='border-2 h-10 w-20 rounded-tr-xl rounded-br-xl border-gray-400 cursor-pointer bg-blue-500 text-white rounded-30 p-1 hover:bg-blue-800' onClick={Copytoclipboard}>Copy</button> 
        </div>

        {/* inputs for the password generator */}
        <div id="inputs">
          <input type="range" min="4" max="16" id='ran' name='ran' value={length} onChange={(e) => {setLength(e.target.value)}} className='mr-1 cursor-grab'/>
          <label for="ran" className='cursor-pointer'>Length : {length}</label>
          
          <input type="checkbox"  name='number' id='number' value={number} onChange={() => {setNumber((prev)=>!prev) ;}} className='m-10 mr-1 cursor-pointer' />
          <label for='number' className='cursor-pointer' >Include Numbers</label>

          <input type="checkbox" name='special' id='special' value={special}  onChange={() => {setSpecial((prev)=>!prev) ;}} className='ml-10 mr-1 cursor-pointer'/>
          <label for='special' className='cursor-pointer'> Include Special Charecters</label>

          {/* Using the button to call the passwordGenerator function */}

          {/* <button onClick={()=>{passwordGenerator()}} className='ml-10 bg-green-400 text-white p-2 pt-1 pb-1 rounded-2xl hover:bg-green-600 cursor-pointer' >submit</button> */}

        </div>
      </div>
    </>
  )
}

export default App
