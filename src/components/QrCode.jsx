import React, { useContext } from 'react'
import { InputContext } from '../App'
import { saveAs } from 'file-saver'

const QrCode = () => {
  const { response, loading, err } = useContext(InputContext)
 

  
  const handleDownload = () => {
    saveAs(response ,'qrCode.png') 
  }
  
 if(loading) {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
      <div className="h-32 w-full bg-gray-300"></div>
      <div className="h-8 w-full bg-gray-300"></div>
    </div>
  );
  }
  if(err) {
    return <div className="text-gray-500 flex items-center">Sorry, Something went wrong 😥</div>
  }
  
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
      {
        response ? <div>
          
        <img className="w-48"
        src={response} alt="" />
       
          <button
            onClick={handleDownload}
        className="bg-blue-400 text-white mt-2 px-4 py-1 w-full"
        >
            Download
        </button>
        </div> : (
          <div className="text-gray-500">Your QrCode will showing here...</div>
    )
      }
          
    </div>
  )
}

export default QrCode
