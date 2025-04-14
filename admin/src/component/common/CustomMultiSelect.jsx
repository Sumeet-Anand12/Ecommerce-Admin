import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

const CustomMultiSelect = ({
  label,
  name,
  options,
  displayValue,
  selectedValues,
  setFieldValue,
  setFieldTouched,
  placeholder,
  error,
}) => {
    
    const getSelectedObjects = (selectedVals) => {
        return options.filter((opt) => selectedVals.includes(opt.value));
      };
    //   console.log(getSelectedObjects)
  return (
    <div className='mt-4 lg:mx-5 lg:w-88'>
      <label className="block mb-1 font-medium py-1">
        {label} <span className='text-red-500'>*</span>
      </label>
      <Multiselect
        className="w-full sm:w-1/2 mb-4"
        options={options}
        name={name}
        displayValue={displayValue}
        selectedValues={getSelectedObjects(selectedValues)}
        onSelect={(selectedList) => {
          setFieldValue(name, selectedList);
          setFieldTouched(name, true);
        }}
        onRemove={(selectedList) => {
          setFieldValue(name, selectedList);
          setFieldTouched(name, true);
        }}
        placeholder={placeholder}
        onSearch={() => {}} // suppress warning
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomMultiSelect;
