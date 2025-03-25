import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerat() {
  const[length, setLength] = useState(10);
  const[number, setNumber] = useState(false)
  const[special, setSpecial] = useState(false)
  const[password, setPassword] = useState('')
  const[onlynum, setOnlynum] = useState(false)
  const passwordref = useRef(null) 

 //function to generate the password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '0123456789'
    if (special) str += '!@#$%^&*()_+'
    if(onlynum) str = '0123456789'

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [number, onlynum, special, length, setPassword]); 
  
 //using useEffect to call the passwordGenerator function
  useEffect(() => {
    passwordGenerator()
  }, [length, number, onlynum ,special, passwordGenerator])

  //function to copy the password to clipboard
  const Copytoclipboard = useCallback(()=>{
    passwordref.current.select()
    window.navigator.clipboard.writeText(passwordref.current.value)
  }, [password])
  return (  
    <>  
      {/* Header */}
      <h1 className="flex items-center justify-center ">
        <span className="text-white p-1 text-5xl">Password Generator</span>
      </h1>   

      <div className='flex flex-col items-center justify-center text-3xl' id='maindiv'>
      {/* displaying the password */}
        <div id='password' className='h-20 text-center flex justify-center items-center'>
          <input 
          type="text" 
          value={password}
          className='w-96 h-12 p-2 m-1 ml-0 mr-0 border-1 border-gray-400 border-l-0 rounded-xl rounded-br-none rounded-tr-none bg-white text-center  text-black'
          placeholder='Password'
          onChange={(e) => {e.target.value}}
          ref={passwordref}
          readOnly
          />
          <button className='border-1 h-12 w-20 rounded-tr-xl  ml-0 mr- rounded-br-xl border-gray-400 border-l-0 cursor-pointer bg-blue-500 text-white rounded-30 hover:bg-blue-800 text-2xl' onClick={Copytoclipboard}>Copy</button> 
        </div>

        {/* inputs for the password generator */}
        <div id="inputs" className='text-2xl'>
          <input type="range" min="4" max="16" id='ran' name='ran' value={length} onChange={(e) => {setLength(e.target.value)}} className='mr-1 cursor-grab'/>
          <label htmlFor="ran" className='cursor-pointer'>Length : {length}</label>
          
          <input type="checkbox"  name='number' id='number' value={number} onChange={() => {setNumber((prev)=>!prev) ;}} className='m-10 mr-1 cursor-pointer' />
          <label htmlFor='number' className='cursor-pointer' >Include Numbers</label>

          <input type="checkbox" name='special' id='special' value={special}  onChange={() => {setSpecial((prev)=>!prev) ;}} className='ml-10 mr-1 cursor-pointer text-2xl'/>
          <label htmlFor='special' className='cursor-pointer'> Include Special Charecters</label>

          <input type="checkbox" name='onlynum' id='onlynum' value={onlynum}  onChange={() => {setOnlynum((prev)=>!prev) ;}} className='ml-10 mr-1 cursor-pointer text-2xl'/>
          <label htmlFor='onlynum' className='cursor-pointer'> Only numbers</label>

          {/* Using the button to call the passwordGenerator function */}

          {/* <button onClick={()=>{passwordGenerator()}} className='ml-10 bg-green-400 text-white p-2 pt-1 pb-1 rounded-2xl hover:bg-green-600 cursor-pointer' >submit</button> */}

        </div>
      </div>
    </>
  )
}

export default PasswordGenerat
