import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'

import styles from '@/styles/sections/Solutions.module.scss'

gsap.registerPlugin(ScrollTrigger)
const slides = [
    {
    key: 1,
    title: 'GET DESIGN',
    excerpt:
      'Whether you are looking for a new brand identity system,  sticky event branding or well-designed marketing collateral – our design solutions help your business stand out and start conversations.',
    video: {
      src: '/img/design_video.mp4',
      poster: '/img/services/design/design_video.png',
      width: '1440',
      height: '810',
    },
    color: '#ffffff',
    buttonName: 'Explore Design Solutions',
    textColor: '#111010',
    href: '/brand-design-agency',
  },
  {
    key: 2,
    title: 'GET VIDEOS',
    excerpt:
      'We take a strategic approach to planning, crafting and scaling video content for brands – be it for a product launch or for YouTube channel growth. We also support on-demand end-to-end video production requirements around customer testimonial videos, hiring and culture videos, and more.',
    video: {
      src: '/img/services/videos/hero.mp4',
      poster: '/img/services/videos/hero.png',
      width: '1440',
      height: '810',
    },
    color: '#ffffff',
    buttonName: 'Explore Video Solutions',
    textColor: '#111010',
    href: '/video-production'
  },
  {
    key: 3,
    title: 'GET PODCASTS',
    excerpt:
      'Looking to lead industry conversations, build community and drive ROI? Go from content research, concept and positioning to podcast branding, production, distribution and amplification with one global podcast partner.',
    video: {
      src: '/img/makers_podcast.mp4',
      poster: '/img/services/podcast/hero-poster.png',
      width: '1440',
      height: '810',
    },
     color: '#ffffff',
    buttonName: 'Explore Podcast Solutions',
    textColor: '#111010',
    href: '/podcast-production-services'
  },

  {
    key: 4,
    title: 'GET CAMPAIGNS',
    excerpt:
      'From brand awareness campaigns and product launch campaigns to employer branding campaigns and ESG campaigns–we take our cues from people and culture, and turn real insights into relatable campaigns that align perfectly with your business goals.',
    video: {
     src: '/img/services/campaign/hero.mp4',
      poster: '/img/services/campaign/hero.png',
      width: '1440',
      height: '810',
    },
    color: '#ffffff',
    buttonName: 'Explore Campaign Services',
    textColor: '#111010',
    href: '/advertising-agency',
  },
  {
    key: 5,
    title: 'BOOK A CREW',
    excerpt:
      'Hire professional video crews across 100 countries. Be it a one-camera shoot, a multi-camera multi-location production or a studio shoot–we curate the right video crews for you, book locations, manage the production, and quality-check the footage before it hits your inbox.',
    video: {
      src: '/img/crew-preview.mp4',
      poster: '/img/services/crew/hero.webp',
      width: '1440',
      height: '810',
    },
    color: '#ffffff',
    buttonName: 'Hire Video Crews',
    textColor: '#111010',
    href: '/video-production-near-me',
  },
]

