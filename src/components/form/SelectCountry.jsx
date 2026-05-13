import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorLabel } from './ErrorLabel'

const placeholderStyles = {
  color:'rgb(17 16 16 / 0.4)'
}
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '18px',
    borderColor: state.isFocused ? 'black' : '#C8CACE',
    boxShadow: state.isFocused ? '0 0 0 1px black' : '',
    '&:hover': {
      borderColor: 'black',
    },
    '@media (max-width: 768px)': {
      padding: '16px 8px',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    ...placeholderStyles,
  }),
}

const customStylesFlex = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '18px',
    minWidth: '180px',
    borderColor: state.isFocused ? 'black' : '#C8CACE',
    boxShadow: state.isFocused ? '0 0 0 1px black' : '',
    '&:hover': {
      borderColor: 'black',
    },
    '@media (max-width: 768px)': {
      padding: '10px 4px',
      minWidth: '136px',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    ...placeholderStyles,
  }),
}

const changeHandler = (e, props) => {
  let value = null
  if (e) value = e.value
  // props.onChangeFunc(value, props.name, e)

  // if (!props.onValidateFunc) return

  let msg = null
  // if (!value && props.isReq) {
  //   msg = `Please select ${props.title}.`
  // }

  // props.onValidateFunc(msg, props.name)
}

const SelectCountry = ({
  name,
  title,
  placeholder,
  outerClassName,
  options,
  addCustomStyle,
  displayLabel,
  ...props
}) => {
  const { control, setValue, trigger } = useFormContext()
  const { fieldState, field } = useController({ name, control })

  const inputProps = {
    name: name,
    placeholder: placeholder || `Select ${title}`,
    outerClassName: outerClassName,
    value: options?.find((x) => x.value === props.value),
    options: options,
  }

  return (
    <div className={outerClassName}>
      <label
        className={`${displayLabel} form-label font-medium font-everett text-2xl text-label md:text-label-large mb-2 md:mb-4`}
      >
        {title}
      </label>
      <ReactSelect
        styles={addCustomStyle ? customStylesFlex : customStyles}
        {...inputProps}
        components={{
          IndicatorSeparator: () => null,
        }}
        // {...props}
        {...field}
        onChange={(e) => {
          setValue(name, e)
          trigger(name)
        }}
        getOptionLabel={(e) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              className="w-6 h-4 md:w-10 md:h-6.5"
              src={e?.label?.flag}
              alt={e?.label?.name}
            />
            <span>{e?.value}</span>
          </div>
        )}
        className='font-normal text-base md:!text-input-large text-rb-black'
      />

      {fieldState?.error && (
        <>
          <ErrorLabel className={''}>
            {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
          </ErrorLabel>
        </>
      )}
    </div>
  )
}

SelectCountry.defaultProps = {
  name: '',
  title: '',
  placeholder: '',
  className: '',
  outerClassName: 'mb-0',
  isClearable: true,
  addCustomStyle: false,
  displayLabel: 'inline-block',
  value: '',
  options: [],
}

SelectCountry.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  outerClassName: PropTypes.string,
  isClearable: PropTypes.bool,
  addCustomStyle: PropTypes.bool,
  displayLabel: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,

  errorMsg: PropTypes.any,
}

export default memo(SelectCountry)
