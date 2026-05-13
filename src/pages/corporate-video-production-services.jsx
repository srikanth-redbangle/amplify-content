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
import Script from 'next/script'
import statstyles from '@/styles/sections/StatsSection.module.scss'
import { Accordion, Button } from '@/components/ui'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { corporateFaq } from '@/content/services'
import { GetUpdatesForm } from '@/components/shared/sections/GetUpdatesSection/GetUpdatesForm'
import styles from '@/styles/home.module.scss'
import { LineArrow } from '@/components/icons'
import { useRouter } from 'next/router'
import { corporateVideoProductionSchema } from '@/components/schema/corporate-video-production-services'
import statsStyles from '@/styles/sections/StatsSection.module.scss'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null,
}
const CorporateVideoLandPage = () => {
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
      text: <>corporate videos <br />produced </>,
    },
    {
      id: 1,
      countUpProps: {
        value: 60,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>global businesses <br />serviced</>,
    },
    {
      id: 2,
      countUpProps: {
        value: 1,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>global <br />filmmakers </>,
    },
    {
      id: 3,
      countUpProps: {
        value: 600,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>international <br />productions</>,
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: 'img/services/videos/icon7.svg',
      alt: 'creative_ideation',
      title: 'Great Video Concepts',
      desc: 'Work with a corporate video production agency that understands your communication goals and business context; gives you unique video concepts and helps you choose the best storytelling approach.',
    },
    {
      key: 2,
      imgurl: 'img/services/videos/icon3.svg',
      alt: 'design_collateral',
      title: 'Videos Across Formats',
      desc: 'Whether it’s a live-action corporate film, a premium 3D corporate video, or a mixed-format video — get corporate films, ESG films, PR videos, internal communication videos and more.',
    },
    {
      key: 3,
      imgurl: 'img/services/videos/icon14.svg',
      alt: 'brand_identity',
      title: 'Corporate Storytelling',
      desc: 'See the video concept of your choice transform into an amazing script, design and storyboard. From interview talking points to visualisation, motion graphics and background music—we sort the details for you.',
    },
    {
      key: 4,
      imgurl: 'img/services/videos/icon15.svg',
      alt: 'content_production',
      title: 'Global Film Production',
      desc: 'From location recces and studios to curated crews, make up and styling for your people. From one-camera interviews at your office to a series of shoots across locations - get scalable corporate film production.',
    },
    {
      key: 5,
      imgurl: 'img/services/videos/icon8.svg',
      alt: 'icon_2',
      title: 'Premium Post Production',
      desc: 'From editing, animation, sound design and voice overs to sound effects, VFX, CGI and colour grading – now you can get consistent quality across the post production process without breaking a sweat.',
    },
    {
      key: 6,
      imgurl: 'img/services/videos/icon17.svg',
      alt: 'digital',
      title: 'Limitless Versioning',
      desc: 'Are you making one film, but need it adapted for several platforms? Or to several languages? Trust our accurately-managed limitless versioning services for your business. Get translations, adaptations and more.',
    },
  ]

  const workData = [
    {
      slug: 'Infosys Europe Localisation',
      featuredImage: {
        src: '/img/corporate-video/infosys_europe_localisation.png',
      },
      title: 'Corporate Video for Europe region for a large IT firm',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092044365/6eb7300c7c?share=copy',
        },
        content:
          'As Infosys began a brand localisation drive in Europe, they needed to celebrate teams, offices and growth in the region. Here’s the inspiring corporate video made using archival assets.',
      },

      popUpTitle: 'Corporate Video for Europe Region',
      popUpPoints: [
        '01. Visualisation',
        '02. Graphic Design',
        '03. Editing',
        '04. Motion Graphics',
        '05. Voice Over',
        '06. Colouring',
        '07. Project Management',
      ],
      redText: 'Archival Footage-based',

      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092046382?share=copy',
          thumbnail: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
          title: 'Pre-IPO Corporate Film for a D2C Startup',
          duration: '03:10',
        },
        {
          videolink: 'https://vimeo.com/1031074650',
          thumbnail: '/img/corporate-video/wipro_australia.png',
          title: 'Australia-region Corporate Film for an IT Giant',
          duration: '01:10',
        },
        {
          videolink: 'https://vimeo.com/1092044663?share=copy',
          thumbnail: '/img/corporate-video/bagmane_corporate_film.png',
          title: 'Corporate Film for Real Estate Conglomorate',
          duration: '03:17',
        },
        {
          videolink: 'https://vimeo.com/1078429989',
          thumbnail: '/img/corporate-video/ge_aerospace.png',
          title: 'Premium Corporate Film for Aerospace Manufacturer',
          duration: '02:10',
        },
      ],
    },
    {
      slug: 'Honasa Pre-IPO Corporate Film',
      featuredImage: {
        src: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
      },
      title: 'Pre-IPO Corporate Film for a D2C Startup',
      company: {
        name: 'Honasa',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092046382?share=copy',
        },
        content:
          'In the lead-up to their public listing, Honasa went on a roadshow to meet a range of stakeholders. Our corporate video helped them pitch their growth story with a lot of heart and data.',
      },
      popUpTitle: 'Pre-IPO Corporate Film for D2C Startup, Honasa',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Multi-location Shoot',
        '06. Editing',
        '07. Motion Graphics',
        '08. Voice Over',
      ],

      redText: 'Live Action Corporate Film with Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1031074650',
          thumbnail: '/img/corporate-video/wipro_australia.png',
          title: 'Australia-region Corporate Film for an IT Giant',
          duration: '01:10',
        },
        {
          videolink: 'https://vimeo.com/1092044663?share=copy',
          thumbnail: '/img/corporate-video/bagmane_corporate_film.png',
          title: 'Corporate Film for Real Estate Conglomorate',
          duration: '03:17',
        },
        {
          videolink: 'https://vimeo.com/1078429989',
          thumbnail: '/img/corporate-video/ge_aerospace.png',
          title: 'Premium Corporate Film for Aerospace Manufacturer',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1031815235',
          thumbnail: '/img/corporate-video/infosys_andrea_hendricks.png',
          title: 'Corporate Video Featuring Global Leaders',
          duration: '01:28',
        },
      ],
    },
    {
      slug: 'Wipro Australia',
      featuredImage: {
        src: '/img/corporate-video/wipro_australia.png',
      },
      title: 'Australia-region Corporate Film for an IT Giant',
      company: {
        name: 'Wipro',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1031074650',
        },
        content:
          'Wipro Australia’s corporate film delves into the business unit’s profound impact and seamless integration in the land Down Under. It’s a testament to their local commitment as well as growth.',
      },
      popUpTitle: 'Australia-region Corporate Film for an IT Giant',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Stock asset curation',
        '05. Graphic Design',
        '06. Editing',
        '07. Motion Graphics',
        '08. Voice Over',
      ],

      redText: 'Stock Footage-based',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092044663?share=copy',
          thumbnail: '/img/corporate-video/bagmane_corporate_film.png',
          title: 'Corporate Film for Real Estate Conglomorate',
          duration: '03:17',
        },
        {
          videolink: 'https://vimeo.com/1078429989',
          thumbnail: '/img/corporate-video/ge_aerospace.png',
          title: 'Premium Corporate Film for Aerospace Manufacturer',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1031815235',
          thumbnail: '/img/corporate-video/infosys_andrea_hendricks.png',
          title: 'Corporate Video Featuring Global Leaders',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/1092045236?share=copy',
          thumbnail: '/img/corporate-video/stopak_corporate_film.png',
          title: 'Corporate Video for Packaging Manufacturer',
          duration: '01:34',
        },
      ],
    },
    {
      slug: 'Bagmane Corporate Film',
      featuredImage: {
        src: '/img/corporate-video/bagmane_corporate_film.png',
      },
      title: 'Corporate Film for Real Estate Conglomorate',
      company: {
        name: 'Bagmane',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092044663?share=copy',
        },
        content:
          'Bagmane plays host to over 60 Fortune 500 companies at state-of-the-art business parks across the country. Their first corporate film shares the history, legacy and essence of the group.',
      },
      popUpTitle: 'Corporate Film for Real Estate Conglomorate, Bagmane',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Multi-location Shoot',
        '06. Editing',
        '07. Motion Graphics',
        '08. Voice Over',
      ],

      redText: 'Live Action with Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1078429989',
          thumbnail: '/img/corporate-video/ge_aerospace.png',
          title: 'Premium Corporate Film for Aerospace Manufacturer',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1031815235',
          thumbnail: '/img/corporate-video/infosys_andrea_hendricks.png',
          title: 'Corporate Video Featuring Global Leaders',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/1092045236?share=copy',
          thumbnail: '/img/corporate-video/stopak_corporate_film.png',
          title: 'Corporate Video for Packaging Manufacturer',
          duration: '01:34',
        },
        {
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Videos for Vymo',
          duration: '10:18',
        },
      ],
    },
    {
      slug: 'GE Aerospace Brand film',
      featuredImage: {
        src: '/img/corporate-video/ge_aerospace.png',
      },
      title: 'Premium Corporate Film for Aerospace Manufacturer',
      company: {
        name: 'GE Aerospace',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1078429989',
        },
        content:
          'Our corporate film for GE Aerospace blends cinematic detail with scale. And original footage with rare archival material from GE’s global library, and heart-warming custom music.',
      },
      popUpTitle: 'Premium Corporate Film for Global Aerospace Manufacturer',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Multi-location Shoot',
        '06. Music composition',
        '07. Editing & Graphics',
        '08. Voice Over',
      ],
      redText: 'Premium Live Action, Archival Footage & Custom Music',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1031815235',
          thumbnail: '/img/corporate-video/infosys_andrea_hendricks.png',
          title: 'Corporate Video Featuring Global Leaders',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/1092045236?share=copy',
          thumbnail: '/img/corporate-video/stopak_corporate_film.png',
          title: 'Corporate Video for Packaging Manufacturer',
          duration: '01:34',
        },
        {
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Videos for Vymo',
          duration: '10:18',
        },
        {
          videolink: 'https://vimeo.com/1092044365/6eb7300c7c?share=copy',
          thumbnail: '/img/corporate-video/infosys_europe_localisation.png',
          title: 'Corporate Video for Europe region for a large IT firm',
          duration: '02:01',
        },
      ],
    },
    {
      slug: 'Infosys - Andrea Hendricks',
      featuredImage: {
        src: '/img/corporate-video/infosys_andrea_hendricks.png',
      },
      title: 'Corporate Video Featuring Global Leaders',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1031815235',
        },
        content:
          'When Infosys wanted to share a message on Digitization and Innovation with automotive clients in Germany and nearby countries, we brought in an amazing local crew to get the job done.',
      },
      popUpTitle: 'Corporate Video Featuring Global Leaders at Infosys',
      popUpPoints: [
        '01. Crew Curation',
        '02. Production',
        '03. Editing',
        '04. Colouring',
        '05. Translation',
        '06. Subtitles',
      ],

      redText: 'Live Action, International Production',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092045236?share=copy',
          thumbnail: '/img/corporate-video/stopak_corporate_film.png',
          title: 'Corporate Video for Packaging Manufacturer',
          duration: '01:34',
        },
        {
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Videos for Vymo',
          duration: '10:18',
        },
        {
          videolink: 'https://vimeo.com/1092044365/6eb7300c7c?share=copy',
          thumbnail: '/img/corporate-video/infosys_europe_localisation.png',
          title: 'Corporate Video for Europe region for a large IT firm',
          duration: '02:01',
        },
        {
          videolink: 'https://vimeo.com/1092046382?share=copy',
          thumbnail: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
          title: 'Pre-IPO Corporate Film for a D2C Startup',
          duration: '03:10',
        },
      ],
    },
    {
      slug: 'Stopak corporate film',
      featuredImage: {
        src: '/img/corporate-video/stopak_corporate_film.png',
      },
      title: 'Corporate Video for Packaging Manufacturer',
      company: {
        name: 'Stopak',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092045236?share=copy',
        },
        content:
          'When India’s leading packaging manufacturer wanted a corporate video, we conceptualised, scripted, filmed and crafted a corporate video that would impress their audience.',
      },
      popUpTitle: 'Corporate Video for Packaging Manufacture, Stopak',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Production',
        '06. Stock footage curation',
        '07. Editing & Graphics',
        '08. Music & Voice Over',
      ],

      redText: 'Live Action & Stock Footage',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Videos for Vymo',
          duration: '10:18',
        },
        {
          videolink: 'https://vimeo.com/1092044365/6eb7300c7c?share=copy',
          thumbnail: '/img/corporate-video/infosys_europe_localisation.png',
          title: 'Corporate Video for Europe region for a large IT firm',
          duration: '02:01',
        },
        {
          videolink: 'https://vimeo.com/1092046382?share=copy',
          thumbnail: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
          title: 'Pre-IPO Corporate Film for a D2C Startup',
          duration: '03:10',
        },
        {
          videolink: 'https://vimeo.com/1031074650',
          thumbnail: '/img/corporate-video/wipro_australia.png',
          title: 'Australia-region Corporate Film for an IT Giant',
          duration: '01:10',
        },
      ],
    },
    {
      slug: 'Gordon Ritter',
      featuredImage: {
        src: '/img/corporate-video/gordon_ritter.png',
      },
      title: 'Thought Leadership Videos for Vymo',
      company: {
        name: 'Vymo',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1078406512',
        },
        content:
          'When Vymo wanted to capture a conversation with Gordon Ritter at Emergence Capital on software trends – we proposed a unique thought leadership video format that would feature both.',
      },
      popUpTitle:
        'Thought Leadership Videos for Vymo, featuring their investor',
      popUpPoints: [
        '01. Visualisation',
        '02. Graphic Design',
        '03. Production',
        '04. Stock footage curation',
        '05. Stock Music Curation',
        '06. Editing ',
        '07. Motion Graphics',
        '08. Colouring',
      ],
      redText: 'Premium Live Action & Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092044365/6eb7300c7c?share=copy',
          thumbnail: '/img/corporate-video/infosys_europe_localisation.png',
          title: 'Corporate Video for Europe region for a large IT firm',
          duration: '02:01',
        },
        {
          videolink: 'https://vimeo.com/1092046382?share=copy',
          thumbnail: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
          title: 'Pre-IPO Corporate Film for a D2C Startup',
          duration: '03:10',
        },
        {
          videolink: 'https://vimeo.com/1031074650',
          thumbnail: '/img/corporate-video/wipro_australia.png',
          title: 'Australia-region Corporate Film for an IT Giant',
          duration: '01:10',
        },
        {
          videolink: 'https://vimeo.com/1092044663?share=copy',
          thumbnail: '/img/corporate-video/bagmane_corporate_film.png',
          title: 'Corporate Film for Real Estate Conglomorate',
          duration: '03:17',
        },
      ],
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
      need: 'Project management',
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
      key: 1,
      title: 'Brief & Context',
      desc: 'Send us your corporate video brief and business context. We’ll get started right away.',
    },
    {
      key: 2,
      title: 'Concepts & Estimates',
      desc: 'Choose from corporate video concepts and estimate options curated for your enterprise.',
    },
    {
      key: 3,
      title: 'Scripts & Design',
      desc: 'You’ll get the best creative teams working on the script and design for your next corporate film.',
    },
    {
      key: 4,
      title: 'Storyboards & Production',
      desc: 'Not sure how a script will turn out? No worries. We’ll create a photoboard or storyboard for you.',
    },
    {
      key: 5,
      title: 'Post-Production & Versioning',
      desc: 'Your video is in great hands with our post production experts. Editing, animation, versioning and more.',
    },
    {
      key: 6,
      title: 'Cloud-based Workflows',
      desc: 'Our cloud-based workflows and experienced producers turnaround films and videos on-time, every time.',
    },
  ]

  const testimonialsDefault = [
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
      key: 7,
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
        'It’s never easy creating great videos for a fast-growing business like ours. We struggled, till we came across Makerrs.',
      name: 'SUNIL SURESH',
      designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
      company: 'CAPILLARY TECHNOLOGIES',
      image: {
        srcSet:
          `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const FAQ = [
    {
      key: 0,
      title: 'Do you have a unique video creation process?',
      content: (
        <>
          <div className="mb-5">
            Over the years, we have scripted, designed and produced thousands of videos across several countries and industries. And while on every project we ask ourselves what we might do differently, and what we might do better – we also follow a tried-and-tested process that enables our clients to grow their brands and us to keep delivering on-point, on-quality. Our typical project workflow is something that starts with a clear brief, moves on to research, concepts, script, visualisation, design, production, post production, reviews and versioning. But what’s unique about how we do it, is our proprietary platform that facilitates efficient cloud-based workflows. Here’s a quick run through of how it helps: 
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
        'How do you ensure that the films and videos you create are engaging for our target audience?',
      content:
        'We don’t just spend time understanding your business and competitors to arrive at a great video idea for you, we are also tuned into creative trends, AI innovations, top content consumption platforms and marketing shifts happening around us. We track and continuously gather fresh knowledge and creative inspiration that keeps us delivering amazing and effective work for you. With every new creative idea we unleash and bring to life, we focus on what’s going to work for your business, brand, audience and mediums.',
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
        'As a creative agency and collaborative, we conceptualize and craft videos that work across a range of platforms such as YouTube, LinkedIn, WhatsApp, events and internal portals. Our goal is to ensure every piece of video content you commission connects with your audience, and drives engagement, no matter where it’s seen. Let’s say you are making a premium corporate film with us, we are able to also help you create versions and thumbnails of this film for various platforms.',
    },
    {
      key: 4,
      title: 'Do you create illustrated and animated videos?',
      content:
        'Yes, from 2D animation videos to 3D and mixed media—we script, visualise, illustrate, design, and animate a range of animated videos for corporate communications, PR, internal communications, employer branding, and more, take care of voice-overs in the accent suitable to your audience, find the right stock music or craft a custom-composed track, and handle sound effects, audio mixing, and mastering. Ours is an end-to-end process across illustrated and animated video styles.',
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
        },
        {
          width: '100%',

          y: 0,

          duration: 0.8,
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
    // const videoEl = document.getElementById('video-section') // video section

    if (!contactEl) return

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
    // observer.observe(videoEl)

    return () => {
      observer.unobserve(contactEl)
      // observer.unobserve(videoEl)
    }
  }, [])

  const router = useRouter()

  return (
    <>
      <SEO
        title="Great Corporate Films and Videos"
        description="Great Corporate Films and Videos"
        url={`https://www.makerrs.com${router.asPath}`}
        keywords="corporate promo videos,
            internal communication videos,
            corporate training videos,
            corporate event videos,
            corporate video agency,
            corporate video company,
            business video production,
            corporate promotional videos"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden md:!h-[690px]"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full invisible pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Corporate</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4">
                  <span> Videos</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[80px]`}
                    ref={containerRef}
                  ></div>
                  {/* <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/corporate_banner_mini_video.mp4"
                    poster="/corporate_cs_pop_thumbnail.png"
                    className="hidden lg:block rounded-[65px] h-[79px] max-w-[160px] lg:relative lg:bottom-[3px]"
                    height={79}
                    width={160}
                  ></video> */}
                </div>

                <div>
                  <span>for you</span>
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
                    <span>Professional corporate video production</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>Corporate & enterprise storytelling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src="/img/services/crew/success-check.svg"
                      alt="check"
                      height={24}
                      width={24}
                    />
                    <span>
                      Company profile videos, corporate{' '}
                      <br className="hidden md:block" />
                      history videos, internal videos & more
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
                src="/img/services/videos/corporate_hero.mp4"
                poster="/img/services/videos/corporate_hero.png"
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
          className="w-full bottom-[10px] left-0 select-none md:aspect-[1920/1068] relative  md:origin-top mx-auto"
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
            src="/img/services/videos/corporate_hero.mp4"
            poster="/img/services/videos/corporate_hero.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-18 md:pb-0">
        <div className="container pl-5 pr-5 lg:pl-0 lg:pr-0">
          <LineHeading className="mb-6 md:mb-7.5">
            Your Corporate Communication Video Experts
          </LineHeading>
         <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none ml-5 transform -translate-x-5 sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-12">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statsStyles.statline}`}
                key={s.id}
              >
                <div className={`${i == 2 && 'lg:ml-[20%]'} ${s.id === 3 ? 'ipad-mini-ml' : ''}`}>
                  <div className='lg:w-fit lg:mx-auto'>
                    <div className={`${s.id === 1 ? '!-ml-[4px] md:!-ml-[8px]' : ''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[7px]' : ''} ${s.id === 2 ? '!-ml-[2px] md:!-ml-[3px]' : ''} ${s.id === 3 ? '!-ml-[3px] md:!-ml-[5px]' : ''}`}>
                      <RollupNumber {...s.countUpProps} />
                    </div>
                    <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                      {s.text}
                    </div>
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
                Get High-Quality Corporate Storytelling
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[620px] mb-8 md:mb-[70px]">
                What makes us a great Corporate Video Agency
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

      <section className={`overflow-hidden pb-18 pt-18 md:pb-15 bg-rb-mercury`}>
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
          <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[911px]">
            Explore our Corporate Video Portfolio
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

      <section className="overflow-hidden   pt-4 ">
        <Marquee duration={50}>
          {[
            {
              id: 0,
              marqueeContent: 'Corporate Film',
            },
            {
              id: 1,
              marqueeContent: 'Leadership Video Shoot',
            },
            {
              id: 2,
              marqueeContent: 'Office Walkthrough Video',
            },
            {
              id: 3,
              marqueeContent: 'ESG & CSR Film',
            },
            {
              id: 4,
              marqueeContent: 'Thought Leadership Video',
            },
            {
              id: 5,
              marqueeContent: 'Interview Video',
            },
            {
              id: 6,
              marqueeContent: 'Public Relations Video',
            },
            {
              id: 7,
              marqueeContent: 'Corporate Event Video',
            },
            {
              id: 8,
              marqueeContent: 'Internal Video',
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

      <section className="py-18 md:py-10 overflow-hidden">
        <div className="container ">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            Our Corporate Video Production Process
          </div>

          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full md:w-8/12 grid md:grid-cols-2 grid-cols-1 gap-6">
              {processCards.map(({ key, imgurl, alt, title, desc }) => (
                <div
                  key={key}
                  className="bg-rb-service-grey py-6 md:py-8 px-5 md:px-6 rounded-md md:rounded-lg "
                >
                  <div className=" text-black">
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
            src="/img/services/videos/corporate_hero.mp4"
            poster="/img/services/videos/corporate_hero.png"
            className="w-full"
            width="1920"
            height="1068"
          ></video>
        </div>
      </VideoModal>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(corporateVideoProductionSchema)}
      </Script>
    </>
  )
}

export default CorporateVideoLandPage
