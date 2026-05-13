import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { cx } from 'class-variance-authority'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowButton } from '@/components/ui'
import { LineHeading, NewsletterField } from '@/components/shared'
import { formateDate } from '@/utils/formate'
// import { AboutArticleRow } from './AboutArticleRow'
import ArticleCard from './ArticleCard'
import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'
import { AboutArticleRow } from './AboutArticleRow'
import AboutArticleCard from './AboutArticleCard'
import Link from 'next/link'

const articles = [
  // {
  //   id: 0,
  //   href: 'https://hr.economictimes.indiatimes.com/news/industry/perfect-fit-the-new-employer-branding-reality/113938797',
  //   title: 'Perfect Fit: The New Employer Branding Reality',
  //   author: 'ETHRWorld | Authored Article',
  //   image: '/img/articles/Rimona_Ganapathy.webp',
  //   alt: 'Rimona Ganapathy',
  //   excerpt:
  //     'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  // },
  {
    id: 0,
    href: 'https://brandequity.economictimes.indiatimes.com/news/the-pitch-report/red-bangle-wins-the-strategic-and-creative-mandate-for-mccain-foods-india/115562258',
    title:
      'Red Bangle wins the strategic and creative mandate for McCain Foods India',
    author: 'ET Brand Equity | Business Development',
    // date: formateDate(1644085800000),
    image: '/img/articles/mc-cain.jpg',
    alt: 'Rimona Ganapathy',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 1,
    href: 'https://hr.economictimes.indiatimes.com/news/industry/perfect-fit-the-new-employer-branding-reality/113938797',
    title: 'Perfect Fit: The New Employer Branding Reality',
    author: 'ETHRWorld | Authored Article',
    image: '/img/articles/rimona_ganapathy1.jpg',
    alt: 'Rimona Ganapathy',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 2,
    href: 'https://brandequity.economictimes.indiatimes.com/news/the-people-report/rimona-ganapathy-joins-red-bangle-as-senior-vice-president-creative-services/107489863',
    title:
      'Rimona Ganapathy joins Red Bangle as Senior Vice President - Creative Services',
    author: 'ET Brand Equity | Leadership',
    // date: formateDate(1644085800000),
    image: '/img/articles/Rimona_Ganapathy.webp',
    alt: 'Rimona Ganapathy',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 3,
    href: 'https://www.pitchonnet.com/opinion/d2c-brand-marketing-betting-on-omnibrands-omnichannel-commerce-and-high-quality-content-34036.html',
    title:
      'Emerging Trends in Digital Marketing for D2C Brands: Conversations, Community, and Omni-Channel Marketing',
    author: 'Pitch | Authored Article',
    // date: formateDate(1644085800000),
    image: '/img/articles/D2C_Brand_Marketing_betting_on_Omnibrands.webp',
    alt: 'D2C Brand Marketing betting on Omnibrands',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },

  {
    id: 4,
    href: 'https://www.financialexpress.com/business/brandwagon-2023-in-review-the-indian-brand-content-landscape-3363913/',
    title: '2023 in Review: Reflecting on the Brand Content Landscape',
    author: 'ET Brand Equity | Authored Article',
    image: '/img/articles/2023_in_review.webp',
    alt: 'review',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 5,
    href: 'https://brandequity.economictimes.indiatimes.com/news/marketing/creating-content-that-connects/106786513',
    title:
      'Creating Content that Connects: The Key to Building Stronger Brand Consumer Relationships',
    author: 'ET Brand Equity | Authored Article',
    // date: formateDate(1644085800000),
    image: '/img/articles/Creating_content.webp',
    alt: 'Creating Creative Content',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 6,
    href: 'https://www.expresscomputer.in/news/unleashing-the-power-of-visual-storytelling-how-video-content-transforms-brand-engagement/107087/',
    title:
      'Unleashing the Power of Visual Storytelling: How Video Content Transforms Brand Engagement',
    author: 'Express Computer | Authored Article',
    image: '/img/articles/Unleashing_the_Power_of_Visual_Storytelling.webp',
    alt: 'Storytelling',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 7,
    href: 'https://cxotoday.com/interviews/red-bangles-technological-innovations-navigating-video-demand-in-a-dynamic-landscape/',
    title:
      'Red Bangle’s Technological Innovations Navigating Video Demand and Brand Content space in a Dynamic Landscape',
    author: 'CXOToday| Interview',
    image: '/img/articles/Lakshmi_Rebecca.webp',
    alt: 'Lakshmi Rebecca',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 8,
    href: 'https://www.adgully.com/how-mobile-tech-has-significantly-transformed-storytelling-and-advertising-strategies-139710.html',
    title:
      'How Mobile Tech has significantly transformed Storytelling and Advertising Strategies',
    author: 'Adgully | Industry Story',
    image: '/img/articles/How_mobile_tech_has_significantly_transformed.webp',
    alt: 'Mobile Technology',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 9,
    href: 'https://www.adgully.com/unleashing-the-power-of-brand-content-for-growth-139740.html',
    title: 'Unleashing the Power of Brand Content for Growth',
    author: 'Adgully | Authored Article',
    image: '/img/articles/Vivek_Chandra.webp',
    alt: 'Age of Experience',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 10,
    href: 'https://www.news18.com/tech/deploy-ai-driven-solutions-how-experts-want-govts-industries-to-tackle-deepfake-threats-8685329.html',
    title:
      '‘Deploy AI-Driven Solutions’: How Experts Want Govts & Industries to Tackle Deepfake Threats',
    author: 'News18 | Industry Story',
    image: '/img/articles/Deply_AI_driven_solutions.webp',
    alt: 'Deply AI driven solution',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 11,
    href: 'https://www.afaqs.com/news/media/red-bangle-gears-up-for-growth-repositions-and-expands-to-serve-indian-brands',
    title:
      'Red Bangle gears up for Growth, Repositions and Expands to serve Indian Brands',
    author: 'Afaqs | Launch Announcement',
    // date: formateDate(1644085800000),
    image: '/img/articles/Red_Bangle_gears_up.webp',
    alt: 'Red Bangle gears up',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 12,
    href: 'https://www.web3cafe.in/opinion/story/how-tech-is-transforming-the-world-of-branded-content-opinion-lakshmi-rebecca-red-bangle-697721-2023-10-20',
    title:
      'The Age Of Experience: How Technology is Transforming the World of Brand Content',
    author: 'WEB3CAFE| Authored Article',
    image: '/img/articles/The_Age_of_Experience.webp',
    alt: 'Age of Experience',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 13,
    href: 'https://www.storyboard18.com/brand-makers/red-bangle-strengthens-hires-ankur-bora-as-svp-business-development-and-client-servicing-13614.htm',
    title:
      'Red Bangle hires Ankur Bora as SVP – Business Development and Client Servicing',
    author: 'Storyboard18 | Leadership',
    image: '/img/articles/Ankur-Bora.webp',
    alt: 'Ankur Bora',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 14,
    href: 'https://www.afaqs.com/people-spotting/red-bangle-appoints-vivek-chandra-shenoy-as-vp-of-marketing-and-strategy',
    title:
      'Red Bangle appoints Vivek Chandra Shenoy as VP of Marketing and Strategy',
    author: 'Afaqs | Leadership',
    image: '/img/articles/Vivek_Chandra.webp',
    alt: 'Vivek Chandra',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
]

export const AboutNewsRoom = ({
  // articles = [],
  lineheading,
  heading,
  hideSubscribe,
  className = '',
  ...rest
}) => {
  const [hoveredSlide, setHoveredSlide] = useState()
  const [enter, setEnter] = useState(false)
  const cursor = useRef()
  const [visibleArticle, setVisibleArticle] = useState(5) // Initial number of visible Article
  const totalArticles = articles.length
  // console.log(totalArticles)

  useEffect(() => {
    const pointerMove = (e) => {
      gsap.to(cursor.current, {
        duration: 0.2,
        overwrite: 'auto',
        x: e.clientX + 102,
        y: e.clientY + 85,
        ease: 'none',
      })
    }
    window.addEventListener('pointermove', pointerMove)
    return () => {
      window.removeEventListener('pointermove', pointerMove)
    }
  }, [])
  const onPointerEnter = (index) => {
    setEnter(true)
    setHoveredSlide(index)
    gsap.to(cursor.current, {
      alpha: 1,
    })
  }
  const onPointerLeave = () => {
    setEnter(false)
    gsap.to(cursor.current, {
      alpha: 0,
    })
  }

  const loadMorePosts = () => {
    const nextVisibleArticles = visibleArticle + 5
    setVisibleArticle(Math.min(nextVisibleArticles, totalArticles))
    // sessionStorage.setItem('blogInd', Math.min(nextVisiblePosts, totalPosts))
  }

  return (
    <section id="articles" className={`bg-white ${className} overflow-hidden`}>
      <div className="container">
        <LineHeading className="mb-6 md:mb-9">
          {lineheading ? lineheading : 'Explore More'}
        </LineHeading>
        <div className="rb-row justify-between items-center mb-12 md:mb-17.5">
          <div className="w-full">
            <h3 className="text-title md:text-title-md mb-8 md:mb-0 font-everett">
              {heading ? heading : 'Discover the latest in content & culture!'}
            </h3>
          </div>
          {hideSubscribe ? (
            ''
          ) : (
            <div className="w-full md:w-1/2">
              <NewsletterField />
            </div>
          )}
        </div>
        <Swiper
          className="swiper-overflow-visible md:hidden"
          spaceBetween={24}
          slidesPerView={1.1}
        >
          {articles.map(({ ...article }, id) => (
            <SwiperSlide className="relative" key={id}>
              {/* <ArticleCard {...article} /> */}
              <AboutArticleCard {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          data-enter={enter}
          className="hidden flex-col md:flex data-[enter=true]:text-rb-black/60 text-rb-black"
        >
          {articles
            .slice(0, visibleArticle)
            .map(({ id, ...article }, index) => (
              <AboutArticleRow
                key={index}
                article={article}
                data-selected={index === hoveredSlide}
                onPointerEnter={() => onPointerEnter(index)}
                onPointerLeave={onPointerLeave}
              />
            ))}
        </div>
        <div
          className="w-[200px] h-[160px] fixed pointer-events-none overflow-hidden left-[-90px] top-[-62px]  opacity-0 z-[2] hidden md:block"
          ref={cursor}
        >
          {articles.map(({ image, alt }, index) => (
            <img
              src={image}
              key={index}
              alt={alt}
              className={cx(
                'w-full h-full object-cover absolute transition-all duration-300',
                index == hoveredSlide
                  ? 'opacity-100 blur-0'
                  : 'opacity-0 blur-2xl'
              )}
            />
          ))}
        </div>
        {visibleArticle < totalArticles && (
          <div className="hidden md:block">
            <Button
              className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
              onClick={loadMorePosts}
              suffix={<LineArrow />}
            >
              SEE MORE
            </Button>
          </div>
        )}
        {visibleArticle >= totalArticles && (
          <Link href={'#articles'}>
            <Button
              className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
              onClick={() => {
                setVisibleArticle(5)
              }}
              suffix={<LineArrow />}
            >
              SEE LESS
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}
