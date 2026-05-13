import { useState, useEffect } from 'react'
import { Marquee } from '@/components/shared'
import { ClientInquiryForm } from '@/components/pages/contact/ClientInquiryForm'
import { SEO } from '@/components/shared/SEO'
import { contactSchema } from '@/components/schema/contact-schema'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { CollabInquiryForm } from '@/components/pages/contact/CollabInquiryForm'
const form = {
  'Client Inquiry': <ClientInquiryForm />,
  'Collab Inquiry': <CollabInquiryForm />,
  'Other': <ClientInquiryForm content={true} />   //updated JobInquiryForm based on "Other" tab inputs
}
const Contact = () => {
  const router = useRouter()
  const { type } = router.query

  const [activeInquiry, setActiveInquiry] = useState('Client Inquiry')


    useEffect(() => {
    if (type === 'collab') {
      setActiveInquiry('Collab Inquiry')
    } else {
      setActiveInquiry('Client Inquiry')
    }
  }, [type])

  const handleTabClick = (item) => {
    setActiveInquiry(item)
    const newType = item === 'Client Inquiry' ? 'client' : 'collab'
    router.push(
      {
        pathname: router.pathname,
        query: { type: newType },
      },
      undefined,
      { shallow: true }
    )
  }


  useEffect(() => {
    console.log(router.query, 'qq')
    if (router.query.type === 'client') {
      const el = document.getElementById('id')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }

  }, [])


  return (
    <>
      <SEO
        title="Best Video, Podcast and Design Agency | Contact Makerrs"
        description="Top agency for branding services, video production, podcast production and video crew services. Creative partner to global B2B and B2C brands."
        url="https://www.makerrs.com/contact"
      />


            <section className="py-14 md:py-24 bg-rb-mercury">
              <div className="container">
                <h1 className="uppercase mb-0 font-everett font-medium text-[45px] leading-[1.07] tracking-[-0.89px] md:text-[110px] md:leading-[122px] md:tracking-[-1.76px] ">
               Get in touch
                </h1>
              </div>
            </section>

      {/* <section
        className={`py-18 md:pt-23 md:pb-23 overflow-hidden bg-rb-service-grey`}
      >
        <h1 className="invisible pointer-events-none absolute">CONTACT US</h1>
       
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            Let&apos;s talk
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/lets-talk.webp"
              width="562"
              height="210"
              alt="lets talk"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            Let&apos;s talk
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/contact-pill.webp"
              width="562"
              height="210"
              alt="contact pill"
            />
          </div>
        </Marquee>
      </section> */}

        <div style={{ display: 'none' }}>
          <h2>Contact your Holistic Marketing Agency</h2>
          <h2>Meet your Content Production Agency</h2>
          <h2>Contact your Brand Strategy Solutions provider</h2>
          <h2>Reach your Content Production Services provider</h2>
          <h2>Contact your Content Production Solutions provider</h2>
        </div>

      <section className="bg-white" id='id'>
        <div className="container">
          <ul className="flex gap-4 md:gap-15 py-5  md:py-8 text-sm leading-4 font-medium whitespace-nowrap md:text-5xl font-everett overflow-x-auto">
            {['Client Inquiry', 'Collab Inquiry'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleTabClick(item)}
                  className={`${activeInquiry === item
                      ? 'text-rb-link-green'
                      : 'text-rb-black opacity-50 md:opacity-20 border-transparent'
                    }  hover:text-rb-link-green hover:opacity-100 transition-all border-b-2 md:border-b-0 pb-2 md:pb-0`}
                >
                  {item}
                </button>
              </li>
            ))}
            {/* <li>
              <Link
                href="/collab"
                className="text-rb-black opacity-50 md:opacity-20 hover:opacity-100 focus:opacity-100 transition-all hover:text-rb-red focus:text-rb-red flex items-center justify-center gap-1"
              >
                Collab Inquiry <CornerArrow className="w-5 h-5 md:w-8 md:h-8" />
              </Link>
            </li> */}
          </ul>
          <div>{form[activeInquiry]}</div>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>
    </>
  )
}
Contact.PageLayoutProps = {
  hasContactForm: false,
}
export default Contact
