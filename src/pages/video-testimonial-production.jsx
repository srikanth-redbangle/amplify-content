import {
  LineHeading,
  Marquee,
  PlayCard,
  RollupNumber,
  SEO,
  Testimonials,
  VideoMetaModal,
  TrustedBrandsSection,
  VideoModal,
} from '@/components/shared'
import { useRef, useState, useEffect } from 'react'
import statstyles from '@/styles/sections/StatsSection.module.scss'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { Accordion, Button } from '@/components/ui'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { GetUpdatesForm } from '@/components/shared/sections/GetUpdatesSection/GetUpdatesForm'
import styles from '@/styles/home.module.scss'
import { LineArrow } from '@/components/icons'
import { useRouter } from 'next/router'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null,
}
const CaseStudyVideoProduction = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const insetRef = useRef()

  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const [modal, setModal] = useState(INIT_MODAL)
  const [isSticky, setSticky] = useState(false)
  const [hideStickyCTA, setHideStickyCTA] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideStickyCTA(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1, // trigger when 10% of footer is visible
      }
    )

    const footerEl = document.querySelector('.contact-section') // grab the global footer
    if (footerEl) {
      observer.observe(footerEl)
    }

    return () => {
      if (footerEl) {
        observer.unobserve(footerEl)
      }
    }
  }, [])

  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }
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
        value: 3,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>videos created </>,
    },
    {
      id: 1,
      countUpProps: {
        value: 30,
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
      text: <>global clients </>,
    },
    {
      id: 3,
      countUpProps: {
        value: 600,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>international shoots</>,
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: 'img/services/videos/icon14.svg',
      alt: 'Unique Concepts',
      title: 'Unique Concepts',
      desc: 'We start by understanding your business, solutions, clients and core USPs. We then craft concepts that integrate powerful proof points in your marketing case study videos.',
    },
    {
      key: 2,
      imgurl: 'img/services/videos/icon1.svg',
      alt: 'Data-rich Scripts',
      title: 'Data-rich Scripts',
      desc: 'We blend data and human insights to craft great case study scripts and visuals, helping you build trust with prospects and expand conversations with customers.',
    },
    {
      key: 3,
      imgurl: 'img/services/videos/icon3.svg',
      alt: 'Any Video Format',
      title: 'Any Video Format',
      desc: 'From interview-led client testimonial videos and customer success stories with rich infographics to animated case study videos and more - we support case study video production across formats.',
    },
    {
      key: 4,
      imgurl: 'img/services/videos/icon15.svg',
      alt: 'End-to-End Services',
      title: 'End-to-End Services',
      desc: 'From script, graphic design and project management to production, editing, animation, voice over, and versioning - we offer end-to-end case study video production services and always keep you informed.',
    },
    {
      key: 5,
      imgurl: 'img/services/videos/icon13.svg',
      alt: 'Global Production',
      title: 'Global Production',
      desc: 'Whether it’s a one-camera interview in New York or a multi-location production across India - from location coordination to studio setups, artists and makeup, we get brand case study videos done.',
    },
    {
      key: 6,
      imgurl: 'img/services/videos/icon16.svg',
      alt: 'Premium Post Production',
      title: 'Premium Post Production',
      desc: 'From editing, animation, sound design, and voice-overs to sound effects, VFX, and colour grading - you get consistent quality across the entire post-production process, without breaking a sweat.',
    },
    {
      key: 7,
      imgurl: 'img/services/videos/icon17.svg',
      alt: 'Limitless Versioning',
      title: 'Limitless Versioning',
      desc: 'Are you looking to make one video and need it adapted to several platforms or languages? Trust our accurately-managed limitless versioning services for your case study video requirements.',
    },
  ]

  const workData = [
    {
      slug: 'Kia e-Delivery Platform Case Study',
      featuredImage: {
        src: '/img/case-study-video/kia.png',
      },
      title: 'Premium Live Action Case Study X Kia',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
        },
        content:
          'A well-rounded visually impressive case study video on how Infosys transformed Kia America’s car delivery process. Filmed in Irvine, California, over two days. ',
      },

      popUpTitle: 'How Infosys Transformed Kia America’s Customer Experience',
      popUpPoints: [
        '01. Crew Curation',
        '02. Multi-location Shoot',
        '03. Graphic Design',
        '04. Video Structuring',
        '05. Editing',
        '06. Motion Graphics',
        '07. Curated Stock Music',
        '08. Colour Correction',
      ],
      redText: 'Premium Live Action Case Study',

      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092041941',
          thumbnail: '/img/case-study-video/stockd.png',
          title: 'Stockd, Wipro',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1098727880/e3f71a77f1',
          thumbnail: '/img/case-study-video/indeed_hichki.png',
          title: 'Integrated movie campaign case study (Indeed Hichki)',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/1098725688/e68027e196',
          thumbnail: '/img/case-study-video/bata_capillary.png',
          title: 'Bata Testimonial',
          duration: '03:23',
        },
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: '/img/case-study-video/kaavu.png',
          title: 'Consumer Testimonial for an F&B Experience',
          duration: '00:35',
        },
      ],
    },
    {
      slug: 'Wipro HIMSS (Stockd)',
      featuredImage: {
        src: '/img/case-study-video/stockd.png',
      },
      title: 'Motion Graphics Case Study for HIMSS',
      company: {
        name: 'Wipro',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092041941',
        },
        content:
          'IT giant Wipro had needed a whopping 24 case study videos in 90 days. They wanted to make a splash at HIMMS. And, we delivered! Check out one of the case study videos from the project.',
      },
      popUpTitle: 'Motion Graphics Case Study for Wipro’s booth at HIMSS, USA',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Storyboard',
        '05. Animation',
        '06. Voiceover',
        '07. Curated Stock Music',
        '08. Project Management',
      ],

      redText: 'Sophisticated Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1098727880/e3f71a77f1',
          thumbnail: '/img/case-study-video/indeed_hichki.png',
          title: 'Integrated movie campaign case study (Indeed Hichki)',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/1098725688/e68027e196',
          thumbnail: '/img/case-study-video/bata_capillary.png',
          title: 'Bata Testimonial',
          duration: '03:23',
        },
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: '/img/case-study-video/kaavu.png',
          title: 'Consumer Testimonial for an F&B Experience',
          duration: '00:35',
        },
        {
          videolink: 'https://vimeo.com/1098728642/35b24a6295',
          thumbnail: '/img/case-study-video/baggage_case_study.png',
          title: 'Infosys stock footage based case study (Skywise Airbus)',
          duration: '01:48',
        },
      ],
    },
    {
      slug: 'Indeed, Hichki Campaign Film',
      featuredImage: {
        src: '/img/case-study-video/indeed_hichki.png',
      },
      title: 'Integrated Movie Campaign Case Study Video',
      company: {
        name: 'Indeed',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1098727880/e3f71a77f1',
        },
        content:
          'Indeed did an integrated brand campaign with Bollywood movie, Hichki. Our case study video on the campaign reflects the impact with footage from the movie and various digital posts.',
      },
      popUpTitle: 'A Case Study on Indeed India’s Movie-integrated campaign',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualization',
        '04. Design & Storyboard',
        '05. Editing',
        '06. Motion Graphics',
        '07. Music Editing',
        '08. Project Management',
      ],

      redText: 'Campaign Case Study Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1098725688/e68027e196',
          thumbnail: '/img/case-study-video/bata_capillary.png',
          title: 'Bata Testimonial',
          duration: '03:23',
        },
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: '/img/case-study-video/kaavu.png',
          title: 'Consumer Testimonial for an F&B Experience',
          duration: '00:35',
        },
        {
          videolink: 'https://vimeo.com/1098728642/35b24a6295',
          thumbnail: '/img/case-study-video/baggage_case_study.png',
          title: 'Infosys stock footage based case study (Skywise Airbus)',
          duration: '01:48',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/case-study-video/hansel.png',
          title: 'Fictionalised Case Study for SAAS',
          duration: '01:30',
        },
      ],
    },
    {
      slug: 'Capillary x Bata Testimonial Video',
      featuredImage: {
        src: '/img/case-study-video/bata_capillary.png',
      },
      title: 'Customer Testimonial Video in Thailand',
      company: {
        name: 'Capillary Technologies',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1098725688/e68027e196',
        },
        content:
          'When the largest shoe retailer in Thailand wanted to push the limits on omnichannel retail, Capitally Technologies worked as a strategic partner and provided the CRM of the future.',
      },
      popUpTitle: 'Live Action Testimonial for Bata’s Journey with Capillary',
      popUpPoints: [
        '01. Treatment Referencing',
        '02. Local Crew Curation',
        '03. Shoot in Thailand',
        '04. Editing',
        '05. Graphic Design',
        '06. Motion Graphics',
        '07. Colour Correction',
        '08. Project Management',
      ],

      redText: 'Live Action Testimonial Video',
      relatedVideos: [
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: '/img/case-study-video/kaavu.png',
          title: 'Consumer Testimonial for an F&B Experience',
          duration: '00:35',
        },
        {
          videolink: 'https://vimeo.com/1098728642/35b24a6295',
          thumbnail: '/img/case-study-video/baggage_case_study.png',
          title: 'Infosys stock footage based case study (Skywise Airbus)',
          duration: '01:48',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/case-study-video/hansel.png',
          title: 'Fictionalised Case Study for SAAS',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/case-study-video/ai-first-employee.png',
          title: 'Collage-style case study video',
          duration: '01:20',
        },
      ],
    },
    {
      slug: 'Kaavu',
      featuredImage: {
        src: '/img/case-study-video/kaavu.png',
      },
      title: 'Consumer Testimonial for an F&B Experience',
      company: {
        name: 'Kaavu',
      },
      video: {
        workDetails: {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
        },
        content:
          'When Kaavu opened its spaces designed for friends and families to hang and relax, we crafted testimonial-style videos to launch the brand on social media.',
      },
      popUpTitle: 'Fun and warm testimonial video for a great F&B experience',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Casting',
        '06. Video Production',
        '07. Editing',
        '08. Motion Graphics',
        '09. Voice Over',
      ],

      redText: 'Consumer Video Testimonial',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1098728642/35b24a6295',
          thumbnail: '/img/case-study-video/baggage_case_study.png',
          title: 'Infosys stock footage based case study (Skywise Airbus)',
          duration: '01:48',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/case-study-video/hansel.png',
          title: 'Fictionalised Case Study for SAAS',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/case-study-video/ai-first-employee.png',
          title: 'Collage-style case study video',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
          thumbnail: '/img/case-study-video/kia.png',
          title: 'Kia America',
          duration: '02:43',
        },
      ],
    },
    {
      slug: 'Baggage Case Study',
      featuredImage: {
        src: '/img/case-study-video/baggage_case_study.png',
      },
      title: 'Stock-footage Case Study for IT Consulting',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1098728642/35b24a6295',
        },
        content:
          'When Infosys created a breakthrough solution for baggage handling in a North American airline, we made a fitting case study video that would win them more customers.',
      },
      popUpTitle: 'Software solution for international baggage handling',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Storyboard',
        '06. Editing',
        '07. Motion Graphics',
        '08. Voice Over',
      ],

      redText: 'Stock-Footage-Based Case Study',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/case-study-video/hansel.png',
          title: 'Fictionalised Case Study for SAAS',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/case-study-video/ai-first-employee.png',
          title: 'Collage-style case study video',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
          thumbnail: '/img/case-study-video/kia.png',
          title: 'Kia America',
          duration: '02:43',
        },
        {
          videolink: 'https://vimeo.com/1092041941',
          thumbnail: '/img/case-study-video/stockd.png',
          title: 'Stockd, Wipro',
          duration: '01:50',
        },
      ],
    },
    {
      slug: 'Hansel',
      featuredImage: {
        src: '/img/case-study-video/hansel.png',
      },
      title: 'Fictionalised Case Study for SAAS',
      company: {
        name: 'Hansel.io',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/867141400?share=copy',
        },
        content:
          'How we communicated complex information using a simple, human-centric story. Here’s our fictionalised case study explainer for Hansel - a SAAS product for context aware A/B testing.',
      },
      popUpTitle: 'Live Action Case-study Video on user drop-off management',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Custom UI Graphics',
        '04. Fictitious Brand',
        '05. Casting & Styling',
        '06. Production',
        '07. Post Production',
        '08. Versioning',
      ],

      redText: 'Fictionalised Case Study for SAAS',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/case-study-video/ai-first-employee.png',
          title: 'Collage-style case study video',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
          thumbnail: '/img/case-study-video/kia.png',
          title: 'Kia America',
          duration: '02:43',
        },
        {
          videolink: 'https://vimeo.com/1092041941',
          thumbnail: '/img/case-study-video/stockd.png',
          title: 'Stockd, Wipro',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1098727880/e3f71a77f1',
          thumbnail: '/img/case-study-video/indeed_hichki.png',
          title: 'Integrated movie campaign case study (Indeed Hichki)',
          duration: '02:21',
        },
      ],
    },
    {
      slug: 'AI-first Employees',
      featuredImage: {
        src: '/img/case-study-video/ai-first-employee.png',
      },
      title: 'Collage-style Video Case Study',
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
      popUpTitle: 'AI-first solutions presented through employee voices',
      popUpPoints: [
        '01. Script',
        '02. Graphic Design',
        '03. Storyboard',
        '04. Motion Graphics',
        '05. Voice Over',
        '06. Music & SFX',
        '07. Video Thumbnail',
        '08. Project Management',
      ],

      redText: 'Collage-style video case study',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
          thumbnail: '/img/case-study-video/kia.png',
          title: 'Kia America',
          duration: '02:43',
        },
        {
          videolink: 'https://vimeo.com/1092041941',
          thumbnail: '/img/case-study-video/stockd.png',
          title: 'Stockd, Wipro',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1098727880/e3f71a77f1',
          thumbnail: '/img/case-study-video/indeed_hichki.png',
          title: 'Integrated movie campaign case study (Indeed Hichki)',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/1098725688/e68027e196',
          thumbnail: '/img/case-study-video/bata_capillary.png',
          title: 'Bata Testimonial',
          duration: '03:23',
        },
      ],
    },
  ]

  const data = [
    {
      icon: '/img/explainer-video/end_to_end_services.svg',
      need: 'Services',
      others: 'Limited services',
      redBangle: 'End to end services',
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

  const processCards = [
    {
      key: '1',
      title: 'Brief & Background',
      desc: 'Share your video brief and data points, and we’ll do our research on your brand and competition.',
    },
    {
      key: '2',
      title: 'Scripts & Storytelling',
      desc: 'From voiceovers to interview testimonials - we craft scripts with data and creative nuance.',
    },
    {
      key: '3',
      title: 'Creative Visualization',
      desc: 'B-roll visualization, text graphics, custom UI screen design, and production sets crafted for you.',
    },
    {
      key: '4',
      title: 'Filming & Direction',
      desc: 'Professional directors, producers, and on-ground crews that manage the whole experience for your client.',
    },
    {
      key: '5',
      title: 'Post-Production & Motion',
      desc: 'We edit, animate, add voiceovers, and more, and review with you. We also offer limitless versioning.',
    },
    {
      key: '6',
      title: 'On-time Delivery',
      desc: 'Your case study videos will be right on time with our cloud-based workflows and experienced teams.',
    },
  ]

  const testimonialsDefault = [
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

  const FAQ = [
    {
      key: 0,
      title: 'Do you follow a specific case study video creation process?',
      content: (
        <>
          <div className="mb-5">
            As experts who have produced hundreds of case study videos across industries, geographies and video formats - with every new brief, we’re always on the lookout to try something new. This has helped us come up with a tried-and-tested process that enables us to deliver impactful case study videos for your brand. Our typical workflow starts with a clear brief, followed by research, concepts, script, design, production, post-production, reviews, and versioning. But what’s unique about how we do it, is our proprietary platform that facilitates efficient cloud-based workflows. Here’s a quick run-through of how it helps:
          </div>
          <ul>
            <li className="mb-5">
              - Your brief is loaded on our platform. This contains all the
              information you&apos;ve shared, everything we&apos;ve dug up, and
              all the creative assets we need to work on. Everything is in one
              place.
            </li>
            <li className="mb-5">
              - We use rate cards, add-ons, and an efficient costing tool on our
              platform to speed up the pricing and contract process for you.
            </li>
            <li className="mb-5">
              - We propose a narrative structure with one or more creative
              approaches that align with your industry, audience, tone, and
              brand identity. You can choose what resonates most with your brand
              and marketing needs.
            </li>
            <li className="mb-5">
              - Our project managers draft the most optimal project schedule on
              our platform, setting milestones that work best for your
              requirements. Everyone on the project knows exactly when something
              is due to you, no follow-ups required.
            </li>
            <li className="mb-5">
              - The creative team gets going with their work, coming to you for
              reviews at the script and storyboard, or design stages.
            </li>
            <li className="mb-5">
              - Our producers coordinate all logistics - scheduling interviews,
              sharing prep material, confirming availability, and curating and
              managing professional on-ground crews.
            </li>
            <li className="mb-5">
              - Files, links, and updates are all on the cloud, so you and your
              colleagues are never left wondering what&apos;s next or how things
              are progressing.
            </li>
            <li className="mb-5">
              - Once the post-production team gets going with their work, video
              drafts are uploaded directly to the platform where you use our
              interactive review feature to share frame-accurate comments and
              respond to our creative suggestions - all without lengthy email
              chains or missed feedback. Additionally, all video drafts on the
              project are accessible to you on one dashboard, so you won’t have
              to hunt for links to compare notes.
            </li>
            <li>
              - Once the project is complete, your video assets are uploaded to
              our platform. Everything is neatly organised, downloadable, and
              shareable with colleagues and partners, and ready for repurposing
              in the future.
            </li>
          </ul>
          <div className="mt-5">
            Our cloud-based platform-led workflow allows us to maintain creative
            excellence while delivering at speed and scale. It also gives you an
            efficient and transparent experience from start to finish.
          </div>
        </>
      ),
    },
    {
      key: 1,
      title:
        'How do you ensure that the testimonial video made for us reflects our brand?',
      content:
        'We always request your brand guidelines at the start of the project and seek an understanding of your business, products, and solutions. This includes guidelines around tone of voice, visual styles, colors, fonts, logo usage, and reading material on your offerings. Our creative teams refer to these throughout the duration of the project to maintain consistency. We also align voiceover tone, music, subtitles, and animation style with your overall brand personality, message, and audience. The final result is a case study video that doesn’t just tell a successful and impressive story - it also feels unmistakably yours, wherever it’s posted.',
    },
    {
      key: 2,
      title:
        'What is the typical timeline for case study videos or testimonial videos?',
      content:
        'Timelines can vary based on the format, complexity, and number of stakeholders involved. That said, our typical end-to-end timeline ranges anywhere between 1 to 6 weeks for a single video, depending on the level of complexity of the format and style. This timeline includes scripting, production, editing, animation, voice over, and reviews with you.',
    },
    {
      key: 3,
      title:
        'Can you create a series of case studies or craft a creative campaign for lead generation?',
      content:
        'Yes, we frequently work with brands looking to create a suite of case study videos across geographies, products/services, or verticals. In such cases, we establish a visual and narrative framework upfront that ensures consistency, while allowing each video to reflect the unique customer and outcome. We also set up scalable production plans, centralised asset sharing, and a review process that’s easy to manage with colleagues and with client-side stakeholders. Whether you need three videos or fifteen, no matter how many locations, our professional processes help you roll out case study videos efficiently, without compromising on quality. We also work on projects where we design complete creative campaigns for lead generation, which include case study videos. This involves a unique, central campaign idea, designing a complete campaign plan, and supporting you with creatives required across the campaign, be they well-constructed webpages, LinkedIn banners, or videos.',
    },
    {
      key: 4,
      title: 'What kind of formats do you offer for case study videos?',
      content: (
        <>
          <div className="mb-5">
            We offer a range of case study video formats to suit different
            storytelling styles, platforms, and budgets. These include:
          </div>
          <ul>
            <li className="mb-5">- Live-action interview-led videos</li>
            <li className="mb-5">- Voiceover-led case study videos</li>
            <li className="mb-5">- Documentary-style case study videos</li>
            <li className="mb-5">- Stock-footage based case study videos</li>
            <li className="mb-5">- Animated case study videos</li>
            <li>- And, mixed format case study videos</li>
          </ul>
          <div className="mt-5">
            We help you select the right genre and format or a combination of
            formats, based on your audience, messaging goals, and preferred
            channels (e.g., LinkedIn, YouTube, internal portals, and sales
            decks). We also support with promos or teasers, language and
            vertical adapts.
          </div>
        </>
      ),
    },
    {
      key: 5,
      title: 'What kind of brands benefit from case study videos?',
      content:
        'Whether you’re a manufacturer, a consulting business, a pharmaceutical company, a logistics firm or an energy business - your marketing funnel needs case study videos to attract prospects and expand conversations with customers. A well-told and impactful case study video helps the world see your success stories and adds to your brand’s credibility.',
    },
  ]

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
          start: '30% 35%',
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
          bottom: '25px',
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
        title="Case Study Video Production"
        description="Case Study Video Production"
        url={`https://www.makerrs.com${router.asPath}`}
        keywords="case study videos, testimonial video production, client success story videos, testimonial videos, success story videos, client testimonial videos, customer case studies"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />

        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px]  uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Case Study</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4">
                  <span className="md:block hidden">videos</span>
                  <span className="md:hidden block">videos that</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[79px]`}
                    ref={containerRef}
                  ></div>
                </div>

                <div>
                  <span className="md:block hidden">that convert</span>
                  <span className="md:hidden block">convert</span>
                </div>
              </h1>

              <div className="mt-6 md:mt-8 heroMarquee">
                <ul className="list-inside space-y-3 text-[16px] leading-[1.25] tracking-[-0.64px] font-opensans md:text-[24px] md:leading-[32px] md:tracking-[-0.24px] font-semibold">
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>End-to-end video case study creation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Case study videos across formats</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Trusted by Fortune 500 brands</span>
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
                src="/img/services/videos/hero.mp4"
                poster="/img/services/videos/hero.png"
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
          className="w-full bottom-[25px] left-0 select-none md:aspect-[1920/1068] relative  md:origin-top mx-auto"
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
            src="/img/services/videos/hero.mp4"
            poster="/img/services/videos/hero.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-18 md:pb-0">
        <div className="container pl-5 pr-5 lg:pl-0 lg:pr-0">
          <LineHeading className="mb-6 md:mb-7.5">
            Global Marketing Case Study Video Agency
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
                      ? 'md:ml-0 md:mr-[clamp(20px,6vw,120px)]'
                      : 'md:mr-[clamp(20px,6vw,120px)] md:ml-[clamp(30px,7vw,80px)]'
                  }`}
                >
                  <RollupNumber
                    {...s.countUpProps}
                    {...s.countUpProps}
                    className={`${
                      s.countUpProps.value === 15 ? '-ml-3' : '-ml-[6px]'
                    } ${s.id === 0 ? 'md:!-ml-[8px]' : ''}  ${s.id === 1 ? 'md:-ml-[13px]' : ''} ${
                      s.id === 2 ? 'md:-ml-[6px] -ml-[5px]' : ''
                    } ${s.id === 3 ? 'md:-ml-[6px] -ml-[3px]' : ''} `}
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
                The Makerrs Advantage
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[720px] mb-8 md:mb-[70px]">
                Get case study videos that drive growth for your brand
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
            Explore our Case Study Video Portfolio
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
              marqueeContent: 'Testimonial Video Production',
            },
            {
              id: 1,
              marqueeContent: 'Animated Case Study Videos',
            },
            {
              id: 2,
              marqueeContent: 'Customer Case Studies',
            },
            {
              id: 3,
              marqueeContent: '90-Second Hero Case Studies',
            },
            {
              id: 4,
              marqueeContent: 'Product-Led Client Stories',
            },
            {
              id: 5,
              marqueeContent: 'Global Client Success Story Videos',
            },
            {
              id: 5,
              marqueeContent: 'CSR Case Study Videos',
            },
            {
              id: 5,
              marqueeContent: 'ESG Case Study Videos',
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

      {/* <GetUpdates /> */}

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

      <section className="bg-white pb-0 md:pb-20">
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

      {/* <TrustedBrandsSection className="bg-white pb-12 md:pb-20" /> */}

      <section className="py-18 md:py-10 overflow-hidden">
        <div className="container ">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            How we craft great case study videos
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
                  srcSet="img/collab/global-collaborators.webp"
                  media="(min-width:768px)"
                />
                <img
                  className="overflow-hidden object-cover"
                  src="img/collab/global-collaborators.webp"
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
        title="Trusted by global brands"
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
            src="/img/services/videos/hero.mp4"
            poster="/img/services/videos/hero.png"
            className="w-full"
            width="1920"
            height="1068"
          ></video>
        </div>
      </VideoModal>
    </>
  )
}

export default CaseStudyVideoProduction
