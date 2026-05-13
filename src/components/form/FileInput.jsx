import { useController, useFormContext } from 'react-hook-form'
import { Label } from './Label'
import { ErrorLabel } from './ErrorLabel'
import { Pin } from '../icons'

function FileInput({
  label = null,
  name,
  uploadText,
  labelClassName = '',
  hideLabel = false,
  placeholder,
  required = false,
  ...props
}) {
  const { control, setValue } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  const text =
    field.value?.map((v) => v.name).join(',') ||
    placeholder ||
    'No file choosen'
  const onChange = (e) => {
    setValue(field.name, Array.from(e.currentTarget.files))
  }
  return (
    <label
      htmlFor={name}
      className={`block w-full ${labelClassName} relative focus:outline `}
    >
      {!hideLabel && <Label required={required}>{label ?? name}</Label>}
      <div
        className={
          !hideLabel
            ? 'p-4 md:p-6 font-semibold text-input md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg relative'
            : ''
        }
      >
        <div className="flex flex-wrap items-center text-input md:text-base font-semibold text-rb-black/40">
          <span className="text-rb-black underline flex items-center">
            <Pin />
            {uploadText ?? label ?? name}
          </span>
          <div className="mx-2 md:mx-3">|</div>
          {text}
        </div>

        <input
          className=" opacity-0 absolute top-0 left-0 right-0 bottom-0"
          id={name}
          name={name}
          {...props}
          type="file"
          multiple
          onChange={onChange}
        />
      </div>
      {fieldState?.error && (
        <ErrorLabel>
          {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
        </ErrorLabel>
      )}
    </label>
  )
}

export { FileInput }
