import React, { useState } from 'react'

const CustomBannerInput = ({ label, type, name, placeholder, onChange, onBlur, value, error }) => {
  console.log("file")
  const [preview, setPreview] = useState("")
  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
    onChange(e)
  }
  return (
    <div className="lg:mx-4 lg:w-full ">
      <label className="block mb-1 font-medium py-1">{label}</label>
      <div className='w-full sm:[50%] min-h-40  px-3  py-2 border-2 rounded-sm flex justify-center items-center'>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleFileChange}
          
          onBlur={onBlur}
          className=""
        />
        {
          preview && (
            <div className="mt-2">
              <img src={preview} alt="Banner Preview" className="h-32 rounded shadow" />
            </div>
          )
        }
      </div>

      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default React.memo(CustomBannerInput)
