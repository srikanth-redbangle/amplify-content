export const LineHeading = ({
  children,
  className = '',
  as = 'div',
  white = false,
  lineStyles=''
}) => {
  const Wrapper = as ?? 'div'
  return (
    <Wrapper
      className={`uppercase ${
        white ? 'text-white' : 'text-rb-black'
      } text-sm md:text-xl font-semibold flex items-center ${className}`}
    >
      <span
        className={`h-px w-7.5 md:w-headingLine  block mr-3 ${
          white ? 'bg-white' : 'bg-rb-black'
        } ${lineStyles}`}
      ></span>
      {children}
    </Wrapper>
  )
}
