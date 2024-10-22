import { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import Learning from './Learning';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className='icon'>

    <Learning/>
     
      <FaGoogle />


      </div>
    </>
  )
}

export default App
