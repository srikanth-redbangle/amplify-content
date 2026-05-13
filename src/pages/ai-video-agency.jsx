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

const AIvideoAgency = () => {
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

     const icons = [
    {
      id: 0,
      name: 'cain.webp',
      width: '100px',
      height: '34px',
      alt: 'Mccain',
    },
    {
      id: 1,
      name: 'infosys-logo.jpg',
      width: '90',
      height: '30',
      alt: 'Infosys',
    },
    {
      id: 2,
      name: 'indeed.webp',
      width: '132',
      height: '36',
      alt: 'Indeed',
      className: '',
    },
    {
      id: 3,
      name: 'pudingding.png',
      width: '100',
      height: '30',
      alt: 'pudingding',
      className: '',
    },
    {
      id: 4,
      name: 'taneria.png',
      width: '132',
      height: '36',
      alt: 'taneria',
      className: '',
    },
    {
      id: 5,
      name: 'general-electric.png',
      width: '200',
      height: '150',
      alt: 'general-electric',
    },
    {
      id: 6,
      name: 'darwinbox.webp',
      width: '132',
      height: '36',
      alt: 'darwinbox',
      className: '',
    },
    {
      id: 7,
      name: 'itc.png',
      width: '60px',
      // height: '30px',
      alt: 'itc',
    },
    {
      id: 8,
      name: 'wipro.svg',
      width: '83',
      height: '66',
      alt: 'Wipro',
    },
    {
      id: 9,
      name: 'mumbai-indians.png',
      width: '100px',
      // height: '40px',
      alt: 'mumbai-indians',
    },
    {
      id: 10,
      name: 'sequoia.png',
      width: '167',
      height: '52',
      alt: 'sequoia',
    },
    {
      id: 11,
      name: 'swiggy.svg',
      width: '157',
      height: '39',
      alt: 'swiggy',
    },
    {
      id: 12,
      name: 'Tanishq.png',
      width: '80',
      height: '67',
      alt: 'Tanishq',
    },
    {
      id: 13,
      name: 'bosch.webp',
      width: '151',
      height: '33',
      alt: 'bosch',
    },
    {
      id: 14,
      name: 'slb.webp',
      width: '113',
      height: '52',
      alt: 'slb',
    },
    {
      id: 15,
      name: 'dara.png',
      width: '200',
      height: '150',
      alt: 'dara',
    },
    {
      id: 16,
      name: 'vymo-logo.webp',
      width: '127',
      height: '52',
      alt: 'vymo-logo',
    },
    {
      id: 17,
      name: 'exicom.png',
      width: '163',
      height: '44',
      alt: 'exicom',
    },
    {
      id: 18,
      name: 'treebo.png',
      width: '163',
      height: '44',
      alt: 'treebo',
    },
    {
      id: 19,
      name: 'virtusa.png',
      width: '120',
      height: '44',
      alt: 'virtusa',
    },
    {
      id: 20,
      name: 'bagmane.png',
      width: '140',
      height: '44',
      alt: 'bagmane',
    },
    {
      id: 21,
      name: 'komatsu.png',
      width: '140',
      height: '44',
      alt: 'komatsu',
    },
    {
      id: 22,
      name: 'aarki.png',
      width: '140',
      height: '44',
      alt: 'aarki',
    },
  ]


  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 3,
        suffix: (
          <div className="inline-flex">
            K<span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>videos created</>,
    },
    {
      id: 1,
      countUpProps: {
        value: 10,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>video formats</>,
    },
    {
      id: 2,
      countUpProps: {
        value: 60,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <span className="md:max-w-[188px]">global clients</span>,
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
      text: <>creative team</>,
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: '/creative_ideation_new.svg',
      alt: 'creative_ideation',
      title: 'Great Concepts',
      desc: 'We start by understanding your brand, communication goals, and audience. We then craft unique video concepts that blend creativity with technology to capture attention and drive engagement.',
    },
    {
      key: 2,
      imgurl: '/design_collateral_new.svg',
      alt: 'design_collateral',
      title: 'Across Formats',
      desc: 'We craft 2D, abstract, human-like character-based and mixed-format AI videos for marketing explainers, commercial videos, case study videos, thought leadership content, and more. Get Gen AI videos made across formats.',
    },
    {
      key: 3,
      imgurl: '/brand_content_strategy_new.svg',
      alt: 'brand_content_strategy',
      title: 'Advanced AI Video Processes',
      desc: 'From high-quality AI video generation to sound design, effects, and color grading - get trendy, professionally-made Gen AI videos for your brand.',
    },
    {
      key: 4,
      imgurl: '/motion_graphics_new.svg',
      alt: 'motion_graphics',
      title: 'AI Videos At Scale',
      desc: 'From AI-powered explainer videos to thought leadership videos crafted using Gen AI – our creative cloud workflows help you scale Gen AI video asset creation seamlessly across your marketing funnel.',
    },
    {
      key: 5,
      imgurl: '/platform_content_new.svg',
      alt: 'platform_content',
      title: 'End-to-End Services',
      desc: 'From concept to script, AI-generation, post-processing, voice-overs, music, and more. Leverage our end-to-end Gen AI video creation services to fuel brand growth for your enterprise.',
    },
  ]

  const sliderVerticleCards = [
    {
      key: 1,
      imgurl: 'img/collab/print_and_posm.svg',
      alt: 'print_and_posm',
      title: 'Brief & Planning',
      desc: 'We understand your brief, your creative objectives, and your brand identity.',
    },
    {
      key: 2,
      imgurl: 'img/collab/distribution_optimisation.svg',
      alt: 'distribution_optimisation',
      title: 'Concept & Estimate',
      desc: 'Choose from unique creative concepts – complete with estimates and production timelines.',
    },
    {
      key: 3,
      imgurl: 'img/collab/print_and_posm.svg',
      alt: 'print_and_posm',
      title: 'Script & Story',
      desc: 'Our best creative team works on the copy and visualization for your next AI video.',
    },
    {
      key: 4,
      imgurl: 'img/collab/copy_of_interactive.svg',
      alt: 'copy_of_interactive',
      title: 'Prompting & Storyboards',
      desc: 'From expert AI-prompting to custom-designed storyboards, we begin crafting your Gen AI video.',
    },
    {
      key: 5,
      imgurl: 'img/collab/robotic_brand_ambassadors.svg',
      alt: 'robotic_brand_ambassadors',
      title: 'AI Production & Direction',
      desc: 'We use premium AI tools and dedicated experts for optimal video outcomes.',
    },
    {
      key: 6,
      imgurl: 'img/collab/tech_powered_experiences.svg',
      alt: 'tech_powered_experiences',
      title: 'Voice-over & Music',
      desc: 'Select premium voice-over and music to enhance your video’s impact.',
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

  const data = [
    {
      icon: '/img/explainer-video/end_to_end_services.svg',
      need: 'Services',
      others: 'Limited services',
      redBangle: 'End-to-end services',
    },
    {
      icon: '/img/explainer-video/premium_quality.svg',
      need: 'Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent, premium quality',
    },
    {
      icon: '/img/explainer-video/great_storytelling.svg',
      need: 'Industries',
      others: 'Limited industry exposure',
      redBangle: 'Storytelling across industries',
    },
    {
      icon: '/img/explainer-video/industry_knowledge.svg',
      need: 'Production Locations',
      others: 'Limited locations',
      redBangle: 'Crews across 100 countries',
    },
    {
      icon: '/img/explainer-video/any_genre_video.svg',
      need: 'Video Genres',
      others: 'Limited genres',
      redBangle: 'Any genre video',
    },
    {
      icon: '/img/explainer-video/any_format_video.svg',
      need: 'Video Formats',
      others: 'Limited formats',
      redBangle: 'Unlimited formats',
    },
    {
      icon: '/img/explainer-video/easy_feedback.svg',
      need: 'Video Feedback',
      others: 'Emails back and forth',
      redBangle: 'Cloud-based interactive reviews',
    },
    {
      icon: '/img/explainer-video/on_time_delivery.svg',
      need: 'Turnaround Time',
      others: 'They work at their speed',
      redBangle: 'We work at the speed you need',
    },
    {
      icon: '/img/explainer-video/video_versions.svg',
      need: 'Video Versioning',
      others: 'Limited versioning',
      redBangle: 'Limitless versioning',
    },
    {
      icon: '/img/explainer-video/professional_project_management.svg',
      need: 'Project Management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows, notifications',
    },
    {
      icon: '/img/explainer-video/flexible_turnaround_times.svg',
      need: 'Deadlines',
      others: 'You follow up with them',
      redBangle: 'We proactively plan, communicate',
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

  const genAIdesignFaq = [
    {
      key: 1,
      title: 'What types of Gen AI videos do you create?',
      content: (
        <>
          <div className="mb-5">
            We craft a wide range of AI-powered videos suited to communication
            needs and channels. These include:
          </div>
          <ul>
            <li className="mb-5">- Animated avatar video presentations</li>
            <li className="mb-5">- AI lip-sync videos</li>
            <li className="mb-5">- AI Video Explainers</li>
            <li className="mb-5">- Gen AI Video Commercials</li>
            <li className="mb-5">- Cinematic AI Videos</li>
            <li className="mb-5">- Brand mascot videos</li>
            <li className="mb-5">- AI Videos for Training</li>
            <li className="mb-5">- AI Videos for Social Media</li>
            <li className="mb-5">- And more!</li>
          </ul>
          <div className="mt-5">
            We help you choose the right AI video format and creative approach
            to build your brand awareness and drive engagement.
          </div>
        </>
      ),
    },
    {
      key: 2,
      title: 'How do you ensure that AI videos accurately reflect our brand?',
      content:
        'We work with your brand teams to align the AI video with your brand positioning, tone of voice, visual identity, and key messaging pillars. We reference your brand guidelines, audience personas, and communication strategy throughout the creative process. From colors and music to characters and motion graphics, we craft every element to look and feel like a natural extension of your brand.',
    },
    {
      key: 3,
      title: 'Do you follow a specific AI video creation process?',
      content: (
        <>
          <p className="mb-5">
            As an AI-first agency experienced in crafting AI-powered videos across industries, genres, and formats – we&apos;re always on the lookout to try something innovative on every new brief. This approach has helped us develop a tried-and-true process that delivers impactful Gen AI videos for borderless brands. 
          </p>
          <p className="mb-5">
            Our typical AI video workflow starts with a clear brief, followed by
            research, AI-first concepts, script, design, post-production, and
            reviews. But what&apos;s unique about how we do it is our
            proprietary platform that facilitates efficient cloud-based
            workflows and seamless collaboration across our teams and with you.
            Here&apos;s a quick run-through of how our platform helps you scale
            AI video assets:
          </p>
          <ul className="list-disc space-y-3 ml-5">
            <li className="mb-5">
              Your brief is loaded on our platform. This contains all the
              information you&apos;ve shared, everything we&apos;ve researched,
              and all the assets we need to work on. Everything is in one place.
            </li>
            <li className="mb-5">
              We propose one or more AI-first concepts that align with your
              brief, audience, tone, brand and industry. You choose what
              resonates most with your brand and communication needs.
            </li>
            <li className="mb-5">
              We schedule your project on our platform, setting milestones that
              work best for your requirements. Everyone on the project knows
              exactly when something is due to you, no follow-ups required.
            </li>
            <li className="mb-5">
              Our creative team gets going with their work, coming to you for
              reviews at the concept and design stages.
            </li>
            <li className="mb-5">
              Files, links, and updates are all on the cloud, so you are never
              left wondering what&apos;s next or how things are progressing.
            </li>
            <li className="mb-5">
              Once your AI video generation begins, outputs are uploaded to the
              platform where you use our interactive review feature to share
              frame-accurate feedback and iterate on AI-generated content- all
              without lengthy email chains or missed feedback. Additionally, all
              video drafts on the project are accessible to you on one
              dashboard, so you won&apos;t have to hunt for links to compare
              notes.
            </li>
            <li className="mb-5">
              Once the project is complete, your Gen AI videos are uploaded to
              our platform. Everything is neatly organised, downloadable,
              shareable, and ready for future repurposing.
            </li>
          </ul>
          <p className="mt-5">
            Our cloud-based platform-led workflow allows us to maintain creative
            excellence while delivering AI innovation at speed and scale. It
            also gives you an efficient and transparent experience from start to
            finish.
          </p>
        </>
      ),
    },
    {
      key: 4,
      title:
        'How do you make Gen AI videos that feel authentic and not robotic?',
      content: (
        <>
          The key to authentic AI videos lies in two things: the tools/
          technology you use and how you craft the narrative. We work closely
          with you to identify the right approach and shape your Gen AI videos
          that feel natural and human. We guide AI models to produce content
          that appears genuine and relatable, rather than mechanical or
          artificial. Shaping the story around real emotions, brand values, and
          audience needs with carefully crafted prompts. We also capture
          supporting elements and design branded graphics to enhance the
          AI-generated video.
        </>
      ),
    },
    {
      key: 5,
      title: 'What is the typical turnaround time for crafting a Gen AI video?',
      content:
        "Gen AI video turnaround times vary basis the style and duration. A simple AI avatar video created with a pre-designed template can typically be completed within  2 days, while an explainer video featuring 2D AI characters may require 10-20 days of AI production or post production.The end to end project process includes briefing and goal alignment, concept development, scripting, design, AI production, followed by post-production, which includes editing, music, subtitles, effects, and optimization. Our workflows give you enough time to share feedback and approvals at every key milestone. In case you have a set launch or campaign deadline, we'll plan backward from there to ensure everything's ready on time.",
    },
    {
      key: 6,
      title: 'Do you create Gen AI videos for campaigns and product launches?',
      content:
        'Yes, we create Gen AI videos tailored for campaigns and product launches. Whether it’s AI-powered explainers or cinematic AI-video content, we help you launch your product with a bang—boosting conversions, enhancing customer engagement, and ensuring your brand stands out. Our focus is on delivering high-quality, brand-aligned campaigns that differentiate your solutions and create market stickiness.',
    },
  ]

  const createTestimonialAIData = [
    {
      key: 0,
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
    {
      key: 1,
      quote:
        'Despite difficulties one might expect when shooting in 2 countries where various languages are spoken - we created these awesome videos.',
      name: 'MARC IRAWAN',
      designation: 'Founder',
      company: 'COLEARN',
      image: {
        srcSet: `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
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
      key: 3,
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
      key: 4,
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
          start: '30.6% 35%',
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

  return (
    <>
      <SEO
        title="GenAI Videos"
        description="GenAI Videos"
        url="https://www.makerrs.com/ai-video-agency"
        keywords="ai video creative agency, ai video creative services, gen ai video agency, ai video production services, best ai video agency, ai video production company for businesses"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full invisible pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px] md:!h-[377px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col relative md:top-8">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Get Creative</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4">
                  <span className="md:block hidden">AI Video</span>
                  <span className="md:hidden block">AI Video</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[80px]`}
                    ref={containerRef}
                  ></div>
                </div>

                <div>
                  <span>Services</span>
                </div>
              </h1>

              {/* Bullet Points */}
              <div className="mt-6 md:mt-8 heroMarquee relative md:bottom-[3.8rem]">
                <ul className="list-inside space-y-3 text-[16px] leading-[1.25] tracking-[-0.64px] font-opensans md:text-[24px] md:leading-[32px] md:tracking-[-0.24px] font-semibold">
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Custom GenAI videos for brands</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>End-to-end GenAI video production</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>AI Videos at scale</span>
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
                src="/videos_ai_production_banner.mp4"
                poster="/videos_ai_production_banner_thumbnail.png"
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
          className="w-full bottom-0 left-0 select-none md:aspect-[1920/1068] md:top-[47px] relative  md:origin-top mx-auto"
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
            src="/videos_ai_production_banner.mp4"
            poster="/videos_ai_production_banner_thumbnail.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-[48px] md:pb-0">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">
            Trusted AI Video Company
          </LineHeading>
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-[1200px] mx-auto w-full pl-6 md:px-6 ml-0 md:ml-5 md:ml-[2.8rem] transform transform -translate-x-[24px] sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-20">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statstyles.statline} [&:nth-child(3)]:md:pr-[13px] ${s.id === 3 ? 'md:!pr-[26px] md:!pl-6' : ''}`}
                key={s.id}
              >
                <div className={`${s.id === 3 ? 'ipad-mini-ml' : ''}`}>
                  <div
                    className={`lg:w-fit lg:mx-auto relative ${s.id === 0 ? 'md:!mr-[24px]' : ''} ${s.id === 1 ? 'md:!ml-[28px]' : ''} ${s.id === 2 ? 'md:!ml-[28px]' : ''} ${s.id === 3 ? 'md:-left-[29px]' : ''}`}
                  >
                    <div
                      className={`${s.id === 1 ? '!-ml-[8px] md:!-ml-[14px]' : ''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[7px]' : ''} ${s.id === 2 ? '!-ml-[4px] md:!-ml-[3px]' : ''} ${s.id === 3 ? '!-ml-[3px] md:!-ml-[7px]' : ''}`}
                    >
                      <RollupNumber {...s.countUpProps} />
                    </div>
                    <div
                      className={`text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett ${s.id === 2 ? 'md:ml-[3px] md:w-[160px]' : ''}`}
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
                How we craft Gen AI videos{' '}
                <br className="hidden md:inline-block" />
                for Brand Communications
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

      <section className={`overflow-hidden bg-white pt-[48px] pb-18 md:py-30 `}>
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

      <section className="bg-white pb-12 md:pb-20">
        <div className="container">
          <LineHeading className="mb-7 md:mb-10">
            Trusted by Global Brands
          </LineHeading>
          <div className="overflow-hidden md:min-h-[188px]">
            <Marquee duration={50}>
              <div className="flex items-center">
                {icons
                  .slice(0, icons.length / 2)
                  .map(({ name, id, ...rest }) => (
                    <div key={id} className="mx-6 md:mx-12">
                      <img
                        src={`/img/logos/${name}`}
                        loading="lazy"
                        alt=""
                        {...rest}
                      />
                    </div>
                  ))}
              </div>
            </Marquee>
            <div className="mt-0 md:mt-0"></div>
            <Marquee duration={50} direction={-1}>
              <div className="flex items-center">
                {icons.slice(icons.length / 2).map(({ name, id, ...rest }) => (
                  <div key={id} className="mx-6 md:mx-12">
                    <img
                      src={`/img/logos/${name}`}
                      loading="lazy"
                      alt=""
                      {...rest}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-15 overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            How do we create GenAI Videos
          </div>

          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full md:w-8/12 grid md:grid-cols-2 grid-cols-1 gap-6">
              {sliderVerticleCards.map(({ key, imgurl, alt, title, desc }) => (
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
        title={'Why Our Clients Trust Us'}
        className="py-18 md:py-30"
        testimonialData={createTestimonialAIData}
        type="semi"
      />

      <section className="py-18 md:pt-0 md:pb-30">
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
                data={genAIdesignFaq?.map((c) => ({
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
            src="/videos_ai_production_banner.mp4"
            className="w-full"
            width="1920"
            height="1068"
          ></video>
        </div>
      </VideoModal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(explainerVideoProductionSchema),
        }}
      ></script>
    </>
  )
}
export default AIvideoAgency
