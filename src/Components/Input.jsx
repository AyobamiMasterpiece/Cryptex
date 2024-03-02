import React from 'react'
import '../Styles/Input.css'
export default function Input({text,changeText}) {
  return (
    <div  className='input-container' >
        
        <textarea name="" id="input" cols="5" rows="5" value={text} placeholder='Input text here' onChange={(e)=>{
          changeText(e.target.value)

        }} ></textarea>
    </div>
  )
}
