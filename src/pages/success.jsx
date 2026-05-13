import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'
import { useRouter } from 'next/router'

const Success = () => {
  const router = useRouter()
  const { type } = router.query
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center py-20">
          <img
            className="md:w-[192px] md:h-[192px] mb-8 md:mb-12"
            src="/img/success-check.svg"
            alt="success"
          />
          <h1 className="text-[26px] w-full mb-4 md:max-w-[70%] text-center font-medium md:leading-[54px] leading-7 tracking-[-0.52px] md:tracking-[-1.04px] md:text-[52px]">
            { type === 'collab'? 'Hey Makerr! We got your message.':'Thank you for contacting us!'}
            
          </h1>
          <p className="text-rb-black font-normal text-sm md:text-2xl opacity-90 md:max-w-[65%] text-center">
          { type === 'collab' 
          ?'Thanks for writing to us. We’ll get back to you soon. In the meantime, please feel free to explore more on our website.'
          :'We appreciate your interest and will respond to your message shortly. In the meantime, feel free to explore our website.'}
          </p>
          <Button
            href={ type === 'collab' ? 'http://makerrs.com':'/'}
            suffix={<LineArrow hover />}
            className="w-full md:w-[297px] mt-8 md:mt-10 uppercase"
          >
            { type === 'collab' ? 'Explore Makerrs': 'View Homepage'}
          </Button>
        </div>
      </div>
      <div className="w-full h-px my-6 md:my-8 bg-rb-black opacity-20"></div>
    </section>
  )
}

Success.PageLayoutProps = {
  hasContactForm: false,
}

export default Success
