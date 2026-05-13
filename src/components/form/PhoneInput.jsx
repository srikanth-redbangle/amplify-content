// import { useController, useFormContext } from 'react-hook-form'
// import { Label } from './Label'
// import { ErrorLabel } from './ErrorLabel'
// import { Caution } from '../icons'

// function PhoneInput({
//   label = null,
//   name,
//   labelClassName = '',
//   inputClassname = '',
//   hideLabel = false,
//   required = false,
//   borderedInput = false,
//   placeholder,
//   forcedError = false,
//   ...props
// }) {
//   const { control, setValue } = useFormContext()
//   const { fieldState, field } = useController({ name, control })

//   const handlePhoneKeyPress = (event) => {

//   const isValidInput = /^[0-9 ]+$/.test(event.key);
//   const inputValue = event.target.value;
//   const resultingValue = inputValue.slice(0, event.target.selectionStart) + event.key + inputValue.slice(event.target.selectionEnd);

//   if (resultingValue.length > 10 || !isValidInput) {
//     event.preventDefault();
//   }
//   }

//   const handlePhoneInputChange = (event) => {
//     let sanitizedValue = event.target.value.replace(/[^0-9+]/g, '');

//     // Truncate the value if it exceeds 10 digits
//     sanitizedValue = sanitizedValue.slice(0, 10);
  
//     // Update the input value
//     setValue(name, sanitizedValue);
//   }

//   return (
//     <label
//       htmlFor={name}
//       className={`block w-full ${
//         borderedInput ? 'relative' : ''
//       } ${labelClassName}`}
//     >
//       {!borderedInput && !hideLabel && (
//         <Label required={required}>{label ?? name}</Label>
//       )}
//       <input
//         className={
//           borderedInput
//             ? `w-full pr-7 text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none ${inputClassname}`
//             : `w-full p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg ${inputClassname}`
//         }
//         placeholder={`${placeholder ?? ''}${
//           borderedInput && required ? '*' : ''
//         }`}
//         onKeyPress={handlePhoneKeyPress}
//         onChange={handlePhoneInputChange}
//         // {...props}
//         // {...field}
//       />
//       {fieldState?.error && (
//         <>
//           <ErrorLabel className={borderedInput ? 'text-xs' : ''}>
//             {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
//           </ErrorLabel>
//           {borderedInput && <Caution className="absolute top-0 right-0" />}
//         </>
//       )}
//       {forcedError && <ErrorLabel></ErrorLabel>}
//     </label>
//   )
// }

// export { PhoneInput }


import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'
import { Caution } from '../icons'
import { useState } from 'react'

function PhoneInput({
  label = null,
  countryCode=null,
  name,
  labelClassName = '',
  inputClassname = '',
  hideLabel = false,
  required = false,
  borderedInput = false,
  placeholder,
  forcedError = false,
  ...props
}) {
  const { control, setValue } = useFormContext()
  const { fieldState, field } = useController({ name, control })
// console.log(value)
  const handlePhoneKeyPress = (event) => {
    // Allow only numeric characters, space and the plus symbol
    // const isValidInput = /^[0-9+ -]+$/.test(event.key)

    // // If the input is not valid, prevent the default action
    // if (!isValidInput) {
    //   event.preventDefault()
    // }

      // Allow only numeric characters, space, and the plus symbol
  const isValidInput = /^[0-9 ]+$/.test(event.key);

  // Get the current input value
  const inputValue = event.target.value;

  // Get the resulting value if the current key press is accepted
  const resultingValue = inputValue.slice(0, event.target.selectionStart) + event.key + inputValue.slice(event.target.selectionEnd);

  // Check if the resulting value exceeds 10 characters
  if (countryCode==91) {
    if (resultingValue.length > 10 || !isValidInput) {
      event.preventDefault();
    }
  }
  }

  const handlePhoneInputChange = (event) => {
    // Remove non-numeric characters from the input
    // const sanitizedValue = event.target.value.replace(/^[0-9+ -]+$/g, '')

    // // Update the input value
    // setValue(name, sanitizedValue)
    let sanitizedValue = event.target.value.replace(/[^0-9+]/g, '');

    // Truncate the value if it exceeds 10 digits
    sanitizedValue = sanitizedValue.slice(0, 10);
  
    // Update the input value
    setValue(name, sanitizedValue);
  }

  return (
    <label
      htmlFor={name}
      className={`block w-full ${
        borderedInput ? 'relative' : ''
      } ${labelClassName}`}
    >
      {!borderedInput && !hideLabel && (
        <Label required={required}>{label ?? name}</Label>
      )}
      <input
      onPaste={(e)=>e.preventDefault()}
      autoComplete='off'
        className={
          borderedInput
            ? `w-full pr-7 text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none ${inputClassname}`
            : `w-full p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg ${inputClassname}`
        }
        placeholder={`${placeholder ?? ''}${
          borderedInput && required ? '*' : ''
        }`}
        onKeyPress={handlePhoneKeyPress}
        onChange={handlePhoneInputChange}
        {...props}
        {...field}
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

export { PhoneInput }