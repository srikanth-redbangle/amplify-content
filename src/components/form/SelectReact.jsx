import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorLabel } from './ErrorLabel'

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
}

const customStylesFlex = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '18px',
    minWidth: '200px',
    borderColor: state.isFocused ? 'black' : '#C8CACE',
    boxShadow: state.isFocused ? '0 0 0 1px black' : '',
    '&:hover': {
      borderColor: 'black',
    },
    '@media (max-width: 768px)': {
      padding: '16px 4px',
      minWidth: '120px',
    },
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

const SelectReact = ({
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
    // isClearable: isClearable,
    value: options?.find((x) => x.value === props.value),
    options: options,
  }
  // console.log(field)

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
      />
      {/* {props.errorMsg && (
        <span className="text-danger mt-2 flex items-center font-medium text-red-500 ">
          {props.errorMsg === true
            ? `Please select ${props.title}.`
            : props.errorMsg}
        </span>
      )} */}
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

SelectReact.defaultProps = {
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
  // onChangeFunc: () => {},
  // isReq: null,
  // onValidateFunc: () => {},
}

SelectReact.propTypes = {
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
  // onChangeFunc: PropTypes.func,
  // isReq: PropTypes.bool,
  errorMsg: PropTypes.any,
  // onValidateFunc: PropTypes.func,
}

export default memo(SelectReact)
