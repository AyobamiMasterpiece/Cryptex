import React from 'react'
import '../Styles/CryptTitle.css'
export default function CryptTitle({isEncrypt}) {
    const btntext= isEncrypt ? 'Encrypted': 'Decrypted'
  return (
     <p>{btntext} Text</p>
  )
}
