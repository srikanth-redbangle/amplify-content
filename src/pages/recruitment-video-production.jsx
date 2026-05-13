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
import { ScheduleCallButton } from '@/components/shared/ScheduleCallButton'
import { useRef, useState, useEffect } from 'react'
import statstyles from '@/styles/sections/StatsSection.module.scss'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { Accordion, Button } from '@/components/ui'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RecruitmentVideoFaq } from '@/content/services'
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
const RecruitmentVideoProduction = () => {
  const heroSection = useRef()
  const containerRef = useRef()
  const insetRef = useRef()

  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const [modal, setModal] = useState(INIT_MODAL)
  const [isSticky, setSticky] = useState(false)
  const [hideStickyCTA, setHideStickyCTA] = useState(false)
    const testimonialRecruiterData = [
    {
    key: 0,
    quote:
      'We are delighted to team up with Makerrs. The video showcases the ability of the team at Makerrs to deliver a very compelling case for our innovative work, and to capture the hearts and minds of our audience.',
    name: 'ALINA PATRAHAU',
    designation: 'FOUNDER',
    company: 'DARUIESTE ARIPI',
    image: {
      srcSet:
        `/img/testimonials/alina-patrahau.jpg 533w, /img/testimonials/alina-patrahau.jpg 1066w`,
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
      srcSet:
        `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
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
      srcSet:
        `/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w`,
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
      srcSet:
        `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
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
      srcSet:
        `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  
  ]

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
      text: <>videos <br /> created </>,
    },
    {
      id: 1,
      countUpProps: {
        value: 15,
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
      text: <>global <br /> clients </>,
    },
    {
      id: 3,
      countUpProps: {
        value: 600,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: <>international video shoots</>,
    },
  ]

  const sliderCards = [
    {
      key: 1,
      imgurl: '/platform_content_new.svg',
      alt: 'Strategic Storytelling',
      title: 'Strategic Storytelling',
      desc: 'We begin by understanding your employer brand, hiring objectives, target talent profiles, and Employee Value Proposition. We translate these into concepts and scripts that make for great conversation starters.',
    },
    {
      key: 2,
      imgurl: '/interdisciplinary.svg',
      alt: 'Across Messaging Needs',
      title: 'Across Messaging Needs',
      desc: 'Whether it’s positioning your employer brand, introducing your culture, celebrating occasions such as Women’s Day and Pride Month, or a great hiring video - we support you across your communication needs.',
    },
    {
      key: 3,
      imgurl: '/scalable_execution.svg',
      alt: 'Videos At Scale',
      title: 'Videos At Scale',
      desc: 'Be it a culture video filmed across 3 cities, 20 employee testimonial videos across 5 continents or 30 animated employee tutorial videos - our processes and teams seamlessly scale video production for your brand.',
    },
    {
      key: 4,
      imgurl: '/brand_content_strategy_new.svg',
      alt: 'End-to-End Projects',
      title: 'End-to-End Projects',
      desc: 'From script to video, we handle it all. Research, scripts, graphic design, interviews, location scouting and permissions, production, editing, animation, colouring, and end-to-end professional project management.',
    },
    {
      key: 5,
      imgurl: '/design_collateral_new.svg',
      alt: 'Any Format',
      title: 'Any Format',
      desc: 'From campus hiring videos filmed at your office, employee testimonial videos filmed in a studio or outdoors, and stock footage-based videos to animated videos - we create videos across formats.',
    },
    {
      key: 6,
      imgurl: '/brand_environment.svg',
      alt: 'Every Audience',
      title: 'Every Audience',
      desc: 'We deliver videos for every platform and event you choose. Be it offline events, on-campus screens, branded career webpages, employee apps, YouTube, LinkedIn, Instagram, or other.',
    },
  ]

  const workData = [
    {
      slug: 'Infosys Global Leaders: Ralf Gehrig',
      featuredImage: {
        src: '/img/recruitment-video/ralf.png',
      },
      title: 'Recruitment Video for Europe Region',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1030711146',
        },
        content:
          'When Infosys began localising its employer brand across the UK and Europe, we made a series of inspiring videos featuring its leaders from the region.',
      },

      popUpTitle: 'Ralf Gehrig on Growth & Culture at Infosys, Europe',
      popUpPoints: [
        '01. Pre-interviews',
        '02. Interview Cues',
        '03. Visualization',
        '04. Crew Curation',
        '05. Production',
        '06. Editing',
        '07. Curated Stock Music',
        '08. Color Grading',
      ],
      redText: 'Recruitment Video for Europe',

      relatedVideos: [
        {
          videolink: 'https://vimeo.com/787820271',
          thumbnail: '/img/recruitment-video/treebo.png',
          title: 'Premium Live Action Recruitment Film',
          duration: '02:55',
        },
        {
          videolink: 'https://vimeo.com/1102448563',
          thumbnail: '/img/recruitment-video/cactus.png',
          title: 'Motion Graphics Hiring Video for Cactus',
          duration: '00:47',
        },
        {
          videolink: 'https://vimeo.com/868489633',
          thumbnail: '/img/recruitment-video/career_site.png',
          title: 'Career Portal Demo Video for Global Hiring',
          duration: '02:34',
        },
        {
          videolink: 'https://vimeo.com/1031069755',
          thumbnail: '/img/recruitment-video/colearn.png',
          title: 'Live Action Video for a Hiring Campaign',
          duration: '02:10',
        },
      ],
    },
    {
      slug: 'Hotel Superhero Recruitment  Film',
      featuredImage: {
        src: '/img/recruitment-video/treebo.png',
      },
      title: 'Premium Live Action Recruitment Film',
      company: {
        name: 'Treebo Hotels',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/787820271',
        },
        content:
          'When a tech-enabled hotel chain took a leap to build a SaaS platform - they needed more tech chops. Who better to feature in the hiring video than the cool founders of Hotel Superhero!',
      },
      popUpTitle: 'Hotel Superhero – A Scalable SaaS Built by Hoteliers',
      popUpPoints: [
        '01. Concept',
        '02. Script Cues',
        '03. Visualisation',
        '04. Graphic Design',
        '05. Production',
        '06. Editing',
        '07. Motion Graphics',
        '08. Stock Music Curation',
      ],

      redText: 'Premium Live Action Recruitment Film',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1102448563',
          thumbnail: '/img/recruitment-video/cactus.png',
          title: 'Motion Graphics Hiring Video for Cactus',
          duration: '00:47',
        },
        {
          videolink: 'https://vimeo.com/868489633',
          thumbnail: '/img/recruitment-video/career_site.png',
          title: 'Career Portal Demo Video for Global Hiring',
          duration: '02:34',
        },
        {
          videolink: 'https://vimeo.com/1031069755',
          thumbnail: '/img/recruitment-video/colearn.png',
          title: 'Live Action Video for a Hiring Campaign',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1039988986',
          thumbnail: '/img/recruitment-video/shanon_hart.png',
          title: 'Premium Employee Testimonial Videos',
          duration: '01:00',
        },
      ],
    },
    {
      slug: 'Top Jobs at Cactus',
      featuredImage: {
        src: '/img/recruitment-video/cactus.png',
      },
      title: 'Motion Graphics Hiring Video for Cactus',
      company: {
        name: 'Indeed',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1102448563',
        },
        content:
          'An energetic hiring video for a business set on growth. Made with a good dose of motion graphics, b-roll footage, and a confident voice over. Made for Indeed’s ‘Top Jobs’ video series.',
      },
      popUpTitle: 'Top Jobs, culture and more at Cactus India',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Visualization',
        '04. Graphic Design',
        '05. Production',
        '06. Editing',
        '07. Voice-Over',
        '08. Motion Graphics',
      ],

      redText: 'Motion Graphics Hiring Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/868489633',
          thumbnail: '/img/recruitment-video/career_site.png',
          title: 'Career Portal Demo Video for Global Hiring',
          duration: '02:34',
        },
        {
          videolink: 'https://vimeo.com/1031069755',
          thumbnail: '/img/recruitment-video/colearn.png',
          title: 'Live Action Video for a Hiring Campaign',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1039988986',
          thumbnail: '/img/recruitment-video/shanon_hart.png',
          title: 'Premium Employee Testimonial Videos',
          duration: '01:00',
        },
        {
          videolink: 'https://vimeo.com/787820894',
          thumbnail: '/img/recruitment-video/darwinbox.png',
          title: 'Fun Recruitment Video for SAAS Startup',
          duration: '02:47',
        },
      ],
    },
    {
      slug: 'Infosys Career Site Walkthrough',
      featuredImage: {
        src: '/img/recruitment-video/career_site.png',
      },
      title: 'Career Portal Demo Video for Global Hiring',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/868489633',
        },
        content:
          'When Infosys ran a global recruitment campaign, it didn’t just make it easy for people to apply but also wanted to demonstrate the simple process. And so, we made this cool demo video.',
      },
      popUpTitle: 'Career Portal Demo Video for a Global Hiring Campaign',
      popUpPoints: [
        '01. Script',
        '02. Design',
        '03. Custom Storyboard',
        '04. Visualisation',
        '05. Voice-Over',
        '06. Motion Graphics',
        '07. UI Animation',
        '08. Curated Stock Music',
      ],

      redText: 'Custom 2D Animation Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1031069755',
          thumbnail: '/img/recruitment-video/colearn.png',
          title: 'Live Action Video for a Hiring Campaign',
          duration: '02:10',
        },
        {
          videolink: 'https://vimeo.com/1039988986',
          thumbnail: '/img/recruitment-video/shanon_hart.png',
          title: 'Premium Employee Testimonial Videos',
          duration: '01:00',
        },
        {
          videolink: 'https://vimeo.com/787820894',
          thumbnail: '/img/recruitment-video/darwinbox.png',
          title: 'Fun Recruitment Video for SAAS Startup',
          duration: '02:47',
        },
        {
          videolink: 'https://vimeo.com/896417275/0ef0c5e67d',
          thumbnail: '/img/recruitment-video/thoughtworks.png',
          title: 'Live Action Campus Hiring Video',
          duration: '02:25',
        },
      ],
    },
    {
      slug: 'CoLearn Teacher’s Campaign- Yuna’s Story',
      featuredImage: {
        src: '/img/recruitment-video/colearn.png',
      },
      title: 'Live Action Video for a Hiring Campaign',
      company: {
        name: 'CoLearn',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1031069755',
        },
        content:
          'When CoLearn wanted to hire remote STEM educators across South-East Asia, we studied their business, USPs and benefits to teachers to craft hiring videos full of heart.',
      },
      popUpTitle: 'Helping CoLearn hire STEM educators across South-East Asia',
      popUpPoints: [
        '01. Pre-interviews',
        '02. Script & Cues',
        '03. Visualization',
        '04. Multilingual Coordination',
        '05. Filming & Interviews',
        '06. Editing',
        '07. Colour Grading',
        '08. Subtitles',
      ],

      redText: 'Live-Action Campaign Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1039988986',
          thumbnail: '/img/recruitment-video/shanon_hart.png',
          title: 'Premium Employee Testimonial Videos',
          duration: '01:00',
        },
        {
          videolink: 'https://vimeo.com/787820894',
          thumbnail: '/img/recruitment-video/darwinbox.png',
          title: 'Fun Recruitment Video for SAAS Startup',
          duration: '02:47',
        },
        {
          videolink: 'https://vimeo.com/896417275/0ef0c5e67d',
          thumbnail: '/img/recruitment-video/thoughtworks.png',
          title: 'Live Action Campus Hiring Video',
          duration: '02:25',
        },
        {
          videolink: 'https://vimeo.com/1102449047',
          thumbnail: '/img/recruitment-video/meet_your_recruiter.png',
          title: 'Meet the recruiters - A video series',
          duration: '01:28',
        },
      ],
    },
    {
      slug: 'Infosys Global Leaders Series - Shannon Hart',
      featuredImage: {
        src: '/img/recruitment-video/shanon_hart.png',
      },
      title: 'Premium Employee Testimonial Videos',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1039988986',
        },
        content:
          'Shannon’s testimonial for Infosys was one of 35 videos crafted in 45 days, across 5 continents – all with great quality consistency, careful people curation, honest conversations.',
      },
      popUpTitle: 'Shannon Hart’s honest testimonial on her career at Infosys',
      popUpPoints: [
        '01. Pre-interviews',
        '02. Scripts & Cues',
        '03. Design & Visuals',
        '04. Local Video Crew',
        '05. Editing',
        '06. Curated Stock Music',
        '07. Graphic Design',
        '08. Color Grading',
      ],

      redText: 'Employee Testimonial Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/787820894',
          thumbnail: '/img/recruitment-video/darwinbox.png',
          title: 'Fun Recruitment Video for SAAS Startup',
          duration: '02:47',
        },
        {
          videolink: 'https://vimeo.com/896417275/0ef0c5e67d',
          thumbnail: '/img/recruitment-video/thoughtworks.png',
          title: 'Live Action Campus Hiring Video',
          duration: '02:25',
        },
        {
          videolink: 'https://vimeo.com/1102449047',
          thumbnail: '/img/recruitment-video/meet_your_recruiter.png',
          title: 'Meet the recruiters - A video series',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/867137618',
          thumbnail: '/img/recruitment-video/tata_autocomp.png',
          title: 'Diversity & Inclusion in Manufacturing',
          duration: '03:02',
        },
      ],
    },
    {
      slug: 'Darwinbox Recruitment Film',
      featuredImage: {
        src: '/img/recruitment-video/darwinbox.png',
      },
      title: 'Fun Recruitment Video for SAAS Startup',
      company: {
        name: 'Darwinbox',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/787820894',
        },
        content:
          'When it’s a fun startup, its recruitment video ought to be fun too. Here’s the folks at Darwinbox swinging cricket bats and charming the audience with us for their recruitment video.',
      },
      popUpTitle: 'Fun Recruitment Video for SAAS Startup',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Direction',
        '04. Production',
        '05. Editing',
        '06. Motion Graphics',
        '07. Color Correction',
        '08. Curated Stock Music',
      ],
      redText: 'Live Action Recruitment Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/896417275/0ef0c5e67d',
          thumbnail: '/img/recruitment-video/thoughtworks.png',
          title: 'Live Action Campus Hiring Video',
          duration: '02:25',
        },
        {
          videolink: 'https://vimeo.com/1102449047',
          thumbnail: '/img/recruitment-video/meet_your_recruiter.png',
          title: 'Meet the recruiters - A video series',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/867137618',
          thumbnail: '/img/recruitment-video/tata_autocomp.png',
          title: 'Diversity & Inclusion in Manufacturing',
          duration: '03:02',
        },
        {
          videolink: 'https://vimeo.com/1042874695',
          thumbnail: '/img/recruitment-video/ai_first_case_study.png',
          title: 'Social Media Employer Branding Campaign',
          duration: '01:16',
        },
      ],
    },
    {
      slug: 'ThoughtWorks Campus Recruitment Film',
      featuredImage: {
        src: '/img/recruitment-video/thoughtworks.png',
      },
      title: 'Live Action Campus Hiring Video',
      company: {
        name: 'ThoughtWorks',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/896417275/0ef0c5e67d',
        },
        content:
          'Hours of conversations with Thoughtworkers across India led us to this energetic, footage-rich campus hiring video that represents its people, culture and opportunities true to fact.',
      },
      popUpTitle: 'Culture & Campus Hiring Video for ThoughtWorks, India',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Interview Planning',
        '04. Crew Curation',
        '05. Production',
        '06. Editing',
        '07. Curated Stock Music',
        '08. Colour Correction',
      ],

      redText: 'Energetic Campus Hiring Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1102449047',
          thumbnail: '/img/recruitment-video/meet_your_recruiter.png',
          title: 'Meet the recruiters - A video series',
          duration: '01:28',
        },
        {
          videolink: 'https://vimeo.com/867137618',
          thumbnail: '/img/recruitment-video/tata_autocomp.png',
          title: 'Diversity & Inclusion in Manufacturing',
          duration: '03:02',
        },
        {
          videolink: 'https://vimeo.com/1042874695',
          thumbnail: '/img/recruitment-video/ai_first_case_study.png',
          title: 'Social Media Employer Branding Campaign',
          duration: '01:16',
        },
        {
          videolink: 'https://vimeo.com/1051442842',
          thumbnail: '/img/recruitment-video/tata_cricket_film.png',
          title: 'Rap Music Video on Employee Cricket League',
          duration: '01:52',
        },
      ],
    },
    {
      slug: 'Infosys Recruiter Film',
      featuredImage: {
        src: '/img/recruitment-video/meet_your_recruiter.png',
      },
      title: 'Meet the recruiters - A video series',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1102449047',
        },
        content:
          'Here’s breaking the ice with prospective employees. Meet global recruiters at Infosys. They are sharp, friendly, will meet you in your city and help you find your place at Infosys.',
      },
      popUpTitle: 'Recruiter Video Series for a Global IT Consulting Business',
      popUpPoints: [
        '01. Pre-interviews',
        '02. Script',
        '03. Art Direction',
        '04. Graphic Design',
        '05. Global Production',
        '06. Editing',
        '07. Motion Graphics',
        '08. Curated Stock Music',
      ],

      redText: 'Stylised, Live-Action Videos',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/867137618',
          thumbnail: '/img/recruitment-video/tata_autocomp.png',
          title: 'Diversity & Inclusion in Manufacturing',
          duration: '03:02',
        },
        {
          videolink: 'https://vimeo.com/1042874695',
          thumbnail: '/img/recruitment-video/ai_first_case_study.png',
          title: 'Social Media Employer Branding Campaign',
          duration: '01:16',
        },
        {
          videolink: 'https://vimeo.com/1051442842',
          thumbnail: '/img/recruitment-video/tata_cricket_film.png',
          title: 'Rap Music Video on Employee Cricket League',
          duration: '01:52',
        },
        {
          videolink: 'https://vimeo.com/1030711146',
          thumbnail: '/img/recruitment-video/ralf.png',
          title: 'Recruitment Video for Europe Region',
          duration: '01:30',
        },
      ],
    },
    {
      slug: 'TATA AutoComp Celebrating Women',
      featuredImage: {
        src: '/img/recruitment-video/tata_autocomp.png',
      },
      title: 'Diversity & Inclusion in Manufacturing',
      company: {
        name: 'Tata Sons',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/867137618',
        },
        content:
          'From the villages around Pune rose this inspiring story of women fueling India’s EV revolution and transforming lives. Here’s celebrating diversity and inclusion at TATA AutoComp.',
      },
      popUpTitle: 'Meet the Women Driving Change at Tata AutoComp, Pune',
      popUpPoints: [
        '01. Concept',
        '02. Pre-interviews',
        '03. Script & Visuals',
        '04. Production',
        '05. Voice Over',
        '06. Text Graphics',
        '07. Colour Correction',
        '08. Subtitles',
      ],

      redText: 'Diversity & Inclusion Film',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1042874695',
          thumbnail: '/img/recruitment-video/ai_first_case_study.png',
          title: 'Social Media Employer Branding Campaign',
          duration: '01:16',
        },
        {
          videolink: 'https://vimeo.com/1051442842',
          thumbnail: '/img/recruitment-video/tata_cricket_film.png',
          title: 'Rap Music Video on Employee Cricket League',
          duration: '01:52',
        },
        {
          videolink: 'https://vimeo.com/1030711146',
          thumbnail: '/img/recruitment-video/ralf.png',
          title: 'Recruitment Video for Europe Region',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/787820271',
          thumbnail: '/img/recruitment-video/treebo.png',
          title: 'Premium Live Action Recruitment Film',
          duration: '02:55',
        },
      ],
    },
    {
      slug: 'Infosys AI-first Case Study',
      featuredImage: {
        src: '/img/recruitment-video/ai_first_case_study.png',
      },
      title: 'Social Media Employer Branding Campaign',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1042874695',
        },
        content:
          'Mixed-media videos that showcase the exciting AI-first solutions being built by the people at Infosys. These videos attract AI talent and set the stage for opportunities at Infosys.',
      },
      popUpTitle: 'Social Media Employer Branding Campaign for IT Enterprise',
      popUpPoints: [
        '01. Script',
        '02. Visualization',
        '03. Graphic Design',
        '04. Stock Asset Curation',
        '05. 2D Animation',
        '06. Voice Over',
        '07. Curated Stock Music',
        '08. Subtitles',
      ],

      redText: 'Mixed-media Video Stories',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1051442842',
          thumbnail: '/img/recruitment-video/tata_cricket_film.png',
          title: 'Rap Music Video on Employee Cricket League',
          duration: '01:52',
        },
        {
          videolink: 'https://vimeo.com/1030711146',
          thumbnail: '/img/recruitment-video/ralf.png',
          title: 'Recruitment Video for Europe Region',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/787820271',
          thumbnail: '/img/recruitment-video/treebo.png',
          title: 'Premium Live Action Recruitment Film',
          duration: '02:55',
        },
        {
          videolink: 'https://vimeo.com/1102448563',
          thumbnail: '/img/recruitment-video/cactus.png',
          title: 'Motion Graphics Hiring Video for Cactus',
          duration: '00:47',
        },
      ],
    },
    {
      slug: 'Tata Women’s Cricket League',
      featuredImage: {
        src: '/img/recruitment-video/tata_cricket_film.png',
      },
      title: 'Rap Music Video on Employee Cricket League',
      company: {
        name: 'Tata',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1051442842',
        },
        content:
          'The Tata Group celebrates inclusion and collaboration through its first ever women employees’ cricket league. Our rap music video spotlights their stars from across 16 group companies.',
      },
      popUpTitle:
        'Inspiring Rap Music Video on Women Employees’ Cricket League',
      popUpPoints: [
        '01. Concept',
        '02. Lyrics',
        '03. Music Composition',
        '04. Graphic Design',
        '05. Creative Direction',
        '06. Production',
        '07. Editing',
        '08. Graphics & Colour',
      ],

      redText: 'Music Video on Sporting Culture',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1030711146',
          thumbnail: '/img/recruitment-video/ralf.png',
          title: 'Recruitment Video for Europe Region',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/787820271',
          thumbnail: '/img/recruitment-video/treebo.png',
          title: 'Premium Live Action Recruitment Film',
          duration: '02:55',
        },
        {
          videolink: 'https://vimeo.com/1102448563',
          thumbnail: '/img/recruitment-video/cactus.png',
          title: 'Motion Graphics Hiring Video for Cactus',
          duration: '00:47',
        },
        {
          videolink: 'https://vimeo.com/868489633',
          thumbnail: '/img/recruitment-video/career_site.png',
          title: 'Career Portal Demo Video for Global Hiring',
          duration: '02:34',
        },
      ],
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

  const processCards = [
    {
      key: '1',
      title: 'Background & Brief',
      desc: 'We understand your brief, your communication objectives, and your brand identity.',
    },
    {
      key: '2',
      title: 'Concepts & Estimates',
      desc: 'Choose from unique creative concepts - complete with estimates and production timelines.',
    },
    {
      key: '3',
      title: 'Script & Story',
      desc: 'Our best creative teams work on copy and visualization for your next employer branding video.',
    },
    {
      key: '4',
      title: 'Design & Storyboards',
      desc: 'From custom-designed storyboards to detailed production plans, we start bringing your video to life.',
    },
    {
      key: '5',
      title: 'Filming & Direction',
      desc: 'We handpick the right Director and on-ground crew from our curated global film collaborative.',
    },
    {
      key: '6',
      title: 'Editing & Animation',
      desc: 'We edit, animate, and add sound effects—then review with you and deliver limitless versions.',
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
          bottom:'25px'
        },
        {
          width: '100%',

          y: 0,

          duration: 0.8,
          bottom:'0px'
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
        title="Recruitment Video Production"
        description="Recruitment Video Production"
        url={`https://www.makerrs.com${router.asPath}`}
        keywords="hiring videos, employer branding videos, recruitment video agency, company culture video"
      />
      <section
        className="py-15 md:pb-0 md:pt-18 relative bg-rb-mercury text-rb-black overflow-hidden"
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />

        <div className="container">
          <div className="flex flex-col lg:flex-row lg:gap-[24px] items-center justify-between">
            <div className="w-full lg:w-[725px] opacity-100">
              <h1 className="hero-text md:text-[94px] md:leading-[94px] font-everett font-medium md:tracking-[-1.88px] uppercase text-[56px] leading-[1.07] tracking-[-1.96px] flex flex-col">
                <div className="flex flex-wrap gap-x-3 items-center">
                  <span>Get Great</span>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4">
                  <span>Hiring</span>
                  <div
                    className={`content aspect-[1920/1068] origin-top ${styles.content} hidden md:inline-block max-h-[79px]`}
                    ref={containerRef}
                  ></div>
                </div>

                <div>
                  <span>videos</span>
                </div>
              </h1>

              <div className="mt-6 md:mt-8 heroMarquee">
                <ul className="list-inside space-y-3 text-[16px] leading-[1.25] tracking-[-0.64px] font-opensans md:text-[24px] md:leading-[32px] md:tracking-[-0.24px] font-semibold">
                  <li className="flex items-center space-x-3">
                    <img src="/img/services/crew/success-check.svg" alt="check" height={24} width={24} />
                    <span>End-to-end recruitment video services</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="/img/services/crew/success-check.svg" alt="check" height={24} width={24} />
                    <span>Great scripts & storytelling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src="/img/services/crew/success-check.svg" alt="check" height={24} width={24} />
                    <span>Trusted by Fortune 500 companies</span>
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
                src="/recruiter_banner.mp4"
                poster="/ryan_orig.png"
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
          className="w-full flex bottom-0 left-0 select-none md:aspect-[1920/1068] relative  md:origin-top mx-auto"
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
            src="/recruiter_banner.mp4"
            poster="/ryan_orig.png"
            className="w-full hidden md:block web-vid"
            width="1920"
            height="1068"
          ></video>
        </div>
      </section>

      <section className="bg-white overflow-hidden pt-18 md:pt-30 pb-18 md:pb-0">
        <div className="container pl-5 pr-5 lg:pl-0 lg:pr-0">
          <LineHeading className="mb-6 md:mb-7.5">
            We are a Trusted Recruitment Video Agency
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
                    } ${s.id === 0 ? ' -ml-[5px]' : ''} ${s.id === 1 ? 'md:-ml-[13px] -ml-[5px]' : ''} ${
                      s.id === 3 ? 'md:-ml-[6px] !-ml-[4px]' : ''
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
                The Makerrs Advantage
              </LineHeading>
              <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[920px] mb-8 md:mb-[70px]">
                How we craft employer branding videos <br /> that drive growth
                for you
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
            Explore our Recruitment Video Portfolio
          </h3>
          <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-10">
            {workData.slice(0, 12).map((v) => (
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
              marqueeContent: 'Employer Branding Video',
            },
            {
              id: 1,
              marqueeContent: '2D Recruitment Explainer',
            },
            {
              id: 2,
              marqueeContent: 'Company Culture Video',
            },
            {
              id: 3,
              marqueeContent: 'Employee Testimonial Video',
            },
            {
              id: 4,
              marqueeContent: 'Recruitment Video Campaign',
            },
            {
              id: 5,
              marqueeContent: 'EVP Video',
            },
            {
              id: 6,
              marqueeContent: 'Career Page Video',
            },
            {
              id: 7,
              marqueeContent: 'Diversity & Inclusion Video',
            },
            {
              id: 8,
              marqueeContent: 'Pride Month Video',
            },
            {
              id: 9,
              marqueeContent: 'Women’s Day Video',
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

       <section className="py-18 md:py-10 overflow-hidden">
        <div className="container">
          <div className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-full mb-8 md:mb-[70px]">
            How we create great hiring videos
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
          testimonialData={testimonialRecruiterData}
          type="semi"
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
                data={RecruitmentVideoFaq?.map((c) => ({
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
            src="/recruiter_banner.mp4"
            className="w-full"
            width="1920"
            height="1068"
          ></video>
        </div>
      </VideoModal>
    </>
  )
}

export default RecruitmentVideoProduction
