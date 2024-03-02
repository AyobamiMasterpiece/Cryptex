import React, { useMemo } from 'react'
import '../Styles/CryptText.css'
import crypterConverter  from '../../Util/Crpterfunc'

 const  CryptText =({text,shift,isEncrypt}) =>{


  shift=Number(shift)
 
  let cryptedText= crypterConverter(text,shift)
  if(isEncrypt==false){
 cryptedText= crypterConverter(text,-shift)

  }
  return (
   <p style={{
    whiteSpace:'normal',
    
      overflowWrap:'break-word',  /* for newer browsers */
     margin:'10 auto',
     width:'100%'
   }}>{cryptedText}</p>
  )
}
export default CryptText