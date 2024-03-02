import React from 'react'
import '../Styles/Button.css'
export default function Button({children,onclick,disabled,state}) {
  let name=''
if (state) {
  name='active'
}
 else if (disabled) {
  name += ' disabled'
}
console.log(name,'class',state,disabled);

  return (
   <>
      <button onClick={onclick} disabled={disabled} className={name } style={{
        cursor:disabled ? 'not-allowed':'default',
        // backgroundColor: disabled ? 'red' :   
      }} >{children}  </button>

     </>
   
  )
}
