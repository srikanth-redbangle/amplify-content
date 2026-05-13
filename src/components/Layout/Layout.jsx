export const Layout = ({ children, PageLayout, className = '', ...rest }) => {
  return (
    <div className={`text-rb-black ${className}`}>
      <PageLayout {...rest}>{children}</PageLayout>
    </div>
  )
}
