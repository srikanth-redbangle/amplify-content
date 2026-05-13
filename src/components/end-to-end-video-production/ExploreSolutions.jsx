import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { LineHeading } from '../shared'

const data = [
  {
    key: 'think',
    href: '/services/leap',
    className: 'bg-rb-scarlet',
    graphic: {
      src: '/img/services/think-explore-graphic.webp',
      alt: 'think explore graphic',
      width: 408,
      height: 521,
    },
    title: 'leap',
    text: 'Strategic content solutions for your brand. We combine our knowledge of integrated marketing solutions with analysis and creativity, to offer concrete strategy blueprints, expand audience reach and fuel brand growth.',
  },
  {
    key: 'create',
    href: '/services/create',
    className: 'bg-rb-torch-red',
    graphic: {
      src: '/img/services/create-explore-graphic.webp',
      alt:'create explore graphic',
      width: 446,
      height: 521,
    },
    title: 'create',
    text: 'Get campaigns and content that fuel brand growth across audiences. Our creative strategy, fresh ideas, and end-to-end content production services deliver results that are on point, and on time.',
  },
  {
    key: 'play',
    href: '/services/play',
    className: 'bg-rb-rosa',
    graphic: {
      src: '/img/services/play-explore-graphic.webp',
      alt:'play explore graphic',
      width: 402,
      height: 570,
    },
    title: 'play',
    text: 'Experience technology-enabled, scaled video content production services. From scripts and storyboards to production across 100 countries and seamless project management - our cloud-powered workflows are designed to fuel your brand’s growing needs. ',
  },

]

export const ExploreSolutions = ({ type = 'create', className = '' }) => {
  return (
    <section className={`bg-white ${className}`}>
      <div className="container">
        <LineHeading className="mb-7 md:mb-9 mt-15">Explore solutions</LineHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 lg:mb-20">
          {data
            .map((c) => (
              <div
                className={`relative px-[38px] py-14 text-white overflow-hidden ${c.className || ''
                  }`}
                key={c.key}
              >
                <img
                  alt={c.graphic.alt||''}
                  aria-hidden="true"
                  className={
                    cx([
                      'absolute -right-[18px] top-0',
                      c.key === 'think' && 'max-w-[102px] md:max-w-[204px]',
                      (c.key === 'create' || c.key === 'play') &&
                      'max-w-[111px] md:max-w-[223px]',
                    ])
                  }
                  {...c.graphic}
                />

                <h4 className="text-4xl leading-9.5 md:text-[57.54px] md:leading-[68px] font-inter font-medium uppercase mb-10.5 md:mb-40 max-w-[300px] z-0 absolute">
                  {c.title}
                </h4>
                <p className="text-sm md:text-xl font-opensans lg:mt-[210px] mt-[100px]">{c.text}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
