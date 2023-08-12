import React, { createContext, useState } from 'react'
import Input from './components/Input'
import QrCode from './components/QrCode'
import axios from 'axios'
// context 

export const InputContext = createContext()


function App() {

  const [inputValue, setInputValue] = useState({
    url: '',
    color: "",
  
  })
  const [response, setResponse] = useState('')
  const [err, setErr] = useState('')
  const [loading , setLoading] = useState('')
 
  

  const config = {
    headers:{Authorization:'Bearer e7028120-38d3-11ee-8dc2-874b251c6f59 '
      }
  }

  const bodyParmeter = {
   
    
      
      "colorDark": inputValue.color,
    "qrCategory": "url",
      "text": inputValue.url
    
    
  }

  const getqrcode = async () => {
    try {
      setLoading(true)
      const respond = await axios.post('https://qrtiger.com/api/qr/static', bodyParmeter, config)
      setResponse(respond.data.url)
    } catch (error) {
      setErr(error)
    }
    finally {
      setLoading(false)
    }
  }

  const value = {
    inputValue,
    setInputValue,
    getqrcode,
    response,
    loading,
    err
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-24 md:pt-80 px-2">
      
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
               <Input />
               <QrCode/>
          </InputContext.Provider>
        </div>
      </div>
      
    </div>
  )
}

export default App


// {
//   "size": 500,
//   "colorDark": "rgb(5,64,128)",
//   "logo": "scan_me.png",
//   "eye_outer": "eyeOuter2",
//   "eye_inner": "eyeInner1",
//   "qrData": "pattern0",
//   "backgroundColor": "rgb(255,255,255)",
//   "transparentBkg": false,
