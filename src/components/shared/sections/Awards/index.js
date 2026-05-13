import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { cx } from 'class-variance-authority'
import { AwardRow } from './AwardRow'

const awards = [
  {
    id: 0,
    year: '2022',
    category: 'Best Video Production Company',
    name: 'Ridia Film Awards',
    image: {
      src: '/img/services/award-1.webp',
      width: '212',
      height: '212',
    },
  },
  {
    id: 1,
    year: '2021',
    category: 'Excellence in Visual Storytelling',
    name: 'Creative Media Awards',
    image: {
      src: '/img/services/award-2.webp',
      width: '212',
      height: '212',
    },
  },
  {
    id: 2,
    year: '2020',
    category: 'Outstanding Corporate Video',
    name: 'Video Marketing Excellence Awards',
    image: {
      src: '/img/services/award-3.webp',
      width: '212',
      height: '212',
    },
  },
  {
    id: 3,
    year: '2019',
    category: 'Most Innovative Animation',
    name: 'Animation Showcase',
    image: {
      src: '/img/services/award-1.webp',
      width: '212',
      height: '212',
    },
  },
  {
    id: 4,
    year: '2018',
    category: 'Best Promotional Campaign',
    name: 'Marketing Excellence Awards',
    image: {
      src: '/img/services/award-2.webp',
      width: '212',
      height: '212',
    },
  },
]

export const AwardsSection = ({ className = '', ...rest }) => {
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
    <section className={`bg-white ${className} overflow-hidden`} {...rest}>
      <div className="container">
        <h3 className="text-title md:text-title-md mb-8 md:mb-16 font-everett max-w-[343px] md:max-w-[900px]">
          Discover the Awards and Accolades that we celebrate.
        </h3>

        <div
          data-enter={enter}
          className=" flex-col flex md:data-[enter=true]:text-rb-black/60 text-rb-black"
        >
          {awards.map(({ id, ...article }, index) => (
            <AwardRow
              key={id}
              {...article}
              data-selected={index === hoveredSlide}
              onPointerEnter={() => onPointerEnter(index)}
              onPointerLeave={onPointerLeave}
            />
          ))}
        </div>
        <div
          className="w-[144px] h-[144px] fixed pointer-events-none overflow-hidden left-[-72px] rounded-full top-[-72px]  opacity-0 z-[2] hidden md:block"
          ref={cursor}
        >
          {awards.map(({ image, id }, index) => (
            <img
              {...image}
              key={id}
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
      </div>
    </section>
  )
}
