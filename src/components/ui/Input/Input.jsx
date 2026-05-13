import { cx } from 'class-variance-authority'

export const Input = ({
  type = '',
  name,
  required = false,
  placeholder = '',
  className,
  ...rest
}) => {
  return (
    <input
      {...rest}
      placeholder={`${placeholder}${required ? '*' : ''}`}
      className={cx(
        'text-base text-rb-black placeholder:text-rb-black/60 pb-3 border-b border-b-rb-davy-grey/60 bg-transparent focus:outline-none',
        className
      )}
    />
  )
}
