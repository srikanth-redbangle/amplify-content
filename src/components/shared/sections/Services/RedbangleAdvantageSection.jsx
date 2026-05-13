import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { LineHeading } from '@/components/shared'

export const RedbangleAdvantageSection = ({ data = [] }) => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    let cardContainer = document.querySelector('.feature-slider')
    let lineProgress = document.querySelector('.progress-slider')
    const mm = gsap.matchMedia()
    let tl = null

    const width = cardContainer.scrollWidth - cardContainer.offsetWidth
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.featured-section',
        start: '10% 30%',
        end: '60% 5%',
        scrub: true,
        // markers: true,
      },
    })
    tl.fromTo(cardContainer, { x: 0 }, { x: -width })
    tl.fromTo(lineProgress, { xPercent: -100 }, { xPercent: 0 }, 0)

    return () => tl.kill()
  }, [])

  return (
    <section className="py-7.5 md:py-15 bg-white  h-[200vh] featured-section">
      <div className=" sticky top-[10%] md:top-10">
        <div className="overflow-hidden">
          <div className="container">
            <LineHeading className="mb-6 md:mb-9">
              The Makerrs Way
            </LineHeading>
            <h3 className="text-title md:text-title-md font-everett mb-10 md:mb-18 md:max-w-[780px]">
              Content, conversations and community
            </h3>
            <div className="flex gap-8 feature-slider">
              {data.map((d) => (
                <div key={d.key} className="min-w-full md:min-w-[33.33%]">
                  <img src={d?.image} alt={d?.alt} width="111" height="111" />
                  <h4 className="text-accordion md:text-accordion-large font-everett font-medium my-4 md:mt-7 md:mb-5">
                    {d?.title}
                  </h4>
                  <p className="text-base md:acc-large text-rb-black/80 pb-4">
                    {d?.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-2 bg-rb-black/10 w-full relative overflow-hidden mt-15">
              <div className="progress-slider absolute inset-0 w-full h-full bg-rb-red"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
