import { Plus } from 'lucide-react'
import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = ({user}) => {
    const fileRef = useRef()
    const navigate = useNavigate()
    const handleClick = () => {
        if(user){
            fileRef.current.click()
        }
        else{
            navigate('/login')
        }
    }
  return (
    
     <div>

    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly min-h-screen p-6 relative overflow-hidden">
     
     <div className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-5 max-w-lg">
       <img className="w-64 md:w-48 lg:w-full" src="/images/bank-person.png" alt="Bank Person" />
       <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
         Upload Your <span className='bg-green-500 px-3 py-1 rounded-lg text-white'>Bank Statement</span>
       </h2>
       <p className='text-base md:text-lg text-gray-700'>
         <span className='bg-blue-500 px-3 py-1 rounded-lg font-bold text-white'>AI</span> Based Processing
       </p>
     </div>

     <div className="upload mt-6 lg:mt-0">
       <input className='hidden' type="file" ref={fileRef} accept="application/pdf"/>
       <div 
         className="upload-container cursor-pointer border-4 border-green-600 border-dashed p-8 md:p-12 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg w-60 md:w-72 lg:w-80 text-center"
         onClick={handleClick}
       >
         <Plus size={40} className="text-green-600" />
         <h2 className='text-lg md:text-xl font-semibold text-gray-800'>Upload Your PDF</h2>
         <p className='text-gray-600 text-sm md:text-base'>or Drag and Drop</p>
       </div>
      </div>
      </div>

     </div>
  )
}

export default Landing