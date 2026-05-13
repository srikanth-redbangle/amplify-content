import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'
import { ContactSection, Marquee, NewsletterField } from '@/components/shared'
import { useRouter } from 'next/router'
import useBaseUrl from '@/utils/baseUrl'

const dropDownArrow = (
  <svg width="12" height="12" viewBox="0 0 17 17" fill="none">
    <path
      d="m1.625 15.375 13.75-13.75m0 0H1.625m13.75 0v13.75"
      stroke="#13c33f"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const socials = [
  {
    key: 0,
    icon: (
      <svg
        className="w-full group-hover:text-[#006699] transition-all"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="19.375"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M12 12.8009C12 12.2789 12.1871 11.8482 12.5612 11.5089C12.9353 11.1696 13.4216 11 14.0202 11C14.6081 11 15.0837 11.167 15.4472 11.5011C15.8213 11.8456 16.0083 12.2945 16.0083 12.8478C16.0083 13.349 15.8266 13.7665 15.4632 14.1006C15.0891 14.4451 14.5974 14.6174 13.9881 14.6174H13.9721C13.3842 14.6174 12.9086 14.4451 12.5451 14.1006C12.1817 13.7561 12 13.3229 12 12.8009ZM12.2084 26.5031V16.0424H15.7678V26.5031H12.2084ZM17.7399 26.5031H21.2993V20.662C21.2993 20.2966 21.3421 20.0148 21.4276 19.8164C21.5772 19.4615 21.8044 19.1613 22.109 18.916C22.4136 18.6706 22.7957 18.548 23.2554 18.548C24.4525 18.548 25.0511 19.3362 25.0511 20.9126V26.5031H28.6105V20.5054C28.6105 18.9604 28.2364 17.7885 27.4882 16.9898C26.7399 16.1912 25.7512 15.7919 24.522 15.7919C23.1431 15.7919 22.0689 16.3713 21.2993 17.5301V17.5614H21.2833L21.2993 17.5301V16.0424H17.7399C17.7613 16.3765 17.772 17.4153 17.772 19.1587C17.772 20.9022 17.7613 23.3503 17.7399 26.5031Z"
          fill="currentColor"
        />
      </svg>
    ),
    href: 'https://www.linkedin.com/company/makerrsagency',
    title: (
      <span className="group-hover:text-[#006699] transition-all">
        LinkedIn
      </span>
    ),
  },
  {
    key: 1,
    icon: (
      <div className="relative">
        <svg
          className="w-full"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r="19.375"
            fill="#fff"
            stroke="#C2377B"
            strokeWidth="1.25"
          />
          <g clipPath="url(#a)">
            <path
              fill="url(#b)"
              d="M13.754 10.908a4.711 4.711 0 0 0-1.703 1.11 4.697 4.697 0 0 0-1.11 1.699c-.238.61-.398 1.308-.445 2.332-.047 1.023-.059 1.351-.059 3.96 0 2.61.012 2.938.06 3.962.046 1.023.21 1.722.444 2.332a4.712 4.712 0 0 0 1.11 1.703c.535.535 1.07.863 1.703 1.11.61.238 1.309.398 2.332.445 1.023.046 1.352.058 3.96.058 2.61 0 2.938-.012 3.962-.058 1.023-.047 1.723-.211 2.332-.446a4.712 4.712 0 0 0 1.703-1.11 4.713 4.713 0 0 0 1.11-1.702c.238-.61.398-1.309.445-2.332.047-1.024.058-1.352.058-3.961 0-2.61-.011-2.938-.058-3.961-.047-1.024-.211-1.723-.446-2.332a4.738 4.738 0 0 0-1.105-1.7 4.711 4.711 0 0 0-1.703-1.109c-.61-.238-1.309-.398-2.332-.445-1.024-.047-1.352-.059-3.961-.059-2.61 0-2.938.012-3.961.059-1.027.043-1.727.207-2.336.445ZM23.93 12.19c.937.042 1.445.199 1.785.332.45.175.77.382 1.105.718.336.336.543.656.72 1.106.132.34.288.847.331 1.785.047 1.012.055 1.316.055 3.883 0 2.566-.012 2.87-.055 3.883-.043.937-.2 1.445-.332 1.785-.176.449-.383.77-.719 1.105a2.993 2.993 0 0 1-1.105.719c-.34.133-.848.289-1.785.332-1.012.047-1.317.055-3.883.055-2.567 0-2.871-.012-3.883-.055-.937-.043-1.445-.2-1.785-.332a2.995 2.995 0 0 1-1.106-.719 2.993 2.993 0 0 1-.718-1.105c-.133-.34-.29-.848-.332-1.785-.047-1.012-.055-1.317-.055-3.883 0-2.567.012-2.871.055-3.883.043-.938.199-1.446.332-1.785.175-.45.383-.77.718-1.106a2.995 2.995 0 0 1 1.106-.719c.34-.132.848-.289 1.785-.332 1.012-.046 1.316-.054 3.883-.054 2.566 0 2.871.008 3.883.055Z"
            />
            <path
              fill="url(#c)"
              d="M15.117 20.014a4.934 4.934 0 1 0 9.868 0 4.934 4.934 0 0 0-9.868 0Zm8.137 0a3.202 3.202 0 1 1-6.405 0 3.202 3.202 0 0 1 6.405 0Z"
            />
            <path
              fill="#654C9F"
              d="M25.18 16.037a1.152 1.152 0 1 0 0-2.304 1.152 1.152 0 0 0 0 2.304Z"
            />
          </g>
          <defs>
            <radialGradient
              id="b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(-3 537.341 -192.037) scale(27.7857 23.6176)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FED576" />
              <stop offset=".263" stopColor="#F47133" />
              <stop offset=".609" stopColor="#BC3081" />
              <stop offset="1" stopColor="#4C63D2" />
            </radialGradient>
            <radialGradient
              id="c"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(14.24874 -.74677 .63474 12.11128 15.296 24.043)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FED576" />
              <stop offset=".263" stopColor="#F47133" />
              <stop offset=".609" stopColor="#BC3081" />
              <stop offset="1" stopColor="#4C63D2" />
            </radialGradient>
            <clipPath id="a">
              <path fill="#fff" d="M10 10h20v20H10z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="40"
          height="40"
          className="w-full absolute top-0 group-hover:opacity-0 opacity-100 transition-all"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="white" />
          <circle
            cx="20"
            cy="20"
            r="19.375"
            stroke="#333333"
            strokeOpacity="0.5"
            strokeWidth="1.25"
          />
          <g clipPath="url(#clip0_2044_458)">
            <path
              d="M13.7539 10.9082C13.1211 11.1543 12.5859 11.4824 12.0508 12.0176C11.5156 12.5488 11.1875 13.0879 10.9414 13.7168C10.7031 14.3262 10.543 15.0254 10.4961 16.0488C10.4492 17.0723 10.4375 17.4004 10.4375 20.0098C10.4375 22.6191 10.4492 22.9473 10.4961 23.9707C10.543 24.9941 10.707 25.6934 10.9414 26.3027C11.1875 26.9355 11.5156 27.4707 12.0508 28.0059C12.5859 28.541 13.1211 28.8691 13.7539 29.1152C14.3633 29.3535 15.0625 29.5137 16.0859 29.5605C17.1094 29.6074 17.4375 29.6191 20.0469 29.6191C22.6563 29.6191 22.9844 29.6074 24.0078 29.5605C25.0312 29.5137 25.7305 29.3496 26.3398 29.1152C26.9727 28.8691 27.5078 28.541 28.043 28.0059C28.5781 27.4707 28.9062 26.9355 29.1523 26.3027C29.3906 25.6934 29.5508 24.9941 29.5977 23.9707C29.6445 22.9473 29.6562 22.6191 29.6562 20.0098C29.6562 17.4004 29.6445 17.0723 29.5977 16.0488C29.5508 15.0254 29.3867 14.3262 29.1523 13.7168C28.9062 13.0879 28.5781 12.5488 28.0469 12.0176C27.5117 11.4824 26.9766 11.1543 26.3437 10.9082C25.7344 10.6699 25.0352 10.5098 24.0117 10.4629C22.9883 10.416 22.6602 10.4043 20.0508 10.4043C17.4414 10.4043 17.1133 10.416 16.0898 10.4629C15.0625 10.5059 14.3633 10.6699 13.7539 10.9082ZM23.9297 12.1895C24.8672 12.2324 25.375 12.3887 25.7148 12.5215C26.1641 12.6973 26.4844 12.9043 26.8203 13.2402C27.1562 13.5762 27.3633 13.8965 27.5391 14.3457C27.6719 14.6855 27.8281 15.1934 27.8711 16.1309C27.918 17.1426 27.9258 17.4473 27.9258 20.0137C27.9258 22.5801 27.9141 22.8848 27.8711 23.8965C27.8281 24.834 27.6719 25.3418 27.5391 25.6816C27.3633 26.1309 27.1562 26.4512 26.8203 26.7871C26.4844 27.123 26.1641 27.3301 25.7148 27.5059C25.375 27.6387 24.8672 27.7949 23.9297 27.8379C22.918 27.8848 22.6133 27.8926 20.0469 27.8926C17.4805 27.8926 17.1758 27.8809 16.1641 27.8379C15.2266 27.7949 14.7188 27.6387 14.3789 27.5059C13.9297 27.3301 13.6094 27.123 13.2734 26.7871C12.9375 26.4512 12.7305 26.1309 12.5547 25.6816C12.4219 25.3418 12.2656 24.834 12.2227 23.8965C12.1758 22.8848 12.168 22.5801 12.168 20.0137C12.168 17.4473 12.1797 17.1426 12.2227 16.1309C12.2656 15.1934 12.4219 14.6855 12.5547 14.3457C12.7305 13.8965 12.9375 13.5762 13.2734 13.2402C13.6094 12.9043 13.9297 12.6973 14.3789 12.5215C14.7188 12.3887 15.2266 12.2324 16.1641 12.1895C17.1758 12.1426 17.4805 12.1348 20.0469 12.1348C22.6133 12.1348 22.918 12.1426 23.9297 12.1895Z"
              fill="#333333"
              fillOpacity="0.8"
            />
            <path
              d="M15.1172 20.0137C15.1172 22.7402 17.3281 24.9473 20.0508 24.9473C22.7734 24.9473 24.9844 22.7363 24.9844 20.0137C24.9844 17.291 22.7773 15.0801 20.0508 15.0801C17.3242 15.0801 15.1172 17.2871 15.1172 20.0137ZM23.2539 20.0137C23.2539 21.7832 21.8203 23.2168 20.0508 23.2168C18.2813 23.2168 16.8477 21.7832 16.8477 20.0137C16.8477 18.2441 18.2813 16.8105 20.0508 16.8105C21.8203 16.8105 23.2539 18.2441 23.2539 20.0137Z"
              fill="#333333"
              fillOpacity="0.8"
            />
            <path
              d="M25.1797 16.0371C25.8161 16.0371 26.332 15.5212 26.332 14.8848C26.332 14.2483 25.8161 13.7324 25.1797 13.7324C24.5433 13.7324 24.0273 14.2483 24.0273 14.8848C24.0273 15.5212 24.5433 16.0371 25.1797 16.0371Z"
              fill="#333333"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <clipPath id="clip0_2044_458">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    href: 'https://www.instagram.com/makerrsagency/',
    className: styles.instagram,
    title: <span className="transition-all">Instagram</span>,
  },
    {
    key: 2,
    icon: (
      <svg
        className="w-full group-hover:text-[#FF0000] transition-all"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="19.375"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          fill="currentColor"
          d="M29.802 14.71a2.532 2.532 0 0 0-1.788-1.787c-1.577-.423-7.901-.423-7.901-.423s-6.325 0-7.902.423a2.532 2.532 0 0 0-1.788 1.788C10 16.287 10 19.579 10 19.579s0 3.291.423 4.868c.233.87.917 1.555 1.788 1.788 1.577.422 7.902.422 7.902.422s6.324 0 7.901-.422a2.532 2.532 0 0 0 1.788-1.788c.423-1.577.423-4.868.423-4.868s-.002-3.292-.423-4.868Z"
        />
        <path fill="#fff" d="m18.09 22.611 5.254-3.033-5.254-3.033v6.066Z" />
      </svg>
    ),
     href: 'https://www.youtube.com/@MakerrsAgency',
    title: (
      <span className="group-hover:text-[#FF0000] transition-all">YouTube</span>
    ),
  }
]

const offices = [
  {
    key: 0,
    city: 'USA',
    location: (
      <>
        <div>
          1401, 21st Street,<br />
          Sacramento, CA 95811
        </div>
      </>
    ),
    href: 'https://www.google.com/maps/place/1401+21st+Street,+Sacramento,+CA+95811,+USA/@38.5716362,-121.4828713,17z/data=!3m1!4b1!4m6!3m5!1s0x809ad0dd31429b21:0xf70097f62f217b93!8m2!3d38.5716362!4d-121.4802964!16s%2Fg%2F11bw3zm4_h!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
  {
    key: 1,
    city: 'INDIA',
    location: (
      <>
        <div>
          2nd Floor, Silver Rock,
          <br />
          12, Nandi Durga Road, 1,1st Main Road,
          <br />
          Bengaluru, Karnataka 560046
        </div>
      </>
    ),
    href: 'https://maps.app.goo.gl/knhMr7MV1TVjJPSt8',
  },
  {
    key: 2,
    city: 'SINGAPORE',
    location: (
      <>
        <div>
          1 North Bridge Road,
          <br />
          #19-08 High Street Centre,
          <br />
          Singapore 179094
        </div>
      </>
    ),
    href: 'https://www.google.com/maps/place/1+N+Bridge+Rd,+%2319+08+High+Street+Centre,+Singapore+179094/@1.2898642,103.8469338,17z/data=!3m1!4b1!4m5!3m4!1s0x31da19a0958fa7c5:0x5f236f2cb6ac7504!8m2!3d1.2898642!4d103.8495087!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
]


export const Footer = ({ hasContactForm }) => {
  const router = useRouter()
  const { b2b, b2c } = useBaseUrl()

  // Access the current pathname
  const currentPath = router.pathname

  // console.log('currentPath', currentPath)

  return (
    <footer>
      {hasContactForm &&
  currentPath !== '/blog' &&
  currentPath !== '/custom-campaign-landing-page' &&
  currentPath !== '/end-to-end-video-production' &&
  currentPath !== '/career' && (
    currentPath === '/freelance-gigs' ? (
      <ContactSection type="collab" />
    ) : (
      <ContactSection />
    )
)}

      {currentPath != '/end-to-end-video-production' && (
        <>
          <section className="py-15 md:py-23 bg-white">
            <div className="container">
              <div className="rb-row flex-col md:flex-row md:mb-15">
                {offices.map((o) => (
                  <div className="w-full md:w-1/3 mb-10 md:mb-0" key={o.key}>
                    <div className="font-medium text-base md:text-2xl uppercase tracking-[-1px] font-everett">
                      {o.city}
                    </div>
                    <div
                      className={`mt-2 mb-5.5 md:mb-8 text-sm md:text-base text-rb-black/70 font-normal tracking-[-0.5px] ${
                        o.city === 'USA' ? 'md:mb-[57px]' : ''
                      }`}
                    >
                      {o.location}
                    </div>
                    {o.href ? (
                      <a
                        href={o.href}
                        data-rb-cursor-state="invisible"
                        className="flex items-center text-sm leading-5 uppercase font-semibold border-b-2 border-rb-storm-dust pb-1.5 max-w-max see-on-map"
                      >
                        See on map
                        <svg
                          width="14"
                          height="11"
                          className="ml-7 inline-block"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.13656 1L12.678 5.54145M12.678 5.54145L8.13656 10.0829M12.678 5.54145L1 5.54145"
                            stroke="currentColor"
                            strokeOpacity="0.7"
                            strokeWidth="1.79662"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
              </div>

              <div className="font-medium text-base md:text-2xl md:mt-0 uppercase tracking-[-1px] mb-5 font-everett">
                Social Connect
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5.5 md:gap-y-0 md:gap-x-18 md:flex md:flex-wrap">
                {socials.map((s) => (
                  <a
                    href={s.href}
                    key={s.key}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-social-small md:text-social font-semibold text-rb-dune/80 max-w-max group ${
                      s?.className ?? ''
                    }`}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3  rounded-sm flex items-center justify-center">
                      {s.icon}
                    </div>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-rb-black uppercase font-medium overflow-hidden text-white py-4 md:py-11.5 text-[26px] leading-7 md:text-[68px] md:leading-[74px]">
            {/* <div className={styles.footerMarquee}></div> */}
            <Marquee scrollSpeedBased duration={55}>
              <div className="mr-3.5 md:mr-[54px] flex items-center">
                {/* <span className="text-rb-red">Content&nbsp;</span> */}
                CREATIVE PARTNER TO BORDERLESS BRANDS
                <div className="w-0.5 md:w-2 h-5 md:h-14 bg-white ml-3.5 mr-3.5 md:ml-[54px] md:mr-[54px]"></div>
                CREATIVE PARTNER TO BORDERLESS BRANDS
                <div className="w-0.5 md:w-2 h-5 md:h-14 bg-white ml-3.5 md:ml-[54px]"></div>
              </div>
            </Marquee>
          </section>
        </>
      )}

       <section className="py-15 md:pt-20 md:pb-8 bg-white">
        <div className="container">
          <div className="flex -mx-4 flex-wrap">
            <div className="w-full md:w-2/3 px-4">
              <div className="grid gap-y-15 grid-cols-2 md:grid-cols-4">
                <div className="pr-2.5 md:pr-0">
                  <div className={styles.title}>COMPANY</div>
                  <div className={styles.links}>
                    <Link
                      href='/about-us'
                      data-rb-cursor-state="invisible"
                      className="max-w-max"
                    >
                      About Us
                    </Link>
                    <Link
                      href='/creative-cloud-technology'
                      data-rb-cursor-state="invisible"
                      className="max-w-max"
                    >
                      Our Technology
                    </Link>
                    <Link
                      href='/impact'
                      data-rb-cursor-state="invisible"
                      className="max-w-max"
                    >
                      Our Impact
                    </Link>
                    {/* <Link
                      href=''
                      data-rb-cursor-state="invisible"
                      className="max-w-max"
                    >
                      The Lakshmi Rebecca Show
                    </Link> */}
                    <Link
                      href='/blog'
                      data-rb-cursor-state="invisible"
                      className="max-w-max"
                    >
                      Our Blog
                    </Link>
                  </div>
                  </div>
                  <div className="pl-2.5 md:pl-0 md:-ml-[10px]">
                    <div className={styles.title}> SERVICES</div>
                    <div className={styles.links}>
                      <Link
                        href='/brand-design-agency'
                        data-rb-cursor-state="invisible"
                        className="max-w-max flex items-center gap-3"
                      >
                      <span>Design</span>
                        <div className="dropdown-arrow rotate-90 mt-0.5">
                          {dropDownArrow}
                        </div>
                      </Link>
                      <Link
                        href='/brand-identity-design-services'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        Brand Identity Design
                      </Link>
                      <Link
                        href='/video-production'
                        data-rb-cursor-state="invisible"
                        className="max-w-max flex items-center gap-3"
                      >
                        <span>Video</span>
                        <div className="dropdown-arrow rotate-90 mt-0.5">
                          {dropDownArrow}
                        </div>
                        
                      </Link>
                      <Link
                        href='/explainer-video-production-services'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        Explainer Videos
                      </Link>
                      <Link
                        href='/corporate-video-production-services'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        Corporate Videos
                      </Link>
                      <Link
                        href='/video-testimonial-production'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        Case Study Videos
                      </Link>
                      <Link
                        href='recruitment-video-production'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        Recruitment Videos
                      </Link>
                      <Link
                        href='/ai-video-agency'
                        data-rb-cursor-state="invisible"
                        className="max-w-max ml-3 md:ml-5 mt-[-5px]"
                      >
                        GenAI Videos
                      </Link>
                      <Link
                        href='/podcast-production-services'
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Podcast
                      </Link>
                      <Link
                        href='/advertising-agency'
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Campaign
                      </Link>
                      <Link
                        href='/video-production-near-me'
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Book a Crew
                      </Link>
                    </div>
                  </div>
                  <div className="pr-2.5 md:pr-0 md:pl-[3.2rem]">
                    <div className={styles.title}>WORK</div>
                    <div className={styles.links}>
                      <Link
                        href="/work/design"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Design
                      </Link>
                      <Link
                        href="/work/videos"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Video
                      </Link>
                      <Link
                        href="/work/podcast"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Podcast
                      </Link>
                      <Link
                        href="/work/campaign"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Campaign
                      </Link>
                      <Link
                        href="/work/professional-video-crews"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Book a Crew
                      </Link>
                    </div>
                  </div>
                  <div className="pl-2.5 md:pl-0">
                    <div className={styles.title}>CONTACT</div>
                    <div className={`${styles.links} md:pl-[2px]`}>
                      <Link
                        href="/contact"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                        Get in Touch
                      </Link>
                      <Link
                        href="/freelance-gigs"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                      Collab
                      </Link>
                      <Link
                        href="/careers"
                        data-rb-cursor-state="invisible"
                        className="max-w-max"
                      >
                      Careers
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full mt-12 md:mt-0 md:w-[28%] md:flex md:flex-col px-4">
              <NewsletterField />
            </div>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row border-t mt-10.5 md:mt-[80px] border-t-rb-black/20 pt-10.5 md:pt-8 justify-between">
            <span>Copyright ©{new Date().getFullYear()} Makerrs</span>
            <div className="flex justify-between md:justify-start md:gap-x-8 mb-7.5 md:mb-0">
              <Link
                href="/terms"
                data-rb-cursor-state="invisible"
                className="max-w-max"
              >
                Terms & Privacy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
