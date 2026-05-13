import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { cx } from 'class-variance-authority'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LineHeading, NewsletterField } from '@/components/shared'
import { formateDate } from '@/utils/formate'
import { ArticleRow } from './ArticleRow'
import ArticleCard from './ArticleCard'
import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'

const articles = [
  {
    id: 0,
    href: '#!',
    title: 'Taking your brand into the metaverse',
    author: 'Anita Wilton',
    date: formateDate(1699381800000),
    image: '/img/articles/article1.webp',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 1,
    href: '#!',
    title: 'Post editing and post processing masterclass',
    author: 'Vishal Pawar',
    date: formateDate(1680546600000),
    image: '/img/articles/article2.webp',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
  {
    id: 2,
    href: '#!',
    title: 'Revolutionizing the content production industry',
    author: 'Riley Mckinzie',
    date: formateDate(1644085800000),
    image: '/img/articles/article1.webp',
    excerpt:
      'Market research firm Gartner predicts that by 2026 one-fourth of people will spend at least 1 hour a day in metaverse worlds. We list 5 key steps to help you take your brand into the metaverse.',
  },
]

export const NewsRoom = ({
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
  useEffect(() => {
    const pointerMove = (e) => {
      gsap.to(cursor.current, {
        duration: 0.2,
        overwrite: 'auto',
        x: e.clientX,
        y: e.clientY,
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
  return (
    <section className={`bg-white ${className} overflow-hidden`}>
      <div className="container">
        <LineHeading className="mb-6 md:mb-9">
          {lineheading ? lineheading : 'Explore More'}
        </LineHeading>
        <div className="rb-row justify-between items-center mb-12 md:mb-17.5">
          <div className="w-full md:w-1/2">
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
              <ArticleCard {...article} href={`/articles/${article?.slug}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          data-enter={enter}
          className="hidden flex-col md:flex data-[enter=true]:text-rb-black/60 text-rb-black"
        >
          {articles.map(({ id, ...article }, index) => (
            <ArticleRow
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
          {articles.map(({ featuredImage, id }, index) => (
            <img
              {...featuredImage}
              key={index}
              alt=""
              className={cx(
                'w-full h-full object-cover absolute transition-all duration-300',
                index == hoveredSlide
                  ? 'opacity-100 blur-0'
                  : 'opacity-0 blur-2xl'
              )}
            />
          ))}
        </div>
        <Button
          href="/blog"
          className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
          suffix={<LineArrow />}
        >
          SEE ALL BLOGS
        </Button>
      </div>
    </section>
  )
}
