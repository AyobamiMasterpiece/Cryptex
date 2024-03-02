import React from 'react'
import '../Styles/CryptBtn.css'
import Button from './Button'
import Shift from './Shift'
export default function CrptBtn({changeShift,shift,isEncrypt,changeCryptMode,text,isEmptyShift,isEmptyText,isNegativeShift, isShiftInvalid}) {



  return (
     <div className='btn-container'>
      
           
         <Button onclick={()=>changeCryptMode(true)} disabled={  isEncrypt==true||isEmptyShift|| isEmptyText||isNegativeShift||isShiftInvalid} state={isEncrypt}>{'Encrypt'}</Button>
         <Shift changeShift={changeShift} shift={shift}></Shift>
           <Button onclick={()=>changeCryptMode(false)} disabled={  isEncrypt==false|| isEmptyShift || isEmptyText||isNegativeShift||isShiftInvalid} state={isEncrypt==false}>{'Decrypt'}</Button>
        </div>
  )
}
