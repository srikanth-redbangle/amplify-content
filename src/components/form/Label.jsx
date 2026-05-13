export const Label = ({ children, required, hideLabel }) => (
  <span className={`font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4`}>
    {children}
    {required && !hideLabel && '*'} 
  </span>
)
