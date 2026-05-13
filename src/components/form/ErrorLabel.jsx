export const ErrorLabel = ({ children, className = '' }) => {
  return (
    <span
      className={`mt-1 flex items-center font-normal tracking-[-0.14px] text-sm text-red-500 ${className}`}
    >
      {children}
    </span>
  )
}
