import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'

export const TextArea = ({
  label = null,
  name,
  labelClassName = '',
  noBorder,
  className = '',
  hideLabel = false,
  required = false,
  ...props
}) => {
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })

  return (
    <label htmlFor={name} className={`block w-full ${labelClassName}`}>
      {!hideLabel && <Label required={required}>{label ?? name}</Label>}
      <textarea
        className={`w-full bg-transparent font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black ${
          noBorder ? '' : 'p-4 md:p-6 border'
        } border-rb-border-grey rounded-lg ${className}`}
        {...props}
        {...field}
      ></textarea>
      {fieldState?.error && (
        <ErrorLabel>
          {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
        </ErrorLabel>
      )}
    </label>
  )
}
