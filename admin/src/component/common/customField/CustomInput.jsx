import React from 'react'

const CustomInput = ({ label, type, placeholder, name, onChange, onBlur, error }) => {
    return (
        <div >
            <div className=' lg:mx-5  '>
                <label className="block mb-1 font-medium py-1">
                    {label} <span className='text-red-500'>*</span>
                </label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`w-full sm:[50%] lg:w-88 px-3  py-2 border-2 rounded-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
            </div>
        </div>
    )
}

export default CustomInput