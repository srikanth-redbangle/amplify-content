import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'
import { Caution } from '../icons'

function Select({
  label = null,
  name,
  labelClassName = '',
  hideLabel = false,
  required = false,
  borderedInput = false,
  placeholder,
  options = [],
  ...props
}) {
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })

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
      <select
        className={
          borderedInput
            ? 'w-full pr-7 text-base text-[#625F5F] placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none appearance-none rb-select'
            : 'w-full p-4 md:p-6 text-input md:text-input-large placeholder:text-rb-black/40 text-[#9C9898] border border-rb-border-grey rounded-lg appearance-none rb-select'
        }
        placeholder={`${placeholder ?? ''}${
          borderedInput && required ? '*' : ''
        }`}
        {...props}
        {...field}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>

        {options?.map((o, i) => (
          <option key={o?.value + i} value={o?.value}>
            {o?.label}
          </option>
        ))}
      </select>
      {fieldState?.error && (
        <>
          <ErrorLabel className={borderedInput ? 'text-xs' : ''}>
            {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
          </ErrorLabel>
          {borderedInput && <Caution className="absolute top-0 right-0" />}
        </>
      )}
    </label>
  )
}

export { Select }
