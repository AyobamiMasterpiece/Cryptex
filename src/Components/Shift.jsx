import React from 'react'
import '../Styles/shift.css'

export default function Shift({changeShift,shift}) {
  return (

 <input type="number" name="" id='shift'  placeholder='Shift' value={shift} onChange={(e)=>changeShift(e.target.value)} />
  
   
  )
}
