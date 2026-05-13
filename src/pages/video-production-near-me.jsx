import styles from '@/styles/services.module.scss'
import {
  Marquee,
  TrustedBrandsSection,
  testimonialsDefault,
  ServiceHeroSection,
  ExploreMoreSection,
} from '@/components/shared'
import { VideoModal } from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'

import { similarPosts, explorecards } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { Accordion } from '@/components/ui'
import { Testimonials, WorkListHeroSection } from '@/components/shared'
import { useState } from 'react'
import Link from 'next/link'
import { logoIcons } from '.'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowNavigation from '@/components/arrow/ArrowNavigation'
import { useRouter } from 'next/router'
import { serviceVideos } from '@/content/services'

const CrewsServices = ({ setisPopupOpen }) => {
  // const videoRef = useRef(null)
  const _posts = similarPosts.map(postsMapper)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const router = useRouter()
  const [stopVisible, setstopVisible] = useState(false)

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  const handleClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { type: 'send-us-a-brief' },
      },
      undefined,
      { shallow: true }
    )
  }

  const [isSticky, setSticky] = useState(false)
  const [isOverlapping, setIsOverlapping] = useState(false)
  const stickyButtonRef = useRef(null)
  // Observe the hero section and toggle sticky CTA when it scrolls out
  useEffect(() => {
    const hero = document.getElementById('service-hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // when hero is NOT intersecting (scrolled past), set sticky true
        setSticky(!entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const TNC = [
    {
      key: 0,
      title:
        'How agile and scalable are your international video production services?',
      content:
        'From a skeleton crew for a single testimonial video shoot to a full-fledged team of Directors, Producers, Cinematographers, Sound Technicians, and Spot-Editors required to capture a large-scale event, we offer scalable video production services for your business. Craft global communications worry-free with Makerrs.',
    },
    {
      key: 1,
      title: 'Do you support multi-location shoots?',
      content:
        'Be it a 3-location shoot in 1 city for one commercial video or film, or a 10-city production for a documentary film or series—talk to us for every film and video production requirement you have. No matter where you need a shoot done, our experienced producers custom-curate and brief local crews, and manage the production end-to-end for you.',
    },
    {
      key: 2,
      title: 'Is the video production managed in-house at Makerrs?',
      content:
        'Yes, the video production process is managed end-to-end by an experienced team of internationally qualified producers at Makerrs. Our producers have worked with crews across continents and on a wide range of film and video requirements. They are pros at curating crews, detailing shoot briefs, and running shoots on time and on budget.',
    },
    {
      key: 3,
      title: 'Which countries do you have video crews in?',
      content:
        'From the USA, UK and Europe to Japan, Indonesia, Thailand, Singapore, Australia, China, South Africa, Kenya, and India–we provide professional video crews across 100+ countries. Our services cover all the major cities and business hubs in the world. We are here to support the communication needs of your borderless brand.',
    },
    {
      key: 4,
      title:
        'How do you ensure quality consistency in the case of a multi-country production?',
      content: (
        <>
          <div>
            There are several ways in which we ensure quality consistency across
            locations. These include:
          </div>
          <div className="mt-5">
            <ol className="list-disc space-y-4 ml-8">
              <li>Curating the right on-ground crews</li>
              <li>
                Detailed shoot briefing documents that define everything from
                cameras, lights and frames to sound, local weather information,
                shoot-day schedule, footage upload guidelines and more
              </li>
              <li>
                Active remote Producer involvement in real time to ensure
                location access and the right video framing and lighting
              </li>
              <li>
                A virtual Film Director for the whole project, if required, to
                ensure quality consistency across crews, locations and footage
              </li>
              <li>
                And, on more complex projects, a film Director, Assistant
                Director or Producer on location or on set to guide every crew.
              </li>
            </ol>
          </div>
        </>
      ),
    },
    {
      key: 5,
      title: 'What is your typical international videography workflow?',
      content: (
        <>
          <div>
            Our on-demand video crew services typically have the following
            workflow:
          </div>
          <ol className="list-decimal pl-[25px] py-3">
            <li>Project Briefing</li>
            <li>Crew Curation</li>
            <li>Estimate &amp; Proposal</li>
            <li>Shoot Detailing</li>
            <li>Shoot Guidelines Document</li>
            <li>Crew Briefing</li>
            <li>Payment & Shoot Confirmation</li>
            <li>Scheduling &amp; Coordination</li>
            <li>Production / Shoot</li>
            <li>Footage Upload to Cloud</li>
            <li>Quality Checks of the Footage</li>
            <li>Footage Transfer</li>
          </ol>
        </>
      ),
    },
    {
      key: 6,
      title: 'How do you deliver the footage after the shoot?',
      content:
        'All the captured footage is uploaded to the cloud and delivered via Dropbox, Google Drive or our Creative Cloud platform. Alternatively, we could upload the footage to a cloud platform of your choice that you provide us access to, or on a hard disk.',
    },
    {
      key: 7,
      title: 'Do you also offer video post-production services?',
      content: (
        <>
          Yes, often clients require video post-production services once a shoot
          is done. Just{' '}
          <Link
            href="/contact"
            className="underline cursor-pointer hover:text-rb-link-green"
          >
            send us a brief
          </Link>{' '}
          and we’ll be happy to undertake custom video editing for you. We will
          also be able to support any additional requirements you may have, such
          as voice over, music from stock, addition of stock or archival
          footage, graphic design, motion graphics, colour grading, etc.
        </>
      ),
    },
    {
      key: 8,
      title:
        'What happens if I cannot be at the shoot location? How can I still see or track what’s happening on-ground?',
      content: (
        <>
          We’ll be happy to organise a live-stream feed of the shoot for you.
          You won’t miss a thing.
          <br />
          <Link
            href="/contact"
            className="underline cursor-pointer hover:text-rb-link-green"
          >
            Book a video crew
          </Link>{' '}
          with Makerrs today!
        </>
      ),
    },
  ]

  const testimonialData = [
    {
      key: 0,
      quote:
        'We are delighted to team up with Makerrs to promote the fight against childhood cancer in Romania! The video showcases the ability of the creatives and product managers at Makerrs to deliver a very compelling case for our innovative work, and to capture the hearts and minds of the audience.',
      name: 'ALINA PATRAHAU',
      designation: 'FOUNDER',
      company: 'DARUIESTE ARIPI',
      image: {
        srcSet: `/img/testimonials/alina-patrahau.jpg 533w, /img/testimonials/alina-patrahau.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote:
        'The Makerrs team is fantastic to work with. They add value not just from a creative standpoint but also in terms of communication strategy.',
      name: 'ROSHAN CARIAPPA',
      designation: 'VICE-PRESIDENT MARKETING',
      company: 'VYMO',
      image: {
        srcSet: `/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Makerrs supported us on the ground and even helped us manage our golfing ambassador. Thanks, team!',
      name: 'MATT WALKINGTON',
      designation: 'Account Director',
      company: 'BRIGHT PARTNERSHIPS',
      image: {
        srcSet: `/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },

    {
      key: 3,
      quote:
        'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
      name: 'MARC IRAWAN',
      designation: 'Founder',
      company: 'COLEARN',
      image: {
        srcSet: `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 4,
      quote:
        'We partnered with Makerrs to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',

      designation: 'VP INTERNAL COMMUNICATIONS',
      company: 'FORTUNE 100 ITES ENTERPRISE',
      image: {
        srcSet: `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 5,
      quote:
        'It’s never easy creating great videos for a fast-growing business like ours. We struggled till we came across Makerrs.',
      name: 'SUNIL SURESH',
      designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
      company: 'CAPILLARY TECHNOLOGIES',
      image: {
        srcSet: `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const ourOfferings = [
    {
      title: <>Single-camera&nbsp;</>,
      description:
        'Get a single-camera video crew to shoot interview, testimonial and leadership videos wherever you need. Book a curated video crew today.',
      content: [
        'Experienced Cinematographer',
        'Camera, Sound & Lights',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/single-camera-shoot.jpg',
    },
    {
      title: <>Multi-camera&nbsp;</>,
      description:
        'From a 3-camera video crew to capture a podcast interview to a 6-camera crew to film an event—get professional video crews that scale with your brief.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/multi-camera-shoot.webp',
    },
    {
      title: <>Multi-location&nbsp;</>,
      description:
        'When you need a single-camera shoot in multiple cities or a multi-camera shoot in multiple countries. Video production that scales with your business.',
      content: [
        'Experienced Producers',
        'Hand-picked Video Crews',
        'Directors and Assistant Directors',
        'Complete Equipment Support',
        'Local Booking & Permissions',
        'Footage Transfer: via hard disk or cloud',
      ],
      img: '/img/services/crew/multi-location-shoot.webp',
    },
  ]

  const cards = [
    {
      id: 0,
      imgsrc: '/img/services/crew/card1.png',
      title: 'Commercial Shoot',
    },
    {
      id: 1,
      imgsrc: '/img/services/crew/card2.png',
      title: 'Corporate Film',
    },

    {
      id: 2,
      imgsrc: '/img/services/crew/card3.png',
      title: 'Case Study Video',
    },
    {
      id: 3,
      imgsrc: '/img/services/crew/card4.png',
      title: 'Testimonial Video Shoot',
    },
    {
      id: 4,
      imgsrc: '/img/services/crew/card5.png',
      title: 'Podcast Production',
    },
    {
      id: 5,
      imgsrc: '/img/services/crew/card6.png',
      title: 'Drone footage',
    },
    {
      id: 6,
      imgsrc: '/img/services/crew/card7.webp',
      title: 'Office Video Shoot',
    },
    {
      id: 7,
      imgsrc: '/img/services/crew/card8.png',
      title: 'Event Shoot',
    },
    {
      id: 8,
      imgsrc: '/img/services/crew/card9.png',
      title: 'Multi-location Shoot',
    },
    {
      id: 9,
      imgsrc: '/img/services/crew/card10.png',
      title: 'Product Shoot',
    },
    {
      id: 10,
      imgsrc: '/img/services/crew/card11.webp',
      title: 'Leadership Video',
    },
    {
      id: 11,
      imgsrc: '/img/services/crew/card12.webp',
      title: 'Studio and Chroma',
    },
    {
      id: 12,
      imgsrc: '/img/services/crew/card13.png',
      title: 'Documentary Footage',
    },
    {
      id: 13,
      imgsrc: '/img/services/crew/card14.png',
      title: 'BTS Footage',
    },
  ]
 const filteredCards = explorecards.filter(card => card.href !== router.pathname);

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      const swiperInstance = document.querySelector('.servicesSlider')?.swiper

      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevButtonRef.current
        swiperInstance.params.navigation.nextEl = nextButtonRef.current
        swiperInstance.navigation.init()
        swiperInstance.navigation.update()
      }
    }
  }, [])

  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore') // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true)
          setstopVisible(true)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [stopVisible])

  return (
    <>
      <SEO
        title="Professional Video Crews for Hire | Makerrs"
        description="Hire professional video crews in New York, San Francisco, Bangalore, London, Paris, Tokyo, Singapore & 100 other cities. Shoot testimonial videos, event videos & more."
        keywords="Production teams, Global video crews, On-demand video production, Professional filmmakers, Commercial video production, Documentary filming, Video production solutions, Testimonial video services, Testimonial video production"
        url="https://www.makerrs.com/b2b-international-video-crew-agency"
      />
      <div id="service-hero">
        <ServiceHeroSection
          className=""
          type="Book a Crew"
          video={serviceVideos.book_a_crew.video}
          fullVideo={serviceVideos.book_a_crew.fullVideo}
          ctaText="Book a Crew"
          ctaLink="/contact"
          textColor="#111010"
          content={
            <>
              <h1 className="inline">
                Get on-demand professional video crews in London, San Francisco,
                New York, Singapore, Tokyo, Sydney, Bangalore, Shanghai and 500+
                cities across the world. Supercharge your communication teams
                with all the video footage they need–no matter which city or how
                many locations.
              </h1>
            </>
          }
        />
        <div
          ref={stickyButtonRef}
          className={`hidden fixed bottom-30 right-8 z-20 md:min-w-[180px] transition-opacity duration-300 ease-in-out ${
            isSticky ? 'lg:block' : ''
          } ${isOverlapping ? 'opacity-0' : 'opacity-100'}`}
        >
          <Button
            onClick={() => {
              setTimeout(() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: { type: 'send-us-a-brief' },
                  },
                  undefined,
                  { shallow: true }
                )
              }, 100)
            }}
          className="w-full md:!px-4 md:!h-11 md:text-[0.9rem]"
            suffix={<LineArrow hover />}
          >
            Book a Crew
          </Button>
        </div>
      </div>

      <section className="md:pb-30 md:pt-12 pb-18 pt-18">
        <div className="container">
          <div className="md:text-[40px] font-everett text-[26px] md:mb-15 mb-8  font-medium md:leading-[44px] leading-[28px] tracking-[-0.52px] md:tracking-[-1.6px]">
            Anywhere Video Production Services for your Brand
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {cards.map((c) => (
              <Link
                href="/contact"
                key={c.id}
                data-rb-cursor
                data-rb-cursor-type="startnow"
              >
                <img src={c.imgsrc} alt={c.title} width="451" height="290" />
                <div className="mt-[10px] text-[12px] leading-[10px] md:text-[20px] md:leading-[18px] uppercase font-everett font-medium text-rb-black">
                  {c.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rb-service-grey md:py-30 py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center md:flex-row flex-col gap-8 md:gap-0">
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-title md:text-title-md mb-4 font-medium font-everett">
                Professional Video Crews in 100+ countries
              </h2>
              <p>
                Our global video crew production service supports your business
                everywhere you grow. Shoot commercial videos, social media
                content, customer testimonials, case study videos, recruitment
                videos, leadership videos and more with our <br />
                Book a Crew service.
              </p>
              <div className="md:mt-10 mt-6">
                <Button
                  href="/contact"
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Send us a brief today
                </Button>
              </div>
            </div>
            <div className="w-full md:w-3/5 px-4">
              <video
                src="/img/services/crew/world_map_new.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-30 md:pb-15 pb-15 pt-18">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            Your international video crew booking agency
          </h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Borderless Production
                </div>
                <p className="text-16">
                  From Paris to Singapore and New York to New Delhi–get
                  professional video crews for hire anywhere you need them. Send
                  us a production brief today.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/crew/video-shoot-service-2.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Curated Crews
                </div>
                <p className="text-16">
                  Get hand-picked professional video crews, custom creative and
                  technical briefs, and hands-on quality control on every shoot.
                  Get professional video production services with Makerrs.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/services/crew/video-shoot-service-1.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/crew/video-shoot-service-3.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-10 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Scalable Services
                </div>
                <p className="text-16">
                  Be it a single-camera testimonial shoot or a multi-camera
                  event shoot, our managed video crew services scale with your
                  brief—no matter how many shoots you need in one week or how
                  many crews you need on one day.
                </p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/services/crew/video-shoot-service-4.webp"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-0 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Quality & Ownership
                </div>
                <p className="text-16">
                  Our curated film and video crews and tried and tested
                  cloud-based processes drive complete execution ownership at
                  our end. You won’t have to worry about creative quality and
                  consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:pb-15 md:pt-30 py-7.5">
        <div className="container">
          <div>
            <div className="uppercase text-rb-black text-sm md:text-xl font-semibold flex items-center">
              <span
                className={`h-px w-7.5 md:w-headingLine block mr-3 bg-rb-black`}
              ></span>
              <span>Book a Video Shoot</span>
            </div>
            <h3 className="text-title md:text-title-md mb-10 md:mb-18 md:mt-8 mt-6 font-everett max-w-[718px]">
              Book a video crew anywhere, anytime
            </h3>
          </div>
          <div className="md:mt-18">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {ourOfferings.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`bg-rb-service-grey  md:p-8 px-4 py-6 ${styles.offeringcard}`}
                  >
                    <div className="flex flex-col justify-between min-h-full">
                      <div>
                        <div className="flex gap-[10px]">
                          <h3
                            className={`md:text-[36px] text-xl md:mb-3 mb-2 font-medium font-everett md:leading-[39px] leading-6 tracking-[-1.44px] `}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p className="md:text-base text-sm">
                          {item.description}
                        </p>
                        <hr className="my-6" />
                        <div className="gap-[14px] flex flex-col">
                          {item.content.map((data, index) => {
                            return (
                              <div className="flex md:gap-3 gap-2" key={index}>
                                <div className={`${styles.successcheck}`}></div>
                                <p className="font-semibold text-sm md:text-base">
                                  {data}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="mt-8">
                          <img src={item.img} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="pt-18 pb-7.5 md:pt-30 md:pb-15"
        testimonialData={testimonialData}
        type="semi"
      />

      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" />
      <div id="leap-explore" className="py-6 md:py-12">
        <ExploreMoreSection
          type="think"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={filteredCards}
        />
      </div>

      <section className="md:pt-12 pt-6 md:pb-24 pb-12">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="891125698"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          {/* <iframe
            src="https://player.vimeo.com/video/891125698?h=1383313c75&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/crews_page_banner_video.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
      {/* <Script id="schema" type="application/ld+json">
        {JSON.stringify(brandCrewsSchema)}
      </Script> */}
    </>
  )
}
export default CrewsServices
