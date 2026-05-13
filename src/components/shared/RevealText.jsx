import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const RevealText = ({ text = '' }) => {
  const container = useRef()
  const splitText = useMemo(() => text.split(' '), [text])
  const tl = useRef()
  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top 80%',
        end: 'center 20%',
        // markers: true,
      },
    })
    tl.current.to(
      container.current.querySelectorAll('.outline-text-black'),

      {
        stagger: { amount: 1 },
        color: '#111010',
      }
    )
    return () => {
      if (tl.current) {
        tl.current.kill()
      }
    }
  }, [])
  return (
    <div
      className="text-reveal-small md:text-reveal-large font-semibold"
      ref={container}
    >
      {splitText.map((t, index) => (
        <span className="relative" key={index}>
          <span className="outline-text-black">{t}</span>
          {index != splitText.length - 1 && ' '}
        </span>
      ))}
    </div>
  )
}