const sReverse = slides
export const SolutionsSection = () => {
  const containerRef = useRef()
  const onClick = (i) => {
    try {
      window.scrollTo(
        0,
        containerRef.current.offsetTop +
          (i == 1 ? 200 : 0) +
          (i == 0 ? 0 : (i + (i == 2 ? 1 : 0)) * window.innerHeight)
      )
    } catch {}
  }
  useEffect(() => {
    const container = containerRef.current
    const contents = document.querySelectorAll('.content-track > div')
    const sections = document.querySelectorAll('[data-solutionsection]')
    const bullets = document.querySelectorAll('[data-solutionsection-bullet]')

    const tls = []

    const mm = gsap.matchMedia()
    mm.add('(min-width:768px)', () => {
      // console.log(window.innerHeight)
      const totalDuration = 5 * window.innerHeight
      const n = sections.length
      const singleDuration = totalDuration / n
      // gsap.set(contents, { autoAlpha: 0 })
      // gsap.set(contents[0], { autoAlpha: 1 })
      const mstl = ScrollTrigger.create({
        trigger: '.pin-up',
        start: () => 'top top',
        // invalidateOnRefresh: true,
        end: () => `+=${totalDuration}`,
        // markers: true,
        pin: true,
        scrub: true,
        // animation: linetl,
      })
      sections.forEach((s, i) => {
        const scrollTriggerSettings = {
          trigger: container,
          start: () => `top+=200px -=${singleDuration * (i - 1)}`,
          end: () =>
            i == 4 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,
          markers: false,
          toggleActions: 'play none play reverse ',
        }

        // // Check if the current slide is the third one (index 2)
        // if (i === 3) {
        //   // Increase the duration for the third slide
        //   scrollTriggerSettings.end = () =>
        //     `bottom top+=${singleDuration * 1.5}`
        // }

        const tl = gsap.timeline({
          scrollTrigger: {
            ...scrollTriggerSettings,
            scrub: true,
            // trigger: container,
            // start: () => `top+=200px -=${singleDuration * (i - 1)}`,
            // end: () =>
            //   i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,

            // // markers: true,
            // scrub: true,
            // // animation: tl,
            // toggleActions: 'play none play reverse',
          },
        })
        tls.push(tl)
        // ScrollTrigger.create()
        tl.fromTo(
          contents[i],
          {
            yPercent: 0,
            //  autoAlpha: i !== 0 ? 0 : 1
          },
          {
            yPercent: -100 * i,
            // autoAlpha: 1,
            // duration: 0.5,
          },
          0
        )
        const ltl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            // 200 for giving space to stay for the first section and 2 times as there are 2 containers on top of the last section
            start: () => `top+=${singleDuration * i} top+=200px`,
            toggleActions: 'play none play reverse',
            // markers: true,
          },
        })
        // if (i > 0) {
        //   ltl.fromTo(
        //     bullets[i - 1],
        //     { backgroundColor: 'white' },
        //     { backgroundColor: 'transparent' },
        //     0
        //   )
        // }

        // if (i === 3) {
        //   ltl.fromTo(
        //     bullets[i - 1],
        //     { backgroundColor: 'transparent' },
        //     { backgroundColor: 'transparent' },
        //     0
        //   )
        // }

        // ltl.fromTo(
        //   bullets[i],
        //   { backgroundColor: 'transparent' },
        //   { backgroundColor: 'white' },
        //   0
        // )
        bullets.forEach((bullet) => {
          ltl.set(bullet, { backgroundColor: 'transparent' })
        })

        ltl.set(bullets[i], { backgroundColor: 'black' })
        tls.push(ltl)
      })

      return () => {
        mstl.kill()
        tls.forEach((t) => t.kill())
      }
    })

    return () => {
      mm.kill()
    }
  }, [])

  return (
    <>
      <section
        className="relative overflow-visible md:overflow-hidden"
        ref={containerRef}
      >
        <div className="pin-up min-h-screen">
          <div className="container relative hidden md:block">
            <div className="flex flex-col absolute top-[50vh] -translate-y-1/2 md:right-4 xl:right-0 z-[1]">
              {sReverse.map((_, i) => (
                <button
                  key={i}
                  data-solutionsection-bullet={i}
                  onClick={() => onClick(i)}
                  className={`w-3 h-3 border border-rb-black bg-transparent my-[3px] rounded-full`}
                ></button>
              ))}
            </div>
          </div>
          <div className="content-track flex min-h-screen md:h-screen flex-col md:relative w-full ">
            {sReverse.map((s, i) => (
              <div
                key={s.key}
                className="min-h-screen md:min-h-0 md:h-full border-t last:border-b border-rb-black w-full flex-shrink-0 grid place-content-center  first:md:pt-24 pt-16 md:py-24 top-0 left-0 sticky md:static"
                style={{ backgroundColor: s.color }}
                data-solutionsection={s.color}
              >
                <div className="container">
                  <h3
                    className={
                      styles.title + ` md:text-5xl -mt-14 lg:text-[100px] lg:mt-0`
                    }
                    style={{ color: s.textColor }}
                  >
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap items-end flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-7 pt-11 md:pt-0 ">
                      {/* <img alt={s.title} {...s?.image} className="w-full" /> */}
                      <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        alt={s.title}
                        {...s?.video}
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-7 md:pr-10">
                      <p
                        className="mt-5.5 md:mt-0 mb-7.5 md:mb-10 md:text-2xl font-normal tracking-[-0.48px]"
                        style={{ color: s.textColor }}
                      >
                        {s.excerpt}
                      </p>
                      <Button
                          suffix={<LineArrow hover />}
                          href={s.href}
                          className="w-full md:w-auto md:max-w-max"
                          style={{color: s.textColor}}>
                          {s.buttonName}
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
