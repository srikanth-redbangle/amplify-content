import { useController, useFormContext } from 'react-hook-form'
import { ErrorLabel } from './ErrorLabel'
import { Checkmark } from '@/components/icons'
import { cx } from 'class-variance-authority'

function Checkbox({
  label = null,
  name,
  labelClassName = '',
  required = false,
  negationValue,
  ...props
}) {
  const { control, setValue, trigger } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  const fieldValue = negationValue ? !field.value : field.value
  return (
    <label
      htmlFor={name}
      className={`w-full  relative text-input md:text-input-large items-center flex flex-wrap font-semibold ${labelClassName}`}
    >
      <div
        className={cx(
          'rounded text-white flex items-center justify-center w-5 h-5 mr-2.5  border transition-all',
          fieldValue ? 'border-rb-red bg-rb-red' : 'border-rb-black/40 '
        )}
      >
        <Checkmark />
      </div>
      {label ?? name}
      <input
        id={name}
        className="absolute opacity-0"
        type="checkbox"
        {...props}
        {...field}
        onChange={(e) => {
          setValue(name, e.target.checked)
          trigger(name)
        }}
        value={field.value ? 'on' : ''}
        checked={field.value ?? false}
      />

      {fieldState?.error && (
        <ErrorLabel>
          {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
        </ErrorLabel>
      )}
    </label>
  )
}

export { Checkbox }
