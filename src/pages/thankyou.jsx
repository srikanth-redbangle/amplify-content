import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'

const Thankyou = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center py-20">
          <img
            className="md:w-[192px] md:h-[192px] mb-8 md:mb-12"
            src="/img/success-email.svg"
            alt="success email"
          />
          <h1 className="text-[26px] w-full mb-4 md:max-w-[70%] text-center font-medium md:leading-[54px] leading-7 tracking-[-0.52px] md:tracking-[-1.04px] md:text-[52px]">
            Please verify your email address
          </h1>
          <p className="text-rb-black/80 font-normal text-sm md:text-2xl opacity-90 md:max-w-[65%] text-center">
            Your profile is nearly complete. Click the link we just emailed you
            to verify your email address. Exciting Adventures Await!
          </p>
          <Button
            href="/"
            suffix={<LineArrow hover />}
            className="w-full md:w-[297px] mt-8 md:mt-10 uppercase"
          >
            View Homepage
          </Button>
        </div>
      </div>
      <div className="w-full h-px my-6 md:my-8 bg-rb-black opacity-20"></div>
    </section>
  )
}

Thankyou.PageLayoutProps = {
  hasContactForm: false,
}

export default Thankyou
