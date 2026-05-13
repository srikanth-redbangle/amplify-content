import React, { useState } from 'react'

import Select from 'react-select'
import { useController, useFormContext } from 'react-hook-form'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '18px 10px',
    borderColor: state.isFocused ? 'black' : '#C8CACE',
    boxShadow: state.isFocused ? '0 0 0 1px black' : '',
    '&:hover': {
      borderColor: 'black',
    },
    '@media (max-width: 768px)': {
      padding: '16px 8px',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(7,239,90,0.7)', // Set the background color for selected tags
    borderRadius: '32px', // Set rounded corners for selected tags
    color: '#000',
    padding: '4px 10px',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '1.3',
    marginRight: '4px',
    display: 'flex',
    alignItems: 'center',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#000', // Set the text color for selected tag labels
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#000', // Set the color for the remove (x) button
    padding: '0px',
    width: '16px',
    height: '16px',
    marginLeft: '4px',
    ':hover': {
        backgroundColor: 'rgba(7,239,90,0.7)', // Set the background color for selected tags
    },
  }),
}

const SelectTagsInput = ({ name, options, ...props }) => {
  // const [selectedOptions, setSelectedOptions] = useState([])

  const { control, setValue, trigger } = useFormContext()
  const { fieldState, field } = useController({ name, control })

  const inputProps = {
    name: name,

    value: options?.find((x) => x.value === props.value),
    options: options,
  }
  // console.log(field)

  return (
    <div className="col-span-2 md:col-span-1">
      <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
        Other services (Max 2)
      </label>
      <Select
        // defaultValue={[primaryServiceList[2], primaryServiceList[3]]}
        isMulti
        {...inputProps}
        {...field}
        className="basic-multi-select"
        classNamePrefix="select"
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={customStyles}
        isClearable={false}
        // value={selectedOptions}
        // onChange={(o) => setSelectedOptions(o)}
        isOptionDisabled={() => field?.value?.length >= 2}
        onChange={(e) => {
          setValue(name, e)
          trigger(name)
        }}
        label
        placeholder="Enter more services"
      />
    </div>
  )
}

export default SelectTagsInput
