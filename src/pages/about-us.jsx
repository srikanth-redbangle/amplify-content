import { aboutSchema } from '@/components/schema/about-schema'
import {
  LineHeading,
  TrustedBrandsSection,
  VideoModal,
  ExploreMoreSection,
  Testimonials,
  RedbangleWaySection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import Script from 'next/script'
import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/home.module.scss'
import { gsap } from 'gsap'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useLenis } from '@studio-freight/react-lenis'
import Link from 'next/link'
import React from 'react'
import {explorecards} from '../utils/dummy'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const WhoWeAre = () => {
  const redbangleway = [
    {
      key: '0',
      heading: 'The New Global',
      content:
        'Experience the power of a global, professional, creative agency that scales with your business. Our central creative teams and our creative collaborative spread across 100 countries come together on our technology platform to meet your brand’s growing needs.',
    },
    {
      key: '1',
      heading: 'Relentless Creativity',
      content:
        'With nearly a decade in business, we understand what sticks in branding, marketing communications, corporate communications, employer branding, ESG and more. And we always bring fresh ideas to the table.',
    },
    {
      key: '2',
      heading: 'Borderless Execution',
      content:
        'Be it 30 customer testimonial videos filmed across 5 continents or never-before event branding for your next big annual event - we’ve got the creative inspiration, the scalable systems and the on-demand creative experts you need.',
    },
    {
      key: '3',
      heading: 'Creative Cloud Workflows',
      content: (
        <>
          Our patent-pending{' '}
          <a
            href="/creative-cloud-technology"
            class="underline hover:text-rb-link-green"
            target="_blank"
          >
            {' '}
            technology platform{' '}
          </a>{'  '}
          is built to support hundreds of projects in parallel. You can upload
          briefs, track project progress, review draft videos and more on the
          cloud with great efficiency. And oh, did we mention repurpose creative
          assets in just a couple of clicks? Yes.
        </>
      ),
    },
  ]

  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const containerRef = useRef()

  const heroSection = useRef()

  const lenis = useLenis()
  const [bioModal, setBioModal] = useState({
    open: false,
    data: null,
  })
  useEffect(() => {
    if (bioModal.open) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [bioModal.open, lenis])

  const teamData = [
    {
      name: 'Lakshmi Rebecca',
      title: 'CEO, Bangalore & San Francisco',
      img: '/img/our-team/lakshmi-rebecca.png',
      content: (
        <>
          Storyteller, visionary, award-winning YouTuber and ex-model.
          <br />
          <br />
          Lakshmi’s career started as social work in education and transitioned
          to social research and investigative journalism for documentary films
          for the BBC and Discovery. After briefly dabbling with modelling, she
          moved into content - anchoring international business events, crafting
          a YouTube series on social enterprises in India and running a
          production house.
          <br />
          <br />
          Drawing upon these experiences in storytelling and content across the
          United Kingdom, India and Sri Lanka - Lakshmi founded Makerrs. Her
          vision is for Makerrs to grow into a global tech-enabled creative
          enterprise.
          <br />
          <br />
          Lakshmi is a strong believer in individual potential, collaboration
          and customer-centric solutioning.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/lakshmirebecca/',
    },
    {
      name: 'Sunil Patrapati',
      title: 'CTO, Bangalore & Chennai',
      img: '/img/our-team/sunil-patrapati.png',
      content: (
        <>
          22 years of building technology innovations across gaming, content
          production and more. A sharp mind with the need for deep enquiry and
          context-driven problem-solving through technology.
          <br />
          <br />
          Sunil’s past successes include developing games, and building
          technology solutions for multinational pharma and manufacturing
          companies as well as a nation-wide technology-driven solution for
          adult literacy amongst several other achievements. He’s an avid
          researcher on many things tech, a passionate biker and foodie, and a
          great people and programme manager.
          <br />
          <br />
          Sunil has a keen eye on the future, and takes a holistic approach to
          growth. He believes in risk-taking - all while adopting a frugal
          approach to business growth. His vision is to create the CISCO of
          brand content - global, agile and bold.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/sunil-patrapati-020023a/',
    },

    {
      name: 'Raj Dutta',
      title: 'Consulting Creative Director, Bangalore',
      img: '/img/our-team/raj_dutta.png',
      content: (
        <>
          A creative leader and writer with 23 years in the business, Raj has
          spent long stints with agencies like Ogilvy, Leo Burnett, McCann
          Erickson and Rediffusion in India and Hong Kong.
          <br />
          <br />
          Over a long and layered career, he has crafted several notable
          campaigns for brands like Airtel, Vodafone, Ajio, TVS Motors, IBM,
          Levi&apos;s, American Express and Unilever, winning awards at Cannes,
          New York Festivals, Spikes Asia, Abbys, and other advertising
          festivals.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/rajdutta/',
    },
    {
      name: 'Mandira Naidoo',
      title: 'Head of Design, Bangalore',
      img: '/img/our-team/mandira-naidoo.png',
      content: (
        <>
          The force behind continuous creative quality improvement. She’s always
          absorbing new content and trends, and nudging everyone else to up
          their game.
          <br />
          <br />
          Mandy’s got 20 years of experience in visual communication, branding,
          and design education. She started out as an amazing artist - who won
          early accolades and international showcases. She then switched over to
          advertising - working with agencies like MAA and JWT. She’s tried her
          hand at running her own boutique practice too.
          <br />
          <br />
          Today, Mandy heads up design at Makerrs. In fact, she’s been doing
          this since 2017 and is now a custodian for our Brand and part of a
          core team that drives our culture. Mandy’s passionate about Indian
          philosophy, travel and cats. She’s super work proud and so is her
          entire team.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/mandiranaidoo/',
    },

    {
      name: 'Ayesha Mir',
      title: 'Group Account Director, Bangalore',
      img: '/img/our-team/ayesha-mir.png',
      content: (
        <>
          A thoughtful connector of people, clients, and growth, Ayesha brings structure, empathy, and momentum to every challenge she takes on.
          <br />
          <br />
          She began her journey in B2B as a content writer, gradually evolving into account leadership, sales, and client services. Along the way, she’s worked with mainline agencies across sectors including IT, tech, FMCG, manufacturing, and F&B. This breadth of experience gives her a grounded understanding of business goals and how to help brands tell their stories.
          <br />
          <br />
          Currently a Group Account Director at Makerrs, she drives growth through strong client partnerships, operational clarity, and a collaborative approach that brings out the best in both her teams and her clients.
          <br />
          <br />
          When she’s not solving client challenges, Ayesha enjoys baking, building Lego sets, and solving puzzles.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/ayeshamir94/',
    },

    {
      name: 'Tejasvi Mani',
      title: 'Partner - Post Production, Bangalore',
      img: '/img/our-team/tejasvi-mani.png',
      content: (
        <>
          A problem-solver, a quiet and confident leader, and always a learner.
          <br />
          <br />
          Tejas has been at the forefront of creative innovation in
          post-production for over a decade. He’s mostly self-taught and how!
          His reputation is built on his extraordinary attention to detail
          across Computer Animation, VFX, CGI, Motion Graphics and Video
          Editing.
          <br />
          <br />
          Tejas was our first employee in Post Production. Today, he has
          recruited a dedicated team - which he heads and mentors. He’s one of
          our most dependable young leaders, and he’s high on EQ.
          <br />
          <br />
          When he’s not busy crafting a film or managing his team, he’s busy in
          gaming tournaments and motorsports entertainment.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/tejasvi-mani-84b53177/',
    },
    {
      name: 'Debarti Banerjee',
      title: 'VP Production & Operations, Mumbai',
      img: '/img/our-team/debarti-banerjee.png',
      content: (
        <>
          Deeply passionate about organisational culture, processes and animal
          welfare.
          <br />
          <br />
          Debarti started out as a recruiter and moved into operations to
          support the creation of IP in content and events. She was on the core
          team that developed Royal Stag’s Large Short Films.
          <br />
          <br />
          Today, Debarti heads Makerrs&apos;s recruitment and project
          management, and takes a keen interest in building new processes. She
          also rescues and feeds nearly 700 stray dogs and cats in the city of
          Mumbai.
          <br />
          <br />
          Clarity of intent, the right people for the right job, and the right
          processes everytime are things she’s always got an eye on.
        </>
      ),
      linkedIn: 'https://www.linkedin.com/in/debarti-banerjee-2899b7249/',
    },
  ]

  const explorecards = [
    {
      id: 0,
      serviceTitle: 'GET DESIGN',
      serviceDescription:
        'Get brand identity systems, event branding, editorial design, illustrations, and motion graphics. Build brand differentiation and human connect with Makerrs. Explore our branding and design services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/brand-design-agency',
    },
    {
      id: 1,
      serviceTitle: 'GET VIDEO',
      serviceDescription:
        'We plan, conceptualise, produce and scale video content – be it for your next product or your YouTube channel. We also offer on-demand video production services for customer testimonial videos, recruitment videos, corporate videos and more. Explore our video production services.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/video-production',
    },
    {
      id: 2,
      serviceTitle: 'GET PODCAST',
      serviceDescription:
        'Looking to lead industry conversations, build community and drive ROI? Go from content research, podcast concept and positioning, to podcast branding, production, distribution and amplification with one agency. Make a successful podcast today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/podcast-production-services',
    },
    {
      id: 3,
      serviceTitle: 'GET CAMPAIGN',
      serviceDescription:
        'From digital campaigns and integrated campaigns, to outdoor and print campaigns – our creative strategy is rooted in a simple yet powerful human insight unique to your brand and product or service. Send us a campaign brief today.',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/advertising-agency',
    },
    {
      id: 4,
      serviceTitle: 'BOOK A CREW',
      serviceDescription:
        'Get on-demand professional video crews anywhere in the world. Be it a one-camera shoot or a multi-camera multi-location production–we curate and manage the production, and quality-check the footage for you. Hire a professional video crew today!',
      bgColor: '#ffffff',
      textColor: '#13c33f',
      href: '/video-production-near-me',
    },
  ]

  const testimonials = [
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
      quote: (
        <>
          Makerrs was especially impressive with their creative strategy, design
          and copy. They took the colors, the quirky and iconic signages, and
          the energy of the local markets and transformed them into a fresh,
          modern expression for our brand. Our customers are drawn to the unique
          identity, and it&apos;s translated into a love for the food itself.
        </>
      ),
      name: 'KUNCHERIA MARATTUKALAM',
      designation: 'FOUNDER & DIRECTOR',
      company: 'Maratt Group',
      image: {
        srcSet: `/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'We partnered with Makerrs to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends, are always experimental and open to feedback. They are amazing to work with!',

      designation: 'VP INTERNAL COMMUNICATIONS',
      company: 'FORTUNE 100 ITES ENTERPRISE',
      image: {
        srcSet: `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 3,
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
      key: 4,
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
      key: 5,
      quote: (
        <>
          Makerrs brought a unique blend of clarity and creativity—translating
          complex healthcare concepts into a simple brand identity system that
          was &apos;full of heart&apos;. They also created a cohesive website
          experience within incredibly tight deadlines. Their efficiency and
          understanding of our needs were pivotal in successfully launching our
          brand.
        </>
      ),
      name: 'Rinku Agarwal Basu',
      designation: 'COO',
      company: 'Lillia Care',
      image: {
        srcSet: `/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 6,
      quote:
        'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Makerrs has given us a brand bursting with character and joy! Seeing customers connect with it at our dessert cafe feels incredible.',
      name: 'NAKUL KULKARNI',
      designation: ' CO-FOUNDER',
      company: 'P.U. DINGDING',
      image: {
        srcSet: `/img/testimonials/nakul_1.jpg 533w, /img/testimonials/nakul_1.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 7,
      quote:
        'Despite difficulties faced in shooting in 2 countries, we created these awesome videos while keeping everyone safe during Covid-19.',
      name: 'MARC IRAWAN',
      designation: 'Founder',
      company: 'COLEARN',
      image: {
        srcSet: `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 8,
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

  return (
    <>
      <SEO
        title="Tech-Enabled Creative Agency & Collaborative | Makerrs"
        description="We are a tech-powered global creative agency and collaborative. We’ve crafted branding, videos, podcast IPs, campaigns and more for over 60 brands."
        url="https://www.makerrs.com/about-us"
        keywords="Creative agency, B2B Brand, B2B Enterprise, B2C Brand, Consumer Brand, Artificial Intelligence, AI, Brand Communication, Creative Solutions, Brand solutions, Cloud Platform"
      />

      <section
        className="pt-15 pb-15 md:pb-24 md:pt-24 relative text-rb-black bg-rb-mercury"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <h1 className="hero-text md:text-[112px] md:leading-[1.01] font-everett font-medium md:tracking-[-2.24px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px]">
            The tech-enabled
            <br />
            creative{' '}
            <div
              className={`content aspect-[1920/1080] origin-top ${styles.content} hidden md:inline-block`}
              ref={containerRef}
            >
              <div
                className="w-full  bottom-0 left-0 select-none md:aspect-[1920/1080] relative mx-auto translate-y-4"
                // ref={insetRef}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/img/about-us/hero.mp4"
                  poster="/img/about-us/hero-poster.webp"
                  className="w-full md:block translate-x-[-0.225px] translate-y-0 rotate-0 scale-100 rounded-[70px]"
                  width="1920"
                  height="1080"
                ></video>
              </div>
            </div>
            <span className="md:translate-x-[20px] inline-block">Agency</span>
          </h1>
          <div className="heroMarquee flex md:flex-row flex-col items-start justify-between border-t border-t-rb-davy-grey/50 pt-6 md:pt-8 mt-6 md:mt-20 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 text-[16px] leading-[1.25] tracking-[-0.64px] font-everett md:text-[22px] md:leading-[1.45] md:tracking-[-0.88px] font-medium">
              For brands that cater to the borderless customer.
            </div>
            <div className="w-full md:w-1/2 text-[16px] leading-[1.5] md:text-[28px] md:leading-[1.28] tracking-[-0.64px] md:tracking-[-1.12px] font-semibold">
              We are a tech-powered global creative agency and collaborative.
              We’ve crafted brand design systems, video content, podcast IPs and
              creative campaigns for over 60 borderless brands.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white md:pt-30 md:pb-15 py-20">
        <div className="container">
          <h2 className="text-center text-title md:text-title-md mb-10 md:mb-18 font-everett">
            Our Core Principles
          </h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  For Today’s Enterprises
                </div>
                <p className="text-16">
                  We’re all about helping brands differentiate, connect, endure
                  in a world that’s witnessing a dozen new brands and a hundred
                  new product launches every day.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/about-us/fundemental-1.png"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:px-4 md:bg-[#DCDDDF] flex flex-col justify-end md:pb-8 pb-10 order-2 md:order-1 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  With Great Pride
                </div>
                <p className="text-16">
                  We go beyond great creative quality and dependable processes.
                  We believe in pride and ownership in everything we do.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/img/about-us/fundemental-2.png"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/about-us/fundemental-3.png"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-10 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Go the Distance
                </div>
                <p className="text-16">
                  We believe in building long-term relationships with our
                  clients, collaborators and employees, and in constructive,
                  open feedback sharing.
                </p>
              </div>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src="/img/about-us/fundemental-4.png"
                  alt=""
                  className="h-[192px] md:h-auto w-full object-cover"
                />
              </div>
              <div className="md:px-4 md:bg-white flex flex-col justify-end md:pb-8 pb-0 mt-4 md:mt-0">
                <div className="md:text-[28px] text-xl font-medium mb-2 font-everett">
                  Borderless Collaboration
                </div>
                <p className="text-16">
                  Our business is designed to nurture creative collaboration
                  with our clients and with independent creators and filmmakers
                  the world over - no matter where they are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedbangleWaySection
        heading="The Makerrs Way"
        sectionBG="md:py-30 py-10"
        title={
          <div className="md:max-w-[720px]">
            The agency for ambitious brands
          </div>
        }
        data={redbangleway}
        image={{
          src: 'img/about-us/what-makes-us-unique.webp',
          width: '491',
          height: '562',
        }}
      />

      <section className="pb-5 md:pb-7.5 md:pt-15 pt-20 bg-white">
        <div className="container">
          <h1 className="text-title md:text-title-md font-everett mb-6 md:mb-8 md:!tracking-[-2.08px] !tracking-[-.52px] ">
            Meet the Makerrs
          </h1>
          <p className="text-xl md:text-2xl text-black opacity-90 md:leading-[33px] mb-6 md:mb-12">
            We are a bunch of good people who enjoy working with each other and
            love creative work. We are curious. We like challenges. We hate
            bullshit. And we take pride in creating solutions that actually
            matter.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
            {teamData.map((d) => (
              <div
                className="w-full flex flex-col gap-3 md:gap-5 md:mb-24 mb-10"
                key={d.name}
              >
                <button
                  data-rb-cursor
                  data-rb-cursor-type="bio"
                  className="md:max-w-[405px] md:max-h-[454px] max-w-[162px]"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <picture>
                    <source srcSet={d.img} media="(min-width:768px)" />
                    <img
                      className="overflow-hidden object-cover"
                      src={d.img}
                      alt={d.name}
                    />
                  </picture>
                </button>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="md:text-[32px] text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-6">
                    {d.name}
                  </span>
                  <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                    {d.title}
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 md:hidden"
                  onClick={() => setBioModal({ open: true, data: d })}
                >
                  <span className="font-bold text-rb-black underline hover:text-rb-link-green text-xs font-opensans">
                    Read More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3013_987)">
                      <path
                        d="M9.70274 10.703C9.90863 10.4973 9.90876 10.1636 9.70303 9.95772L6.35042 6.60249C6.14469 6.3966 5.811 6.39647 5.6051 6.6022C5.39921 6.80794 5.39908 7.14163 5.60481 7.34752L8.58491 10.3299L5.60249 13.31C5.3966 13.5158 5.39647 13.8495 5.6022 14.0554C5.80794 14.2612 6.14163 14.2614 6.34752 14.0556L9.70274 10.703ZM-0.326678 10.8535L9.33002 10.8572L9.33043 9.80321L-0.326268 9.79946L-0.326678 10.8535Z"
                        fill="#000"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3013_987">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {bioModal.open && (
        <div className="fixed cursor-auto left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-[9998]">
          <div
            className="max-h-full w-full max-w-[90%] bg-white h-[85vh] overflow-auto CustomScrollBar"
            data-lenis-prevent
          >
            <div className="w-full relative p-5 md:p-15">
              <button
                className="w-[107px] h-auto py-1.5 px-4 hidden md:block absolute top-4.5 right-[75px] text-white bg-black rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                Close
              </button>
              <button
                className="w-6 h-6 grid place-items-center md:hidden absolute top-9 right-9 text-white bg-black z-[1] rounded-full"
                onClick={() =>
                  setBioModal((prev) => ({ ...prev, open: false }))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="12" fill="#111010" />
                  <path
                    d="M16 8L8 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8L16 16"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row items-center  md:items-stretch gap-4 md:gap-12">
                <div className="w-full md:w-1/3 relative h-auto flex-shrink-0">
                  <picture>
                    <source
                      srcSet={bioModal?.data?.img}
                      media="(min-width:768px)"
                    />
                    <img
                      className="md:absolute w-auto h-full object-cover"
                      src={bioModal?.data?.img}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-2">
                      <h2 className="md:text-[32px] text-lg font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.72px] leading-[22px]">
                        {bioModal?.data?.name}
                      </h2>
                      <span className="md:text-2xl opacity-60 text-sm font-medium md:leading-7 leading-5 tracking-[-0.56px] md:tracking-[-0.96px]">
                        {bioModal?.data?.title}
                      </span>
                    </div>
                    <div className="py-4 md:w-[90%px] md:pt-5 md:mb-12">
                      <p className="md:text-lg w-full md:max-w-[80%] text-sm font-normal opacity-80">
                        {bioModal?.data?.content}
                      </p>
                    </div>
                    <div className="w-full h-px my-4 bg-rb-davy-grey opacity-50"></div>
                    <div className="flex w-full flex-col-reverse md:flex-row md:gap-6">
                      <div className="flex w-full md:w-[40%] flex-col">
                        <span className="md:text-lg text-base font-medium md:leading-9 md:tracking-[-1.28px] tracking-[-0.64px] leading-4.5">
                          Social Connect
                        </span>
                        <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={bioModal?.data?.linkedIn}
                            className="flex items-center gap-2 py-1.5 md:py-5"
                          >
                            <svg
                              className="text-[#006699] transition-all w-5 h-5 md:w-10 md:h-10"
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
                            <span className="text-[#006699] text-sm md:text-lg">
                              Linkedin
                            </span>
                          </a>
                          <div className="bg-rb-dune opacity-20 w-[5px] h-[5px] md:hidden rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-0 pb-15 md:pb-15 md:pt-0">
        <ExploreMoreSection
          className="pb-15 md:pb-30"
          cards={explorecards}
          title="Explore Our Services"
        />
      </div>

      <TrustedBrandsSection
        className="bg-white pt-10 pb-15 md:pb-12"
        heading="Our clients"
      />

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="pt-10 pb-15 md:pt-20 md:pb-25"
        testimonialData={testimonials}
        type="semi"
      />

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        vimeoId="1084150253"
        videopath="/creative_agency.mp4"
      >
        <div className="relative max-w-[80%] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/creative_agency.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default WhoWeAre
