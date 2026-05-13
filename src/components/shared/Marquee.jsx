import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// direction=-1 : left to right
// direction=1 : right to left
// scrollSpeedBased : speed based on amount of scroll


export const Marquee = ({
  children,
  duration,
  direction,
  scrollSpeedBased,
}) => {
  const ref = useRef()
  const tween = useRef()
  const props = useMemo(
    () => ({
      scrollSpeedBased: !!scrollSpeedBased,
      direction: direction ?? 1,
      duration: duration ?? 15,
    }),
    [duration, direction, scrollSpeedBased]
  )
  useEffect(() => {
    const parts = ref.current.querySelectorAll('.marquee__part')
    tween.current = gsap
      .to(parts, {
        xPercent: -100,
        repeat: -1,
        duration: props.duration,
        ease: 'linear',
      })
      .totalProgress(0.5)
    gsap.set(parts, { xPercent: -50 })
    gsap.to(tween.current, {
      timeScale: props.direction,
    })

    return () => {
      tween.current?.kill()
    }
  }, [props.direction, props.duration])
  useEffect(() => {
    const onScroll = () => {
      if (!props.scrollSpeedBased) return
      // reference: https://greensock.com/forums/topic/32738-increase-speed-of-marquee-when-user-scroll/

      const timeScaleClamp = gsap.utils.clamp(1, 6)

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          tween.current?.timeScale(
            props.direction * timeScaleClamp(Math.abs(self.getVelocity() / 200))
          )
        },
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [props.scrollSpeedBased, props.direction])
  return (
    <div className="flex origin-left">
      <div className="marquee__inner flex" ref={ref}>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
          {children}
        </div>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}
