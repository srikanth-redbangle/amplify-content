import styles from '@/styles/services.module.scss'
import {
  LineHeading,
  TrustedBrandsSection,
  RollupNumber,
  ServiceHeroSection,
  ExploreMoreSection,
  ServiceCardSection,
  VideoMetaModal,
  FeaturedWorkSection,
} from '@/components/shared'
import { VideoModal } from '@/components/shared'
import { LineArrow } from '@/components/icons'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'

import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import { Accordion } from '@/components/ui'
import { Testimonials } from '@/components/shared'
import { useState } from 'react'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { serviceVideos, videosCards } from '@/content/services'
import statsStyles from '@/styles/sections/StatsSection.module.scss'
import { videoPosts, explorecards } from '@/utils/dummy'

const INIT_MODAL = {
  open: false,
  video: null,
  loading: false,
  title: null,
}

const VideosServices = ({ setisPopupOpen }) => {
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const router = useRouter()
  const _posts = videoPosts.map(postsMapper)
  const [modal, setModal] = useState(INIT_MODAL)
  const [stopVisible, setstopVisible] = useState(false)

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
  const filteredCards = explorecards.filter(card => card.href !== router.pathname);

  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 60,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: (
        <span className="md:max-w-[188px]">
          global <br />
          clients
        </span>
      ),
    },
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
      text: (
        <>
          videos <br />
          produced
        </>
      ),
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
      text: (
        <>
          global <br />
          filmmakers
        </>
      ),
    },
    {
      id: 3,
      countUpProps: {
        value: 600,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: (
        <>
          international <br />
          shoots
        </>
      ),
    },
  ]

  const TNC = [
    {
      key: 0,
      title: 'What types of videos do you create?',
      content:
        'We offer a wide range of video content services for brand growth. Whether it is commercial videos, social media videos, case study videos, thought leadership videos, product explainer videos, recruitment videos, documentary films of other formats – we create content that connects with your audiences.',
    },
    {
      key: 1,
      title: 'Which industries do you specialise in?',
      content:
        'We’ve worked across technology, F&B, travel, aerospace, manufacturing, engineering, hiring, fashion, hospitality and more. So, we are a bit diverse with our industry focus. Which means, we are great at cross-pollinating our learnings. And we approach every brief with an intent to learn, explore and make something new.',
    },
    {
      key: 2,
      title: 'Which locations can you produce videos in?',
      content:
        'As a global creative agency and collaborative, we can produce films and videos for you across 100 countries. Here’s how we do this: our in-house times strategise, conceptualise, script and storyboard your videos. Our producers match the creative brief to a curated crew in the location we need to film in. We brief, creatively supervise and manage the entire production. The footage comes back to our in-house post production team for the rest of the magic.',
    },
    {
      key: 3,
      title: 'Which platforms do you create videos for?',
      content:
        'As a creative agency and collaborative, we conceptualize and produce videos for digital, offline and events. Our goal is to ensure every piece of content you commission connects with your audience, and drives engagement, no matter where it’s seen - LinkedIn, YouTube, event, website or Whatsapp.',
    },
    {
      key: 4,
      title: 'Do you create branded content?',
      content:
        'Yes, we can strategise and create branded content IPs. This could be specific to one platform or adaptable across platforms. From a limited video series to an ongoing branded IP - we strategise, plan, conceptualise, produce and help amplify branded video content.',
    },
    {
      key: 5,
      title: 'Do you create illustrated and animated content?',
      content:
        'Our in-house illustrators, designers and animators collaborate closely with each other – and, sometimes also with specialised collaborators – to craft stunning illustrated and animated videos for your brand.',
    },
    {
      key: 6,
      title: 'How do you handle copyright and ownership of the content?',
      content:
        'With the majority of our work, as per pre-agreed contracts, the copyright for creative assets transfer to the client upon receipt of final payment. In some cases though, the copyright is not assigned or transferred for perpetuity. Examples of short-term rights assignment include custom-composed music, celebrity cast, etc. Rights with these creators and artists are agreed to on a case-to-case basis, and usually are for a year or three to begin with for specific mediums. The client may extend such rights for additional years and mediums via Makerrs, at a future date and at an additional cost.',
    },
    {
      key: 7,
      title: 'What is your video production process? ',
      content: (
        <>
          <p>
            Over the years, we’ve crafted and shaped thousands of videos. We
            have a tried-and-tested process that enables our clients to grow
            their brands and us to keep delivering on-point and on-time. Here’s
            a look at our cloud-based workflow for on-demand video services.
            (Note: our process for strategic, long-term video engagements are
            slightly different to this.)
          </p>

          <h3 className="mt-4 font-semibold">1. Project Briefing</h3>
          <p>
            We start by understanding your business objectives, target audience,
            and key messages. Our Client Servicing team collaborates closely
            with you to outline project goals, ensuring a clear and actionable
            direction from the start.
          </p>

          <h3 className="mt-4 font-semibold">2. Research & Insights</h3>
          <p>
            Before diving into the creative process, we do our own research and
            understand the brief as well as the context. This ensures that our
            solutions align with your business goals and resonate with your
            target audience.
          </p>

          <h3 className="mt-4 font-semibold">3. Concepts & Estimates</h3>
          <p>
            We develop and present a couple of creative concepts and estimate
            options for your brief, to help you choose the most suitable way
            forward.
          </p>

          <h3 className="mt-4 font-semibold">4. Copy & Design</h3>
          <p>
            Our creative team works on copy and design to bring our unique
            concept to life. For videos, this includes scripting, visualisation,
            graphic design, music research, mood boards, location scouting,
            curated crews, styling and more.
          </p>

          <h3 className="mt-4 font-semibold">5. Execution / Production</h3>
          <p>
            From one-camera testimonial videos at an office to a series of
            videos produced across 5 countries - we support videos across
            formats, locations and at any scales. For projects that don’t
            require a live shoot, we go from design to post production, and
            deliver the initial draft. We then refine the draft video based on
            your feedback, delivering a final product that aligns perfectly with
            the business intent and brand aesthetics.
          </p>

          <h3 className="mt-4 font-semibold">
            6. Video Post-Production & Versioning
          </h3>
          <p>
            We manage the entire post production process — from editing,
            animation, sound design to audio mixing and mastering and colour
            grading – ensuring quality consistency across all creative assets.
            We also handle video versioning supporting custom adaptations
            requirements so that your content is tailored to engage your
            audience across mediums.
          </p>

          <h3 className="mt-4 font-semibold">7. Asset Delivery</h3>
          <p>
            All final creative assets are uploaded to our technology platform,
            ensuring easy access, downloads and repurposing for your brand.
          </p>
        </>
      ),
    },
    {
      key: 8,
      title:
        'How do you ensure that the videos you create are right for my brand and audience?',
      content:
        'We begin our engagement with you by understanding your product/service, brand and audience. Our work begins here. And everything we do for you is influenced by our knowledge of creative innovations happening around us, and industry and audience trends.',
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
        'We partnered with Makerrs to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends, are always experimental and open to feedback. They’re an amazing lot to work with!',

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
        srcSet: `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]

  const workData = [
    {
      slug: 'Corporate Video Production',
      featuredImage: {
        src: '/img/corporate-video/honasa_pre-ipo_corporate_film.png',
      },
      title: 'Corporate Video Production',
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
          videolink: 'https://vimeo.com/1084658661/b2d6c34787',
          thumbnail: '/img/case-study-video/kia.png',
          title: 'Live Action Case Study Video',
          duration: '02:43',
        },
        {
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Video',
          duration: '10:18',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: '2D Explainer Video',
          duration: '01:29',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live Action Explainer',
          duration: '02:05',
        },
      ],
    },

    {
      slug: 'Live Action Case Study Video',
      featuredImage: {
        src: '/img/case-study-video/kia.png',
      },
      title: 'Live Action Case Study Video',
      company: {
        name: 'Infosys, USA',
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
          videolink: 'https://vimeo.com/1078406512',
          thumbnail: '/img/corporate-video/gordon_ritter.png',
          title: 'Thought Leadership Video',
          duration: '10:18',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: '2D Explainer Video',
          duration: '01:29',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live Action Explainer',
          duration: '02:05',
        },
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: 'https://vimeo.com/1008706015?share=copy',
          title: 'Interactive Video',
          duration: '09:02',
        },
      ],
    },

    {
      slug: 'Gordon Ritter',
      featuredImage: {
        src: '/img/corporate-video/gordon_ritter.png',
      },
      title: 'Thought Leadership Video',
      company: {
        name: 'Vymo, USA',
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
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: '2D Explainer Video',
          duration: '01:29',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live Action Explainer',
          duration: '02:05',
        },
        {
          videolink:
            'https://vimeo.com/1153861064/061b34dd9d?share=copy&fl=sv&fe=ci',
          thumbnail: 'https://vimeo.com/1008706015?share=copy',
          title: 'Interactive Video',
          duration: '09:02',
        },
        {
          videolink: 'https://vimeo.com/1051442842',
          thumbnail: '/img/recruitment-video/tata_cricket_film.png',
          title: 'Music Video',
          duration: '01:52',
        },
      ],
    },

    {
      slug: '2D Explainer Video',
      featuredImage: {
        src: '/img/explainer-video/Multiplier.png',
      },
      title: '2D Explainer Video',
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

    {
      slug: 'Live Action Explainer',
      featuredImage: {
        src: '/img/explainer-video/vymo_sme.png',
      },
      title: 'Live Action Explainer',
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
      slug: 'Interactive Video',
      featuredImage: {
        src: '/img/explainer-video/SLB.png',
      },

      title: 'Interactive Video',
      company: {
        name: 'SLB',
      },
      video: {
        workDetails: {
          videolink:
            // 'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
            'https://vimeo.com/1008706015?share=copy'
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
      slug: 'Tata Women’s Cricket League',
      featuredImage: {
        src: '/img/recruitment-video/tata_cricket_film.png',
      },
      title: 'Music Video',
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
    }
  ]

  const gridData = [
    {
      icon: '/img/services/videos/grid-icon1.svg',
      need: 'Strategic Video Solutions',
      others: 'Creative video solutions',
      redBangle: 'Video strategy, SEO and more',
    },
    {
      icon: '/img/services/videos/grid-icon2.svg',
      need: 'End to end services',
      others: 'Limited services',
      redBangle: 'Research, concept, production, post production & versioning!',
    },
    {
      icon: '/img/services/videos/grid-icon3.svg',
      need: 'Video Quality',
      others: 'Hit or miss',
      redBangle: 'Consistent, premium quality',
    },
    {
      icon: '/img/services/videos/grid-icon4.svg',
      need: 'Industry Knowledge',
      others: 'Limited industry exposure',
      redBangle: 'We research, immerse and then craft',
    },
    {
      icon: '/img/services/videos/grid-icon5.svg',
      need: 'Video Genres',
      others: 'Limited genres',
      redBangle: 'Any genre video',
    },
    {
      icon: '/img/services/videos/grid-icon6.svg',
      need: 'Video Formats',
      others: 'Limited formats',
      redBangle: 'Unlimited formats',
    },
    {
      icon: '/img/services/videos/grid-icon7.svg',
      need: 'Video Feedback',
      others: 'Emails back and forth',
      redBangle: 'Easy, cloud-based interactive reviews',
    },
    {
      icon: '/img/services/videos/grid-icon8.svg',
      need: 'Turnaround Times',
      others: 'They work at their speed',
      redBangle: 'We work at your need',
    },
    {
      icon: '/img/services/videos/grid-icon9.svg',
      need: 'Deadlines',
      others: 'You follow up with them',
      redBangle: 'We proactively plan, follow up',
    },
    {
      icon: '/img/services/videos/grid-icon10.svg',
      need: 'Versioning',
      others: 'Limited Versioning Support',
      redBangle: 'Scalable Versioning Services',
    },
    {
      icon: '/img/services/videos/grid-icon11.svg',
      need: 'Language Adapts',
      others: 'Mostly English only',
      redBangle: 'Any language Adapt',
    },
    {
      icon: '/img/services/videos/grid-icon12.svg',
      need: 'Project Management',
      others: 'Emails, spreadsheets',
      redBangle: 'Cloud-based workflows',
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
        title="Video Production Company for Brands | Makerrs"
        description="Video production services for borderless brands. Get commercial video production, corporate video production, non profit videos and more in 100 countries."
        keywords="Content creation, Video production services, Digital content creation, Corporate video production agency, Agency content creation, Animated video production, Corporate promotional video production, Social media video creation, Branded content creation, Branded content production company, Marketing video production, Influencer marketing services"
        url="https://www.makerrs.com/video-production"
      />
      <div id="service-hero">
        <ServiceHeroSection
          className=""
          type="GET VIDEO"
          video={serviceVideos.get_videos.video}
          fullVideo={serviceVideos.get_videos.fullVideo}
          ctaText="Video with us"
          ctaLink="/contact"
          textColor="#000000"
          content={
            <>
              <h1 className="inline">
                Be it your next big product launch video or YouTube channel
                growth, be it on-demand video production or a branded video
                series - we strategise, script and produce videos across
                formats, genres and locations. On-brand and on-time, <br />
                every time.
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
            Video with us
          </Button>
        </div>
      </div>

      <section
        className={`bg-white overflow-hidden pb-7.5 md:pb-15 pt-15 md:pt-30 `}
      >
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">Why Makerrs</LineHeading>
          <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none ml-5 transform -translate-x-5 sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-12">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statsStyles.statline}`}
                key={s.id}
              >
                <div
                  className={`${i == 2 && 'lg:ml-[20%]'} ${s.id === 3 ? 'ipad-mini-ml' : ''}`}
                >
                  <div className="lg:w-fit lg:mx-auto">
                    <div
                      className={`${s.id === 1 ? '!-ml-[4px] md:!-ml-[8px]' : ''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[7px]' : ''} ${s.id === 2 ? '!-ml-[2px] md:!-ml-[3px]' : ''} ${s.id === 3 ? '!-ml-[3px] md:!-ml-[5px]' : ''}`}
                    >
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

      <ServiceCardSection
        tag="How we work"
        title={
          <div className="md:max-w-[620px]">
            Our Scalable Video Content Services
          </div>
        }
        iconClassName="w-15 h-15"
        cards={videosCards}
      />

      <div className="pt-8 md:pt-0">
        <FeaturedWorkSection
          posts={_posts}
          href="/work/videos"
          title="Explore Our Video Portfolio"
          btnposition="bottom"
        />
      </div>
      

      {/* <section className={`overflow-hidden pb-18 pt-18 md:pb-18`}>
        <div className="container">
          <LineHeading className="mb-6 md:mb-9"> Get great videos</LineHeading>
          <h3 className="text-title md:text-title-md mb-12 md:mb-14 font-everett max-w-[911px]">
            Explore Our Video Portfolio
          </h3>
          <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-10">
            {workData.map((v) => (
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

          <Button
              className="w-fit mx-auto mt-[30px] md:mt-15"
              href="/work/videos"
              suffix={<LineArrow />}
            >
              Explore more
          </Button>

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
      </section> */}

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
                  {gridData.map((row, idx) => (
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

      <section className="bg-rb-service-grey md:py-30 py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center md:flex-row flex-col gap-8 md:gap-0">
            <div className="w-full md:w-2/5 px-4">
              <h2 className="text-title md:text-title-md mb-4 font-medium font-everett">
                Video production across 100+ Countries
              </h2>
              <p>
                From London to Tokyo, from San Francisco to Bangalore - we offer
                end to end video production services across locations. Just send
                us a brief, and we&apos;ll take care of the concepts, scripts,
                design, production, post production and more. On time, every
                time. No matter how many videos.
              </p>
              <div className="md:mt-10 mt-6">
                <Button
                  // onClick={handleClick}
                  href="/contact"
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Make a video
                </Button>
              </div>
            </div>
            <div className="w-full md:w-3/5 px-4">
              <video
                src="/img/services/crew/worldmap.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
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

      <TrustedBrandsSection className="bg-white py-7.5 md:py-15" heading="Our Clients"/>

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
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)

  return {
    props: {
      works,
    },
  }
}
export default VideosServices
