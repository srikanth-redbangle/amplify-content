import { SEO } from '@/components/shared/SEO'
import { useEffect, useRef, useState } from 'react'
import {
  FeaturedWorkSection,
  LineHeading,
  Marquee,
  RollupNumber,
  Testimonials,
  TrustedBrandsSection,
  VideoModal,
} from '@/components/shared'
import Script from 'next/script'
import { Accordion } from '@/components/ui'
import statstyles from '@/styles/sections/StatsSection.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { GetUpdatesForm } from '@/components/shared/sections/GetUpdatesSection/GetUpdatesForm'
import styles from '@/styles/home.module.scss'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { explainerVideoProductionSchema } from '@/components/schema/explainer-video-production-services'
import { useRouter } from 'next/router'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null,
}

const BrandIdentityDesign = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const insetRef = useRef()
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const router = useRouter()

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let cardContainer = document.querySelector('.feature-slider')
    let lineProgress = document.querySelector('.progress-slider')
    const mm = gsap.matchMedia()

    const width = cardContainer.scrollWidth - cardContainer.offsetWidth
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.featured-section',
        start: '20% 30%',
        end: '70% 5%',
        scrub: true,
      },
    })

    tl.fromTo(cardContainer, { x: 0 }, { x: -width })
    tl.fromTo(lineProgress, { xPercent: -100 }, { xPercent: 0 }, 0)

    return () => tl.kill()
  })

  useEffect(() => {
    const videoEl = document.getElementById('video-section')
    if (!videoEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show sticky once the video is out of view
        setSticky(!entry.isIntersecting)
      },
      { root: null, threshold: 0 }
    )

    observer.observe(videoEl)

    return () => {
      observer.disconnect()
    }
  }, [])

  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 60,
        suffix: (
          <div className="inline-flex">
            <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          brands <br /> nurtured
        </>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 10,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: (
        <>
          industries <br className="md:hidden" /> championed
        </>
      ),
    },
    {
      id: 2,
      countUpProps: {
        value: 9,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <span>years industry experience</span>,
    },

    {
      id: 3,
      countUpProps: {
        value: 40,
        suffix: (
          <span className="inline-flex">
            <span className="text-rb-red">+</span>
          </span>
        ),
      },
      text: (
        <>
          thinkers and <br className="md:hidden" /> creators
        </>
      ),
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: '/img/services/design/icon2.svg',
      alt: 'unique_branding',
      title: 'Unique Branding',
      desc: 'Cut through the noise with brand identity that’s bold, differentiated, and built to leave a lasting impression across touchpoints.',
    },
    {
      key: 2,
      imgurl: '/img/services/design/icon8.svg',
      alt: 'creative_ideation',
      title: 'Insight-Led Design',
      desc: 'Get a brand identity shaped by audience research and business goals that’s crafted with empathy and emotional intelligence to build a real connection with your audience.',
    },
    {
      key: 3,
      imgurl: '/img/services/design/icon4.svg',
      alt: 'ai_powered_virtual',
      title: 'End-to-end Services',
      desc: 'Get a comprehensive brand identity system that blends strategy and creativity. Get a unique brand name, logo, voice, story, visual identity, sonic identity, and a complete brand manual for your business.',
    },
    {
      key: 4,
      imgurl: '/img/services/design/icon9.svg',
      alt: 'platform_content',
      title: 'Holistic Branding',
      desc: 'From strategy to differentiation and brand recognition – everything you need to build and scale your brand. You walk away with a brand identity system that’s crafted to fuel enterprise growth.',
    },
    {
      key: 5,
      imgurl: '/img/services/design/icon10.svg',
      alt: 'ai_based_tech_solutionss',
      title: 'Future-Ready Branding',
      desc: 'Your identity is built to thrive in a fast-evolving digital world, designed for today’s business landscape and powered by the latest tech to keep your brand fresh and relevant.',
    },
  ]

  const sliderVerticleCards = [
    {
      key: 1,
      imgurl: '/img/services/design/icon11.svg',
      alt: 'search_brand_environment',
      title: 'Discovery',
      desc: 'We explore your brand DNA and aspirations through research, interviews, analysis and discussions.',
    },
    {
      key: 2,
      imgurl: '/img/services/design/icon1.svg',
      alt: 'across_formatss',
      title: 'Distillation',
      desc: 'We define your brand values, vision, and offerings using insights from immersive workshops.',
    },
    {
      key: 3,
      imgurl: '/img/services/design/icon12.svg',
      alt: 'brand_content_strategy',
      title: 'Strategy',
      desc: 'We craft a creative strategy to give your brand a unique personality, positioning, and advantage. ',
    },
    {
      key: 4,
      imgurl: '/img/services/design/icon13.svg',
      alt: 'tech_powered_experiences',
      title: 'Creative',
      desc: 'We explore creative directions and build brand assets—logo, voice, visuals, and design systems.',
    },
    {
      key: 5,
      imgurl: '/img/services/design/icon14.svg',
      alt: 'print_and_posm',
      title: 'Brand',
      desc: 'We compile all assets into a brand manual with clear guidelines for consistency in future use.',
    },
    {
      key: 6,
      imgurl: '/img/services/design/icon15.svg',
      alt: 'distribution_optimisation',
      title: 'Buzz',
      desc: 'From website to launch videos, we help roll out your new brand across key touchpoints.',
    },
  ]

  const processCards = [
    {
      key: 1,
      title: 'Brief & Context',
      desc: 'Send us your brief and give us some context. We’ll get started right away.',
    },
    {
      key: 2,
      title: 'Concepts & Estimates',
      desc: 'Choose from exciting creative concepts and estimate options curated for your business.',
    },
    {
      key: 3,
      title: 'Script & Story',
      desc: 'You’ll get the best creative teams working on copy and visualisation for your explainer video.',
    },
    {
      key: 4,
      title: 'Design & Storyboards',
      desc: 'Be sure of how your explainer video is shaping up with our detailed characterisation and storyboard.',
    },
    {
      key: 5,
      title: 'Varied Animation Styles',
      desc: 'Your video is in great hands with our experts in 2D animation, 3D animation and sound design.',
    },
    {
      key: 6,
      title: 'On-time Delivery, Everytime',
      desc: 'You’ll never have to follow up or miss a deadline. We’ve got cloud-based workflows and proactive teams.',
    },
  ]

  const testimonialsDefault = [
    {
      key: 0,
      quote: (
        <>
          Makerrs brought a unique blend of clarity and creativity, translating
          complex healthcare concepts into a simple brand identity system that
          was &apos;full of heart&apos;. They also created a cohesive website
          within incredibly tight deadlines. Their efficiency was pivotal in
          successfully launching our brand.
        </>
      ),
      name: 'Rinku Agarwal Basu',
      designation: 'COO',
      company: 'Lillia Care',
      image: {
        srcSet:
          '/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote: (
        <>
          Makerrs was especially impressive with their creative strategy,
          design, and copy. They took the quirk and the energy of local markets
          and their iconic signs and transformed them into a fresh, modern
          expression for our brand. Our customers are drawn to the unique
          identity, and it has translated into a love for the product itself.
        </>
      ),
      name: 'KUNCHERIA MARATTUKALAM',
      designation: 'FOUNDER & DIRECTOR',
      company: 'Maratt Group',
      image: {
        srcSet:
          '/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const data = [
    {
      icon: '/img/services/design/icon-b-1.svg',
      need: 'Services',
      others: 'Limited services',
      redBangle: 'End-to-end services',
    },
    {
      icon: '/img/services/design/icon-b-2.svg',
      need: 'Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent, premium quality',
    },
    {
      icon: '/img/services/design/icon-b-3.svg',
      need: 'Storytelling',
      others: 'Generic messaging',
      redBangle: 'Tailored storytelling',
    },
    {
      icon: '/img/services/design/icon-b-4.svg',
      need: 'Industries',
      others: 'Limited industry exposure',
      redBangle: 'Cross-industry perspective',
    },
    {
      icon: '/img/services/design/icon-b-5.svg',
      need: 'Tech-forward',
      others: 'Traditional execution',
      redBangle: 'Tech-led & AI-forward',
    },
    {
      icon: '/img/services/design/icon-b-6.svg',
      need: 'Motion-first',
      others: 'Static-first design',
      redBangle: 'Motion-led systems',
    },
    {
      icon: '/img/services/design/icon-b-7.svg',
      need: 'Deadlines',
      others: 'You follow up with them',
      redBangle: 'We proactively plan for you',
    },
    {
      icon: '/img/services/design/icon-b-8.svg',
      need: 'Project management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows',
    },
  ]

  const workData = [
    {
      slug: 'SLB interactive explainers',
      featuredImage: {
        src: '/img/explainer-video/SLB.png',
      },

      title: 'Interactive Explainer for oilfield services',
      company: {
        name: 'SLB',
      },
      video: {
        workDetails: {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
        },
        content:
          'SLB was digitizing its sales, manufacturing, and product engineering workflows. And this interactive explainer helped their IT team launch and drive adoption across the organisation.',
      },
      popUpTitle:
        'Animated Explainer on Sales Digitization for ~30,000 employees',
      popUpPoints: [
        '01. Data sorting',
        '02. Creative Consulting',
        '03. Concept',
        '04. Script',
        '05. Storyboard',
        '06. Animation',
        '07. Interactivity',
        '08. Hosting',
      ],
      redText: 'Premium Interactive Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
      ],
    },
    {
      slug: 'Adobe eDam',
      featuredImage: {
        src: '/img/explainer-video/adobe.png',
      },
      title: 'Whiteboard Explainer Video on DAM',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092040991?share=copy',
        },
        content:
          'How do you pitch a great Digital Asset Management to busy marketers? By telling them an engaging persona-driven story (made using custom whiteboard illustration) that hits the mark.',
      },
      popUpTitle: 'Whiteboard Explainer Video on Digital Asset Management',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Illustrations',
        '04. Storyboard',
        '05. Animation',
        '06. Voice over',
        '07. Music & SFX',
        '08. Project Management',
      ],
      redText: 'Premium Whiteboard Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
      ],
    },
    {
      slug: 'Hansel / Superbeard',
      featuredImage: {
        src: '/img/explainer-video/Hansel.png',
      },
      title: 'Live Action Explainer for SAAS product',
      company: {
        name: 'Hansel.io',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/867141400?share=copy',
        },
        content:
          'How we communicated complex information using a simple, human-centric story. Here’s our live action explainer for Hansel - a SAAS product for context aware A/B testing.',
      },
      popUpTitle:
        'Live Action Explainer on user drop-off management product - Hansel',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Custom UI Graphics',
        '04. Fictitious brand ',
        '05. Casting & Styling',
        '06. Production',
        '07. Post Production',
        '08. Versioning',
      ],
      redText: 'Live Action Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
      ],
    },
    {
      slug: 'DCMO',
      featuredImage: {
        src: '/img/explainer-video/DCMO.png',
      },
      title: 'Animated Explainer for DCMO Services',
      company: {
        name: 'Infosys Equinox',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092042256?share=copy',
        },
        content:
          'An exciting explainer video to help increase awareness for Digital Commerce Marketing Offerings from Infosys Equinox. The target audience: CXOs at E-Commerce businesses.',
      },
      popUpTitle: 'Animated Explainer for Digital Commerce Marketing  Services',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Storyboard',
        '05. Animation',
        '06. Voice Over',
        '07. Music',
        '08. Teaser Video',
      ],

      redText: 'Custom 2D Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
      ],
    },

    {
      slug: 'Wipro Animated Case Study',
      featuredImage: {
        src: '/img/explainer-video/wipro.png',
      },
      title: 'Motion Graphics Case Study for HIMSS',
      company: {
        name: 'Wipro',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092041941?share=copy',
        },
        content:
          'IT giant Wipro had a challenging task for us: 24 case study videos in 90 days. We made them and delivered them on time! Check out one of the sophisticated videos from the project.',
      },
      popUpTitle: 'Motion Graphics Case Study for Wipro’s booth at HIMSS event',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Design & Storyboard',
        '04. Motion Graphics',
        '05. Voice over',
        '06. Music & SFX',
        '07. Project Management',
        '08. Asset Management',
      ],

      redText: 'Sophisticated Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
      ],
    },
    {
      slug: 'Vymo SMB Explainer',
      featuredImage: {
        src: '/img/explainer-video/vymo_sme.png',
      },
      title: 'Live action explainer with Motion Graphics',
      company: {
        name: 'Vymo',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092039633?share=copy',
        },
        content:
          'When Vymo wanted a great explainer to target North American regional banks - we created a studio-shot live-action film with a fun set, actors and custom motion graphics.',
      },
      popUpTitle: 'Live action explainer with Motion Graphics for SAAS Brand',
      popUpPoints: [
        '01. Concept',
        '02. Script Customisation',
        '03. Graphic design',
        '04. Casting & Styling',
        '05. Set Design',
        '06. Production',
        '07. Editing & Animation',
        '08. Music, SFX & more',
      ],

      redText: 'Studio-Shot Explainer Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
      ],
    },
    {
      slug: 'Collage style explainer - Univ Upskilling (Infosys)',
      featuredImage: {
        src: '/img/explainer-video/ai_first_employees.png',
      },
      title: 'Mixed Media Explainer Video Case Study',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1042874327',
        },
        content:
          'We flipped the script of typical case study videos by placing our client’s employees at the center of the story—giving them the spotlight as enablers of AI-first software solutions.',
      },
      popUpTitle: 'Mixed Media Explainer Video Case Studies for Social Media',
      popUpPoints: [
        '01. Script',
        '02. Graphic design',
        '03. Motion Graphics',
        '04. Voice Over',
        '05. Music & SFX',
        '06. Video Thumbnail',
      ],
      redText: 'Mixed Media Explainer Video Case Study',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
      ],
    },
    {
      slug: 'Introducing Multiplier',
      featuredImage: {
        src: '/img/explainer-video/Multiplier.png',
      },
      title: 'SAAS Marketing Explainer',
      company: {
        name: 'Multiplier',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1030707001',
        },
        content:
          'Multiplier - a SAAS solution that simplifies the complexities of global employee onboarding - needed a video for its global launch. Here’s the on-brand custom 2D explainer we created.',
      },
      popUpTitle: 'SAAS Marketing Explainer for Multiplier',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Stock image curation',
        '05. Storyboard',
        '06. Animation',
        '07. Voice Over',
        '08. Music',
      ],

      redText: 'SAAS Marketing Explainer',
      relatedVideos: [
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
      ],
    },
  ]

  const brandIdentityDesignFaq = [
    {
      key: 1,
      title: 'What is brand identity?',
      content:
        'Brand identity is the complete system of visuals, messaging, and tone that represents your business or product across all touchpoints. It includes positioning, brand voice, logo, colours, and typography. Our brand identity design services help you build this from the ground up, making sure there’s clarity, consistency, and easy recall.',
    },
    {
      key: 2,
      title: 'Why is brand identity important?',
      content:
        'Your brand identity influences how your audience perceives you. A well-designed identity builds trust, creates an emotional connection, and helps you stand out in a cluttered market. That’s why investing in professional brand identity services is key to long-term brand success.',
    },
    {
      key: 3,
      title: 'What’s included in your brand identity services?',
      content: (
        <>
          <p>
            We craft a brand identity system that covers everything you need to
            build a strong, cohesive brand.
          </p>
          <br />
          <p>
            We start with market research, competitor analysis, and
            collaborative brand workshops to understand your business, audience,
            and competition. From there, we define your brand strategy, values,
            voice, and story.
          </p>
          <br />
          <p>
            Next, we design a complete identity system: brand name, logo,
            typography, colour palette, iconography, imagery, and usage
            guidelines, all documented in a detailed brand manual.
          </p>
          <br />
          <p>
            We also develop essential brand collateral tailored to your needs,
            such as business stationery, emailers, brochures, websites, posters,
            merchandise, and more.
          </p>
          <br />
          <p>
            Where needed, we support rollout as well, helping launch your new
            identity across digital channels like social media and campaign
            assets.
          </p>
        </>
      ),
    },
    {
      key: 4,
      title: 'What’s your process for creating a brand identity?',
      content: (
        <>
          We follow a structured 6-step process to craft a unique and impactful
          brand identity. It begins with{' '}
          <span className="font-bold">Discovery</span>, where we engage in deep
          conversations and workshops to understand your business, audience, and
          market. In the <span className="font-bold">Distillation</span> phase,
          we refine these insights into a clear brand vision and personality.
          Next comes <span className="font-bold">Strategy</span>, where we
          define your positioning with a strong differentiator, backed by
          research. The <span className="font-bold">Creative</span> phase brings
          this to life through storytelling, brand voice and visual identity
          development. In the <span className="font-bold">Brand</span> phase, we
          compile all assets of the identity system—logo, colour palettes,
          typography, and define the usage guidelines in the form of a manual.
          Finally, in the <span className="font-bold">Buzz</span> phase, we help
          you launch your brand through marketing assets, social media posts,
          websites, and other essential touchpoints to ensure it lands with
          impact.
        </>
      ),
    },
    {
      key: 5,
      title: 'Can you rebrand or refresh an existing identity?',
      content:
        'Yes. Whether you need a full rebrand or a visual refresh, we examine what to retain, change, or replace, to give your brand identity design a facelift that’s relevant with market trends or aligns with your business shift.',
    },
    {
      key: 6,
      title: 'Can you help with packaging design?',
      content:
        'We offer comprehensive brand identity design services. Our packaging design services are part of our broader branding and design solutions. We can help you with everything from initial concept development to final production-ready designs.',
    },
    {
      key: 7,
      title: 'Can I see brand identity examples?',
      content: (
        <>
          Of course. We have an extensive portfolio of brand identity examples
          across technology, automotive, F&B, and hospitality. You can explore
          our brand collateral projects{' '}

          <a
            href="https://www.makerrs.com/work/design"
            className="text-black underline hover:text-rb-link-green"
            target="_blank"
          >
            here
          </a>
          .
        </>
      ),
    },
    {
      key: 8,
      title: 'Do you use AI in your brand identity design process?',
      content:
        'Yes, wherever AI can help us boost the design process—for design research, exploring visual directions, editing images, or creating visual assets in a productive way. But when it comes to building your overarching brand story, creative strategy, and design, it’s all crafted by humans. We let AI only assist in our creative process.',
    },
    {
      key: 9,
      title: 'How long does it take you to develop a brand identity?',
      content:
        'Depending on the complexity and scope of work, the process can take anywhere from one month to a year. A limited-scope project consisting of logo design, font, and colors may be completed in a few weeks. While a more comprehensive brand identity—covering strategy, brand identity, design collateral, and launch execution may take between 6-12 months.',
    },
    {
      key: 10,
      title: 'What makes your brand identity services different?',
      content:
        'We combine strategy, storytelling, design, motion, and tech into one seamless process. As a full-service brand identity design company, we ensure alignment across every touchpoint, all managed end-to-end.',
    },
  ]

  const brandIdentityDesignPosts = [
    {
      key: 1,
      name: 'Crafting a Symbol of Success in Hospitality',
      image: '/img/case-study/medalio_thumbnail.webp',
      company: 'Meladio',
      alt: 'Medalio',
      tags: ['Hospitality', 'Brand Identity', 'Logo Design'],
      href: '/brand-designs/medalio-hotel-brand-identity',
    },
    {
      key: 2,
      name: 'Launching an AI-powered healthcare brand in record time',
      company: 'Lillia Care',
      image: '/img/works/lillia_img.jpg',
      alt: 'Lillia Care',
      tags: [
        'Healthtech',
        'Brand Identity',
        'Website Design',
        'Website Development',
      ],
      case_study_title: 'lillia-care-brand-launch',
      href: '/brand-designs/lillia-care-brand-launch',
    },
    {
      key: 41,
      name: 'Branding for an Indulgent Dessert Café',
      company: 'P.U. Dingding',
      image: '/img/case-study/pudingding-thumbnail.jpg',
      tags: ['F&B', 'Cafe', 'Brand Identity', 'Launch Video'],
      tabs: ['b2b-brand-design-agency'],
      case_study_title: 'pu-dingding-dessert-cafe-branding',
      href: '/brand-designs/pu-dingding-cafe',
    },
  ]

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '50% 40%',
          end: '80% 20%',
          trigger: heroSection.current,

          // markers: true,
        },
      })
      const getY = () => {
        const mEl = 72 + 50 + 72
        const titleElm = containerMbRef.current.getBoundingClientRect().height

        const y = mEl + titleElm
        return y
      }
      tl.fromTo(
        '.content-showreel',
        { opacity: 1, y: 0, duration: 0.05 },
        { opacity: 0, y: () => getY() },
        0
      ).fromTo('.play-circle, .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })
    mm.add('(min-width:768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '30.65% 35%',
          end: '55% 27%',
          trigger: heroSection.current,
          // markers: true,
        },
      })

      const getY = () => {
        const mEl = document
          .querySelector(`.heroMarquee`)
          .getBoundingClientRect().height
        //   +
        // 32 + //padding
        // 80 + // marquee margin
        // 108 // content height
        const titleElm = document
          .querySelector(`.hero-text`)
          .getBoundingClientRect().height

        const y = mEl + titleElm - 60

        return y
      }

      tl.fromTo(
        insetRef.current,
        {
          width: () => {
            const cistyles = containerRef.current?.getBoundingClientRect()
            return cistyles.width
          },

          y: () => -1 * getY(),
          bottom: '10px',
        },
        {
          width: '100%',

          y: 0,

          duration: 0.8,
          bottom: '0px',
        }
      )
        .fromTo(
          '.web-vid',
          {
            x: () => {
              const istyles = containerRef.current?.getBoundingClientRect()
              const nstyles = insetRef.current?.getBoundingClientRect()
              const diffContainer = Math.min(istyles.left - nstyles.left, 0)
              return diffContainer
            },
            borderRadius: '70px',
          },
          { x: 0, borderRadius: '0' },
          0
        )

        .fromTo(
          '.content-showreel',
          { opacity: 1 },
          { opacity: 0, y: () => getY(), duration: 0.01 },
          0
        )

      return () => {
        tl.kill()
      }
    })
    const resize = () => {
      gsap.matchMediaRefresh()
    }
    window.addEventListener('resize', resize)

    let singleLetterTimeline = gsap.timeline({
      ease: 'power2.out',
      repeat: -1,
    })

    singleLetterTimeline
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
          delay: 2,
        }
      )

      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 100,
        },
        '+=1'
      )
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
        },
        '+=2'
      )

    const letterTimeline = gsap.timeline()
    letterTimeline.to(
      `.${styles.rtol}, .${styles.ltor}`,
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.256,
        },
      },
      0
    )
    return () => {
      window.removeEventListener('resize', resize)
      letterTimeline.kill()
      mm.kill()
    }
  }, [])
  const heroHeightRef = useRef(0)

  useEffect(() => {
    const heightDiv = document.querySelector('.height-div').offsetHeight

    if (heroHeightRef.current === 0) {
      heroHeightRef.current = heroSection.current.offsetHeight
    }

    const heroHeightFunc = () => {
      if (window.innerWidth > 767) {
        heroSection.current.style.minHeight =
          heroHeightRef.current + heightDiv - 120 + 'px'
        ScrollTrigger.refresh()
      } else {
        // do nothing
      }
    }
    heroHeightFunc()
  }, [])

  const [isOverlapping, setIsOverlapping] = useState(false)
  const ref = useRef(null)
  const stickyButtonRef = useRef(null)

  useEffect(() => {
    const contactEl = document.getElementById('id') // contact section
    const videoEl = document.getElementById('video-section') // video section

    if (!contactEl || !videoEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyVisible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.2
        )
        setIsOverlapping(isAnyVisible)
      },
      {
        threshold: [0.2],
      }
    )

    observer.observe(contactEl)
    observer.observe(videoEl)

    return () => {
      observer.unobserve(contactEl)
      observer.unobserve(videoEl)
    }
  }, [])

  return (
    <>
      <SEO
        title="B2B Brand Identity Design"
        description="B2B Brand Identity Design"
        url=" https://www.makerrs.com/brand-identity-design-services"
        keywords="brand identity design,
          how to create a brand identity,
          brand identity agency,
          brand identity examples,
          brand identity services,
          brand identity design company"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full invisible pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col md:mt-[20px]">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Get Impactful</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4 brand-line">
                  <span>Brand</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[80px]`}
                    ref={containerRef}
                  ></div>
                </div>

                <div>
                  <span>Identity Design</span>
                </div>
              </h1>

              {/* Bullet Points */}
              <div className="mt-6 md:mt-8 heroMarquee">
                <ul className="list-inside space-y-3 text-[16px] leading-[1.25] tracking-[-0.64px] font-opensans md:text-[24px] md:leading-[32px] md:tracking-[-0.24px] font-semibold">
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>From strategy to brand launch</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Branding that&apos;s crafted for recall</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Design that works across platforms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Design that aligns with your goals</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="w-screen bottom-0 left-0 select-none md:aspect-[1920/1080] relative md:hidden block  md:origin-top md:mx-auto"
              onClick={onModalOpen}
              data-rb-cursor
              data-rb-cursor-type="play"
              ref={insetRef}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/img/services/design/brand_identity_design.mp4"
                poster="/brand_identity_design_pop_thumbnail.png"
                className="w-[100%] max-w-[100%] mt-8 block md:hidden"
                width="1920"
                height="1068"
              ></video>

              <div className="absolute bottom-4 right-4 z-10 backdrop-blur-2xl bg-rb-black/50 rounded-[32px] py-[17px] px-4.5 pl-[20px] overflow-hidden md:hidden block">
                <div className="flex items-center gap-2 justify-center text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="13"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 🟦 Form Section */}
            <div className="w-full lg:w-[511px] mt-[24px] lg:!mt-0 bg-white lg:flex lg:flex-col lg:justify-center p-8 rounded-[16px] border border-rb-border-black">
              <h3 className="text-base leading-6 md:text-[20px] md:leading-7 mb-7.5 font-bold tracking-[-0.2px] opacity-[90%]">
                Connect with us. Let’s get started.
              </h3>
              <GetUpdatesForm />
            </div>
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
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </div>
        <div
          id="video-section"
          className="w-full bottom-0 left-0 select-none md:aspect-[1920/1068] md:top-[5px] relative  md:origin-top mx-auto"
          onClick={onModalOpen}
          data-rb-cursor
          data-rb-cursor-type="play"
          ref={insetRef}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/services/design/brand_identity_design.mp4"
            poster="/img/services/design/brand_identity_design_pop_thumbnail.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="overflow-hidden bg-white md:pt-4 pt-4 md:pb-0">
        <Marquee duration={30}>
          {[
            {
              id: 0,
              marqueeContent: 'Brand Identity Design',
            },
            {
              id: 1,
              marqueeContent: 'Brand Strategy',
            },
            {
              id: 2,
              marqueeContent: 'Brand Story',
            },
            {
              id: 3,
              marqueeContent: 'Brand Voice',
            },
            {
              id: 4,
              marqueeContent: 'Brand Name',
            },
            {
              id: 5,
              marqueeContent: 'Visual Identity',
            },
            {
              id: 6,
              marqueeContent: 'Logo',
            },
            {
              id: 7,
              marqueeContent: 'Mascots',
            },
            {
              id: 8,
              marqueeContent: 'Iconography',
            },
            {
              id: 9,
              marqueeContent: 'Illustrations',
            },
            {
              id: 10,
              marqueeContent: 'Brand Merchandise',
            },
            {
              id: 11,
              marqueeContent: 'Brand Guidelines',
            },
          ].map(({ id, marqueeContent }) => (
            <div key={id} className="mx-10">
              <h3 className="relative font-everett tracking-[-1.12px] text-xl md:text-3xl after:content-['|'] after:absolute after:-right-10 after:top-0 after:text-rb-red after:font-normal">
                {marqueeContent}
              </h3>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-[48px] md:pb-0">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">
            WE POWER IDENTITY
          </LineHeading>
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-[1200px] mx-auto w-full pl-6 md:px-6 ml-0 md:ml-5 md:ml-[3.1rem] transform transform -translate-x-[24px] sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-20">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statstyles.statline} [&:nth-child(3)]:md:pr-[7px] [&:nth-child(1)]:md:pr-[26px]  ${s.id === 3 ? 'md:!pr-[26px] md:!pl-6' : ''}`}
                key={s.id}
              >
                <div className={`${s.id === 3 ? 'ipad-mini-ml' : ''}`}>
                  <div
                    className={`lg:w-fit lg:mx-auto relative ${s.id === 1 ? 'md:!ml-[28px]' : ''} ${s.id === 2 ? 'md:!ml-[28px]' : ''} ${s.id === 3 ? 'md:-left-[30px]' : ''}`}
                  >
                    <div
                      className={`${s.id === 1 ? '!-ml-[4px] md:!-ml-[14px]' : ''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[3px]' : ''} ${s.id === 2 ? '!-ml-[2px] md:!-ml-[3px]' : ''} ${s.id === 3 ? '!-ml-[2px] md:!-ml-[4px]' : ''}`}
                    >
                      <RollupNumber {...s.countUpProps} />
                    </div>
                    <div
                      className={`text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett ${s.id === 2 ? 'md:ml-[3px] md:w-[160px]' : ''} ${s.id === 0 ? 'md:ml-[2px]' : ''}`}
                    >
                      {s.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[48px] pt-[24px] md:pt-30 md:!pb-0 bg-white h-[300vh] featured-section">
        <div className="sticky top-[10%] md:top-5">
          <div className="overflow-hidden">
            <div className="container">
              <LineHeading className="mb-6 md:mb-7.5">
                The Makerrs Advantage
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
                Get brand identity services{' '}
                <br className="hidden md:inline-block" />
                that elevate your business
              </div>

              <div className="flex gap-8 feature-slider">
                {sliderCards.map(({ key, imgurl, alt, title, desc }) => (
                  <div
                    key={key}
                    className="bg-rb-service-grey py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg min-w-full md:min-w-[33.33%] "
                  >
                    <div className=" text-black">
                      <img src={imgurl} alt={alt} width={60} height={60} />
                      <div className="mt-4 mb-2 md:mb-[6px] text-[16px] leading-[1.1] font-medium font-everett md:text-input-large">
                        {title}
                      </div>
                      <div className="text-sm md:text-[16px] md:leading-[1.5] opacity-80">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-rb-black/10 w-full relative overflow-hidden mt-16">
                <div className="progress-slider absolute inset-0 w-full h-full bg-rb-red"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:pt-20">
        <FeaturedWorkSection
          posts={brandIdentityDesignPosts}
          href="/work/design"
          title="EXPLORE BRAND IDENTITY PROJECTS"
          pageName="servicebrand"
        />
      </div>

      <section
        className={`overflow-hidden bg-white pt-[48px] pb-18 md:pb-30 md:pt-15 `}
      >
        <div className="container text-center">
          <h3 className="text-title md:text-title-md mb-8 md:mb-14 font-everett">
            Why choose Makerrs <br /> over other agencies?
          </h3>
          <div className="w-full overflow-x-auto md:p-0">
            <div className="max-w-full">
              <table className="w-full max-w-full md:w-[940px] mx-auto text-sm border-collapse border-spacing-0 text-left font-everett leading-[24px]">
                <thead>
                  <tr className="h-[50px] border-b border-[#D4D4D4]">
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                      What You Need
                    </th>
                    <th className="md:!w-[313px] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-[#030104] md:whitespace-nowrap text-left">
                      What Others Offer
                    </th>
                    <th className="md:!w-[313px] max-w-[30%] px-4 py-2 font-medium text-[16px] md:text-[20px] tracking-[-0.02em] text-rb-link-green md:whitespace-nowrap text-left">
                      What you get with us
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-[#F1F1F1] border-t border-[#eee]"
                    >
                      <td className="md:!w-[313px] px-4 py-3 font-medium md:text-[18px] tracking-[-0.32px] font-everett text-[#030104]">
                        <div className="flex items-center">
                          <img
                            src={row.icon}
                            alt=""
                            className="w-5 h-5 mr-5 hidden md:inline"
                          />
                          <span>{row.need}</span>
                        </div>
                      </td>
                      <td className="md:!w-[313px] px-4 py-3 font-normal md:text-[18px] leading-[24px] text-rb-dune tracking-[-0.02em] font-opensans">
                        {row.others}
                      </td>
                      <td className="md:!w-[313px] px-4 py-3 font-semibold md:text-[18px] leading-[24px] tracking-[-0.02em] text-rb-dune/90 font-opensans">
                        {row.redBangle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <TrustedBrandsSection className="bg-white pb-[48px] md:!pb-[80px]" />

      <section className="py-18 md:py-15 overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            Our 6-Step Branding Process
          </div>

          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full md:w-8/12 grid md:grid-cols-2 grid-cols-1 gap-6">
              {sliderVerticleCards.map(({ key, imgurl, alt, title, desc }) => (
                <div
                  key={key}
                  className="bg-rb-service-grey py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg "
                >
                  <div className="text-black">
                    <img src={imgurl} alt={alt} width={60} />
                    <div className="mt-4 mb-2 md:mb-[6px] text-[16px] leading-[1.1] font-medium font-everett md:text-input-large">
                      {title}
                    </div>
                    <div className="text-sm md:text-[16px] md:leading-[1.5] opacity-80">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:h-full h-auto md:w-4/12">
              <picture>
                <source
                  srcSet="img/collab/global-collaborators.webp"
                  media="(min-width:768px)"
                />
                <img
                  className="overflow-hidden object-cover"
                  src="img/collab/global-collaborators-mweb.webp"
                  alt="global collaborators"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        className="pb-18 pt-8 md:py-30 !mt-0"
        testimonialData={testimonialsDefault}
        type="semi"
        title={' Why Clients Trust Us'}
      />

      <section className=" pb-18 md:pb-30 md:pt-[48px]">
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
                data={brandIdentityDesignFaq?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <VideoModal open={herovideoOpen} setOpen={setHerovideoOpen}>
        <div className="relative max-w-[80%] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/services/design/brand_identity_design.mp4"
            className="w-full"
            width="1920"
            height="1068"
          ></video>
        </div>
      </VideoModal>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(explainerVideoProductionSchema)}
      </Script>
    </>
  )
}
export default BrandIdentityDesign
