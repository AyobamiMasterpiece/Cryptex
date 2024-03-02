import React, { useState } from 'react'
import '../Styles/HomeScreen.css'
import Card from '../Components/Card'
import Input from '../Components/Input'
import CrptBtn from '../Components/CrptBtn'
import CryptTitle from '../Components/CryptTitle'
import CryptText from '../Components/CryptText'
import caesarCipher from '../../Util/Crpterfunc'
import errorText from '../../Util/errorFunc'


export default function HomeScreen() {
  const welcomeText=[
    'Hey, I wanna be encrypted','my password is qazplm87$%PERRFRNR456','Hey','I am batman,dont tell anyone'
  ]
  const randomIndex=Math.floor((Math.random()*welcomeText.length))
  console.log(randomIndex);
  const randString=welcomeText[randomIndex]
  const [text,setText] = useState(randString)
  const rand=String(Math.floor((Math.random()*1000)+1))
  const [shift,setShift] = useState(rand)
  const [isEncrypt,setIsEncrypt]=useState(true) 
  //////local vriables
  const isEmptyShift=shift==''
const isEmptyText=text.trim()==''
const isNegativeShift=Number(shift)<0
const isShiftInvalid=shift>1000|| isNaN(shift)


  const changeText=(e)=>{
setText(e)
  }
 const changeShift=(e)=>{
      setShift(e)
  }
  const changeCryptMode=(e)=>{
    setIsEncrypt(e)
  }


  return (
    <div className='root'>
      <h1 className='title'>
        Cryptex
      </h1>
      <Card>
        <Input text={text} changeText={changeText}></Input>
       <CrptBtn changeShift={changeShift} shift={shift} 
        isNegativeShift={isNegativeShift}
       isEncrypt={isEncrypt} changeCryptMode={changeCryptMode} 
       text={text} isEmptyShift={isEmptyShift} isEmptyText={isEmptyText}
       isShiftInvalid={isShiftInvalid}
       
       
       ></CrptBtn>
       <p style={{
        color:'red'
       }}>{errorText(isEmptyShift,isEmptyText,isNegativeShift,isShiftInvalid)}</p>
      </Card>
      <Card>
       <CryptTitle isEncrypt={isEncrypt} ></CryptTitle>
        <hr />
        <CryptText  text={text} shift={shift} isEncrypt={isEncrypt} ></CryptText>
      </Card>
    </div>
  )
}
