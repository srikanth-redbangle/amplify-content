import { Header, Footer } from '../ui'

export const WebsiteLayout = ({
  children,
  className = '',
  hasContactForm = true,
}) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer hasContactForm={hasContactForm} />
    </>
  )
}
