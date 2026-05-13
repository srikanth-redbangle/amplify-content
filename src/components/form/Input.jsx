import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'
import { Caution } from '../icons'
import { useState } from 'react'

function Input({
  label = null,
  name,
  labelClassName = '',
  inputClassname = '',
  hideLabel = false,
  required = false,
  borderedInput = false,
  placeholder,
  hideStar = false,
  forcedError = false,
  ...props
}) {
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  const [value, setValue] = useState(field.value || ''); // Initialize state for input value
  // console.log(value);
  // Handler to update value and convert capital letters to lowercase
  const handleChange = (event) => {
    const newValue = event.target.value;
    const lowercaseValue = name === 'Email' ? newValue.toLowerCase() : newValue;
    setValue(lowercaseValue);
    field.onChange(lowercaseValue);
  };

  const handlePhoneKeyPress = (event) => {

    const isValidInput = /^[0-9 ]+$/.test(event.key);
    const inputValue = event.target.value;
    const resultingValue = inputValue.slice(0, event.target.selectionStart) + event.key + inputValue.slice(event.target.selectionEnd);

    if (resultingValue.length > 10 || !isValidInput) {
      event.preventDefault();
    }
  }

  const handlePhoneInputChange = (event) => {
    let sanitizedValue = event.target.value.replace(/[^0-9+]/g, '');

    // Truncate the value if it exceeds 10 digits
    sanitizedValue = sanitizedValue.slice(0, 10);

    // Update the input value
    setValue(name, sanitizedValue);
  }

  return (
    <label
      htmlFor={name}
      className={`block w-full ${borderedInput ? 'relative' : ''
        } ${labelClassName}`}
    >
      {!borderedInput && !hideLabel && (
        <Label hideLabel={hideLabel} required={required}>{label ?? name}</Label>
      )}
      <input
        // className={
        //   borderedInput
        //     ? `w-full pr-7 ${hideLabel && 'mt-0 md:mt-12'} text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none ${inputClassname}`
        //     : `w-full p-4 ${hideLabel && 'mt-0 md:mt-12'} md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg ${inputClassname}`
        // }
        className={
          borderedInput
            ? `w-full pr-7 text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none ${inputClassname}`
            : `w-full p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg ${inputClassname}`
        }

        placeholder={`${placeholder ?? ''} ${borderedInput && required ? '*' : ' '
          }`}
        {...props}
        {...field}
        value={value} // Use state value instead of field value
        onChange={handleChange} // Use custom onChange handler
      />
      {fieldState?.error && (
        <>
          <ErrorLabel className={borderedInput ? 'text-xs' : ''}>
            {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
          </ErrorLabel>
          {borderedInput && <Caution className="absolute top-0 right-0" />}
        </>
      )}
      {forcedError && <ErrorLabel></ErrorLabel>}
    </label>
  )
}

export { Input }
