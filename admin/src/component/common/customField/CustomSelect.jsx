import React from 'react'

const CustomSelect = ({ label, name, options, onChange, value, onBlur, multiple=false, error }) => {
  return (
    <div className="lg:mx-5">
      <label className="block mb-1 font-medium py-1">{label} <span className='text-red-500'>*</span></label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className=" sm:w-[50%] w-full lg:w-88 px-3  py-2 border-2 rounded-sm"
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default CustomSelect
