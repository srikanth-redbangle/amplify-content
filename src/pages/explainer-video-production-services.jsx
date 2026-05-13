import { SEO } from '@/components/shared/SEO'
import { useEffect, useRef, useState } from 'react'
import {
  LineHeading,
  Marquee,
  PlayCard,
  RollupNumber,
  Testimonials,
  TrustedBrandsSection,
  VideoMetaModal,
  VideoModal,
} from '@/components/shared'
import Script from 'next/script'
import { Accordion, Button } from '@/components/ui'
import statstyles from '@/styles/sections/StatsSection.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { GetUpdatesForm } from '@/components/shared/sections/GetUpdatesSection/GetUpdatesForm'
import styles from '@/styles/home.module.scss'
import { LineArrow } from '@/components/icons'
import { useRouter } from 'next/router'
import { explainerVideoProductionSchema } from '@/components/schema/explainer-video-production-services'
const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null,
}

const ExplainerVideoLandPage = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const insetRef = useRef()
  const [modal, setModal] = useState(INIT_MODAL)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)

  // const [hideStickyCTA, setHideStickyCTA] = useState(false)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setHideStickyCTA(entry.isIntersecting)
  //     },
  //     {
  //       root: null,
  //       threshold: 0.1, // trigger when 10% of footer is visible
  //     }
  //   )

  //   const footerEl = document.querySelector('.contact-section') // grab the global footer
  //   if (footerEl) {
  //     observer.observe(footerEl)
  //   }

  //   return () => {
  //     if (footerEl) {
  //       observer.unobserve(footerEl)
  //     }
  //   }
  // }, [])
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
      id: 1,
      countUpProps: {
        value: 3,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>videos created</>,
    },
    {
      id: 3,
      countUpProps: {
        value: 15,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>explainer video formats</>,
    },
    {
      id: 0,
      countUpProps: {
        value: 70,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <span className="md:max-w-[188px]">global clients</span>,
    },

    {
      id: 2,
      countUpProps: {
        value: 50,
        suffix: (
          <span className="inline-flex">
            <span className="text-rb-red">+</span>
          </span>
        ),
      },
      text: <>creative team</>,
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: '/img/services/videos/icon7.svg',
      alt: 'creative_ideation',
      title: 'Great Video Concepts',
      desc: 'Work with an agency that understands your video brief, communication goals and business context; presents you with at least two exciting creative concepts and helps you choose the best way forward.',
    },
    {
      key: 2,
      imgurl: '/img/services/videos/icon8.svg',
      alt: 'icon_2',
      title: 'Impactful Storytelling',
      desc: 'Are you looking for unique ideas and great storytelling? You’ve come to the right agency. We are always excited about ambitious projects that need great characterisation, visualisation, voice over, music and more.',
    },
    {
      key: 3,
      imgurl: '/img/services/videos/icon9.svg',
      alt: 'website_editorial_content',
      title: 'Detailed Storyboards',
      desc: 'Are you looking to make an awesome explainer video? Do you want unique characters, design and UI screen animations? Trust us to deliver a unique and detailed storyboard for your next explainer video.',
    },
    {
      key: 4,
      imgurl: '/img/services/videos/icon10.svg',
      alt: 'design_collateral',
      title: 'Any Video Format',
      desc: 'Whether you need whiteboard explainer videos, 2D character explainer videos, 3D explainer videos, interactive explainer videos, mixed-media explainer videos  or live action explainer videos shot with actors on set—we’ve got you covered.',
    },
    {
      key: 5,
      imgurl: '/img/services/videos/icon11.svg',
      alt: 'motion_graphics',
      title: 'Premium Animation',
      desc: 'Are you looking for premium motion graphics or 3D animation, and inspiring sound design? We’ve got you covered. Our Post Production and Sound Design experts will craft fantastic explainer videos for your brand.',
    },
    {
      key: 6,
      imgurl: '/img/services/videos/icon12.svg',
      alt: 'brand_communication_strategy',
      title: 'Teasers & Promos',
      desc: 'Are you looking to make a long-format interactive explainer video or demo video, but need great teasers and promo videos? You’re looking at the right agency for the job.',
    },
    {
      key: 7,
      imgurl: '/img/services/videos/icon13.svg',
      alt: 'platform_content',
      title: 'Global Languages',
      desc: 'If you are a global business, look no further for explainer videos you can deploy across regions and languages. We support foreign language translation, voice overs and versioning for branded explainer videos.',
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
      quote:
        'It’s never easy creating great videos for a fast-growing business like ours. We struggled, till we came across Makerrs.',
      name: 'SUNIL SURESH',
      designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
      company: 'CAPILLARY TECHNOLOGIES',
      image: {
        srcSet: `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote:
        'We are delighted to team up with Makerrs. The video showcases the ability of the team at Makerrs to deliver a very compelling case for our innovative work, and to capture the hearts and minds of our audience.',
      name: 'ALINA PATRAHAU',
      designation: 'FOUNDER',
      company: 'DARUIESTE ARIPI',
      image: {
        srcSet: `/img/testimonials/alina-patrahau.jpg 533w, /img/testimonials/alina-patrahau.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const data = [
    {
      icon: '/img/services/explainer-video/end_to_end_services.svg',
      need: 'Services',
      others: 'Limited services',
      redBangle: 'End-to-end services',
    },
    {
      icon: '/img/services/explainer-video/premium_quality.svg',
      need: 'Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent, premium quality',
    },
    {
      icon: '/img/services/explainer-video/great_storytelling.svg',
      need: 'Storytelling for Your Industry',
      others: 'Limited industry exposure',
      redBangle: 'Storytelling across industries',
    },
    {
      icon: '/img/services/explainer-video/any_genre_video.svg',
      need: 'Genres',
      others: 'Limited genres',
      redBangle: 'Any genre video',
    },
    {
      icon: '/img/services/explainer-video/any_format_video.svg',
      need: 'Formats',
      others: 'Limited formats',
      redBangle: 'Unlimited formats',
    },
    {
      icon: '/img/services/explainer-video/easy_feedback.svg',
      need: 'Feedback',
      others: 'Emails back and forth',
      redBangle: 'Cloud-based interactive reviews',
    },
    {
      icon: '/img/services/explainer-video/flexible_turnaround_times.svg',
      need: 'Turnaround Time',
      others: 'They work at their speed',
      redBangle: 'We work at your speed',
    },
    {
      icon: '/img/services/explainer-video/on_time_delivery.svg',
      need: 'Deadline',
      others: 'You follow up with them',
      redBangle: 'We proactively plan & follow up',
    },
    {
      icon: '/img/services/explainer-video/teasers_promo.svg',
      need: 'Teasers / Promo',
      others: 'Limited Versioning',
      redBangle: 'Unlimited Versioning',
    },
    {
      icon: '/img/services/explainer-video/language_adapts.svg',
      need: 'Languages',
      others: 'English videos',
      redBangle: 'Any language Video',
    },
    {
      icon: '/img/services/explainer-video/professional_project_management.svg',
      need: 'Project Management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows, notifications',
    },
  ]

  const workData = [
    {
      slug: 'Interactive Explainer for oilfield servicess',
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
      slug: 'Whiteboard Explainer Video on DAM',
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
      slug: 'Live Action Explainer for SAAS product',
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
      slug: 'Animated Explainer for DCMO Services',
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
      slug: 'Motion Graphics Case Study for HIMSS',
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
      slug: 'Live action explainer with Motion Graphics',
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
      slug: 'Mixed Media Explainer Video Case Study',
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
      slug: 'SAAS Marketing Explainer',
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

  const FAQ = [
    {
      key: 0,
      title: 'Do you have a unique explainer video creation process?',
      content: (
        <>
          <div className="mb-5">
            Over the years, we have scripted, designed and produced hundreds of explainer videos across industries such as technology, F&B, manufacturing, fashion, logistics, hiring, energy, education, real estate and more. And while on every project we ask ourselves what we might do differently, and what we might do better – we also follow a tried-and-tested process that enables our clients to grow their brands and us to keep delivering on-point, on-quality. Our typical project workflow is something that starts with a clear brief, moves on to research, concepts, script, visualisation, design, storyboards, post production, reviews and versioning. But what’s unique about how we do it is our creative cloud platform that facilitates efficient workflows. Here’s a quick run through of how it helps: 
          </div>
          <ul>
            <li className="mb-5">
              - Your brief is loaded on our platform: this contains all the information you give us and all the creative assets we need to work on. Everything is in one place.
            </li>
            <li className="mb-5">
              - We use rate cards, add-ons and an efficient costing tool on our
              platform to speed up the pricing and contract process for you.
            </li>
            <li className="mb-5">
              - A great creative team is assigned to your project and briefed in
              detail.
            </li>
            <li className="mb-5">
              - Our producers choose the most optimal schedule on our platform,
              and update the dates as per your requirement. This way, everyone
              on the project knows exactly when something is due to you.
            </li>
            <li className="mb-5">
              - The creative team gets going with their work, coming to you for
              reviews at the script, storyboard or design stage.
            </li>
            <li className="mb-5">
              - We deliver the draft video on our platform and make it easy for
              you to review videos using our interactive review feature.
            </li>
            <li>
              - Once done, all the project assets are also uploaded to our
              platform so you can find them anytime you need and even share them
              with colleagues.
            </li>
          </ul>
        </>
      ),
    },
    {
      key: 1,
      title:
        'How do you ensure that the explainer and demo videos you create are engaging for our target audience?',
      content:
        'We don’t just spend time understanding your business and competitors to arrive at a great video idea for you, we are also tuned into design and animation trends, AI innovations, content consumption platforms and marketing shifts happening around us. We track and continuously gather fresh knowledge and creative inspiration that keeps us delivering amazing and effective work for you. With every new creative idea we unleash and bring to life, we focus on what’s going to work for your business, brand, audience and mediums.',
    },
    {
      key: 2,
      title:
        'How do you ensure that the films and videos created for us align with our brand?',
      content:
        'We start by getting to know your brand, its values and audiences. We always ask for your brand manual. We use our understanding of your brand and business, as well as your brand guidelines to align our creative craft and develop videos that not only reflect your brand but also support your business objectives.',
    },
    {
      key: 3,
      title: 'Which platforms do you create videos for?',
      content:
        'As a creative agency and collaborative, we conceptualize and craft videos that work across a range of platforms such as YouTube, LinkedIn, WhatsApp, events and internal portals. Our goal is to ensure every piece of video content you commission connects with your audience, and drives engagement, no matter where it’s seen. Let’s say you are making a explainer video with us, we are able to also help you create versions and thumbnails of this film for various platforms.',
    },
    {
      key: 4,
      title: 'Do you create live action explainer videos?',
      content:
        'Yes, whether it’s featuring your team members or professional actors - we script, storyboard, cast, style, scout locations, do art direction, Direction, Production, post production, animation and more to create live-action explainer videos that work for your brand.',
    },
    {
      key: 5,
      title: 'How do you handle copyright and ownership of the video content?',
      content: (
        <>
          <div>
            With the majority of our work, as per our pre-agreed contracts with
            our clients, the copyright for creative assets are transferred to
            the client upon receipt of final payment for the commissioned work.
          </div>
          <br />
          <div>
            In some cases though, the copyright is not assigned or transferred
            for perpetuity. Examples of short-term rights assignment include
            custom-composed music, celebrity cast, etc. Rights with these
            creators and artists are agreed to on a case-to-case basis, and
            usually are for a year or three to begin with for specific mediums.
            Clients may extend such rights for additional years and mediums via
            Makerrs, at a future date and at an additional cost.
          </div>
        </>
      ),
    },
  ]

  const handleRelatedVideoClick = (videolink) => {
    const clickedVideoData = workData.find(
      (item) => item.video.workDetails.videolink === videolink
    )

    if (clickedVideoData) {
      setModal({
        open: true,
        loading: false,
        video: clickedVideoData.video,
        title: clickedVideoData.popUpTitle,
        points: clickedVideoData.popUpPoints,
        redText: clickedVideoData.redText,
        relatedVideos: clickedVideoData.relatedVideos,
      })
    }
  }

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
          start: '30.4% 35%',
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

        const y = mEl + titleElm - 50

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

  const router = useRouter()

  return (
    <>
      <SEO
        title="B2B Explainer Videos that Impress"
        description="B2B Explainer Videos that Impress"
        url={`https://www.makerrs.com${router.asPath}`}
        keywords="video animation services
          custom explainer videos,
          whiteboard animation,
          explainer video agency,
          explainer video company,
          explainer video production company,
          animated explainer video services,
          video animation services"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full invisible pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Explainer</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4">
                  <span className="md:block hidden">videos</span>
                  <span className="md:hidden block">videos that</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[80px]`}
                    ref={containerRef}
                  ></div>
                </div>

                <div>
                  <span className="md:block hidden">that Impress</span>
                  <span className="md:hidden block">Impress</span>
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
                    <span>End-to-end explainer video production</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Experienced explainer video agency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                      className="mt-[7px]"
                    />
                    <span>
                      Whiteboard animation, live action explainers,{' '}
                      <br className="hidden md:block" />
                      3D explainers and more
                    </span>
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
                src="/img/services/videos/explainer_hero.mp4"
                poster="/img/services/videos/explainer_hero.png"
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
          className="w-full bottom-0 left-0 select-none md:aspect-[1920/1068] relative  md:origin-top mx-auto"
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
            src="/img/services/videos/explainer_hero.mp4"
            poster="/img/services/videos/explainer_hero.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-18 md:pb-0">
        <div className="container pl-5 pr-5 lg:pl-0 lg:pr-0">
          <LineHeading className="mb-6 md:mb-7.5">
            Trusted Explainer Video Agency
          </LineHeading>
          <div className="grid grid-cols-2 gap-y-12 md:gap-x-6 mx-0 md:flex md:flex-row">
            {stats.map((s, i) => (
              <div
                key={s.id}
                className={`text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statstyles.statlinecorporate}`}
              >
                <div
                  className={`w-fit ${
                    i === 0
                      ? 'md:ml-0 md:mr-[clamp(10px,5vw,80px)]'
                      : 'md:mr-[clamp(10px,5vw,80px)] md:ml-[clamp(10px,5vw,60px)]'
                  }`}
                >
                  <RollupNumber
                    {...s.countUpProps}
                    {...s.countUpProps}
                    className={`${
                      s.countUpProps.value === 15 ? '-ml-3' : '-ml-[6px]'
                    } ${s.id === 0 ? 'md:!-ml-[7px] !-ml-[4px]' : ''} ${
                      s.id === 1 ? 'md:!-ml-[5px] !-ml-[4px]' : ''
                    } ${s.id === 2 ? 'md:!-ml-[6px] !-ml-[3px]' : ''}${
                      s.id === 3 ? ' md:!-ml-[12px] !-ml-[6px]' : ''
                    } `}
                  />
                  <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-18 pt-0 md:py-30 bg-white h-[300vh] featured-section">
        <div className="sticky top-[10%] md:top-5">
          <div className="overflow-hidden">
            <div className="container">
              <LineHeading className="mb-6 md:mb-7.5">
                Explainers for Global Businesses
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
                How we transform complex information{' '}
                <br className="hidden md:inline-block" />
                into memorable explainer videos
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

      <section className={`overflow-hidden pb-18 pt-18 md:pb-18 bg-rb-mercury`}>
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
          <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[911px]">
            Explore our Explainer Video Portfolio
          </h3>
          <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-10">
            {workData.slice(0, 8).map((v) => (
              <PlayCard
                onClick={() => {
                  setModal({
                    open: true,
                    loading: false,
                    video: v.video,
                    title: v.popUpTitle,
                    points: v.popUpPoints,
                    redText: v.redText,
                    relatedVideos: v.relatedVideos,
                  })
                }}
                src={v?.featuredImage?.src}
                name={v?.title}
                company={v?.company?.name}
                key={v.slug}
              />
            ))}
          </div>

          <VideoMetaModal
            showContent={true}
            loading={modal.loading}
            open={modal.open}
            video={modal.video}
            title={modal.title}
            points={modal.points}
            redText={modal.redText}
            relatedVideos={modal.relatedVideos}
            setOpen={(v) => {
              setModal((m) => ({ ...m, open: v }))
            }}
            onRelatedVideoClick={handleRelatedVideoClick}
          />
        </div>
      </section>

      <section className="overflow-hidden bg-white md:pt-4 pt-4 md:pb-0">
        <Marquee duration={50}>
          {[
            {
              id: 0,
              marqueeContent: '2D Explainer Video',
            },
            {
              id: 1,
              marqueeContent: 'Whiteboard Animation Video',
            },
            {
              id: 2,
              marqueeContent: 'Product Explainer Video',
            },
            {
              id: 3,
              marqueeContent: '3D Explainer Video',
            },
            {
              id: 4,
              marqueeContent: 'Interactive Explainer Video',
            },
            {
              id: 5,
              marqueeContent: 'Live-action Explainer Video',
            },
            {
              id: 6,
              marqueeContent: 'Case Study Explainer Video',
            },
            {
              id: 7,
              marqueeContent: 'Educational Explainer Video',
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

      <section className={`overflow-hidden bg-white py-18 md:py-30`}>
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
      <TrustedBrandsSection className="bg-white pb-12 md:pb-20" />

      <section className="py-18 md:py-15 overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            How We Create
            <br />
            Custom Explainer Videos that Stand Out
          </div>

          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full md:w-8/12 grid md:grid-cols-2 grid-cols-1 gap-6">
              {processCards.map(({ key, imgurl, alt, title, desc }) => (
                <div
                  key={key}
                  className="bg-rb-service-grey py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg "
                >
                  <div className=" text-black">
                    {/* <img src={imgurl} alt={alt} /> */}
                    <div className="mt-4 mb-2 md:mb-[6px] text-[16px] leading-[1.1] text-rb-link-green font-medium font-everett md:text-[32px]">
                      {key}
                    </div>
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
                  srcSet="/img/services/explainer-video/global-collaborators.webp"
                  media="(min-width:768px)"
                />
                <img
                  className="overflow-hidden object-cover"
                  src="/img/services/explainer-video/global-collaborators-mweb.webp"
                  alt="global collaborators"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        className="py-18 md:py-30 !mt-0"
        testimonialData={testimonialsDefault}
        type="semi"
        title="Why Our Clients Trust Us"
      />

      <section className=" pb-18 md:pb-30">
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
                data={FAQ?.map((c) => ({
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
            src="/img/services/videos/explainer_hero.mp4"
            poster="/img/services/videos/explainer_hero.png"
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
export default ExplainerVideoLandPage
