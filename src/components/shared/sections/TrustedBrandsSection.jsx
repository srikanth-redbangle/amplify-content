import React from 'react'
import { LineHeading } from '../Heading'
import { Marquee } from '../Marquee'

export const icons = [
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
  },
  {
    id: 3,
    name: 'pudingding.png',
    width: '100',
    height: '30',
    alt: 'pudingding'
  },
  {
    id: 4,
    name: 'taneria.png',
    width: '132',
    height: '36',
    alt: 'Taneria',
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
    }, {
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
    }
]

export const TrustedBrandsSection = ({
  className = '',
  heading = 'Trusted by global brands',
  ...props
}) => {
  
  return (
    <section className={className} {...props}>
      <div className="container">
        <LineHeading className="mb-7 md:mb-10">{heading}</LineHeading>
        <div className="overflow-hidden md:min-h-[188px]">
          <Marquee duration={50}>
            <div className="flex items-center md:mb-3">
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
              {icons
                .slice(icons.length / 2)
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
        </div>
      </div>
    </section>
  )
}