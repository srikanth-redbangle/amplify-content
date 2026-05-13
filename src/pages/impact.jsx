import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { LineHeading, SEO, Testimonials, VideoModal } from '@/components/shared'
import { Swiper, SwiperSlide } from 'swiper/react'
import { csrSchema } from '@/components/schema/csr-schema'
import { SliderButton } from '@/components/ui'

const catList = [
  {
    id: 0,
    thumbnail: '/img/impact/cat_1.png',
    alt: 'Cat',
  },
  {
    id: 1,
    thumbnail: '/img/impact/cat_3.png',
    alt: 'Cat',
  },
  {
    id: 2,
    thumbnail: '/img/impact/cat_4.png',
    alt: 'Cat',
  },
  {
    id: 3,
    thumbnail: '/img/impact/cat_5.png',
    alt: 'Cat',
  },
]

const Testimonial_1 = [
  {
    key: 0,
    quote:
      'My journey with animal rescue and feeding began when <br class="hidden lg:block" /> I was 21, when I watched a group of stray dogs rummaging through garbage in search of food. I started feeding a mother dog and her pups - eight in total. Soon after, I attended a first aid training program by <i>Welfare for Stray Dogs (WSD)</i>. What started with rescuing a handful of animals quickly became something much bigger. Today, I feed over <span class="font-semibold">700 animals every day: <br class="hidden lg:block" /> ~450 dogs and ~250 cats</span>. I coordinate rescues, arrange medical treatments, and work to rehabilitate and rehome those that can’t return to the streets of Mumbai. My vision is to establish a <span class="font-semibold">24/7 animal hospital and ambulance service</span>, accessible and affordable to rescuers. Because compassion shouldn’t come with a fat price tag.',
    image: {
      srcSet:
        '/img/our-team/debarti-banerjee.webp 533w, /img/our-team/debarti-banerjee.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const videoList = [
  {
    id: 0,
    title: 'Industree ',
    youtubeThumbnail: '/img/csr/industree.webp',
    alt: 'Industree',
    url: 'https://www.youtube.com/embed/4pxJSzRnH28?si=aCfgT9BwRNn74ZjS&autoplay=1',
  },
  {
    id: 1,
    title: 'Frontier Markets',
    youtubeThumbnail: '/img/csr/frontier-markets.webp',
    alt: 'Frontier Markets',
    url: 'https://www.youtube.com/embed/OGTd7CntCJ8?si=vn2fXJjRT7rwKSeL&autoplay=1',
  },
  {
    id: 2,
    title: 'Garv Toilets',
    youtubeThumbnail: '/img/csr/garv-toilets.webp',
    alt: 'garv toilets',
    url: 'https://www.youtube.com/embed/GrWVORRgE2w?si=ZHGw4ZhnXjYtByYc&autoplay=1',
  },
  {
    id: 3,
    title: 'India Hikes',
    youtubeThumbnail: '/img/csr/india-hikes.webp',
    alt: 'India Hikes',
    url: 'https://www.youtube.com/embed/ZcBEya8vjhM?si=tIfoC7qH-tyRWY7a&autoplay=1',
  },
  // {
  //   id: 4,
  //   title: 'Seva Mob',
  //   youtubeThumbnail: '/img/csr/ep-128.webp',
  //   url: 'https://sevamob.com/&autoplay=1',
  // },
  {
    id: 5,
    title: 'Menstrual Educator',
    youtubeThumbnail: '/img/csr/menstrual-educator.webp',
    alt: 'Menstrual Educator',
    url: 'https://www.youtube.com/embed/yrDCYypBW2o?si=WWum5PBdtC7tJ95l&autoplay=1',
  },
  {
    id: 6,
    title: 'iKure',
    youtubeThumbnail: '/img/csr/ikure.webp',
    alt: 'ikure',
    url: 'https://www.youtube.com/embed/WAVkQAKMMIA?si=vLw0FJpTHpFTen0C&autoplay=1',
  },
  {
    id: 7,
    title: 'Pollinate Energy',
    youtubeThumbnail: '/img/csr/pollinate-energy.webp',
    alt: 'pollinate energy',
    url: 'https://www.youtube.com/embed/3PpzG7Qd8gA?si=Y3lD_CPZF2SLCbR5&autoplay=1',
  },
  {
    id: 8,
    title: 'Dream a Dream',
    youtubeThumbnail: '/img/csr/dream-a-dream.webp',
    alt: 'dream a dream',
    url: 'https://www.youtube.com/embed/u7oeKM-6SWM?si=YWUfzLw0knpiBdcQ&autoplay=1',
  },
  {
    id: 9,
    title: 'Enable India',
    youtubeThumbnail: '/img/csr/enable-india.webp',
    alt: 'enable India',
    url: 'https://www.youtube.com/embed/O-Nw-ZnCcco?si=epEZHW0KAQ8NAbGs&autoplay=1',
  },
  {
    id: 10,
    title: 'Afforest',
    youtubeThumbnail: '/img/csr/afforest.webp',
    alt: 'The Afforestter',
    url: 'https://www.youtube.com/embed/BVoifmZCfNc?si=Vt3TWvLs25nxJV-Z&autoplay=1',
  },
]

const TestimonialData = [
  {
    key: 0,
    quote:
      'What can I say about Chai with Lakshmi? Firstly, it was a pleasure talking to Lakshmi. She created a space for genuine conversation in a high-quality production setting that made people sit up and notice. The subsequent viewership helped many people to truly know the substance that Enable India stands for. This was in our early days and was pivotal in our journey to where we have reached today! For me what stands out is that she is ahead of her times to give social innovators such spaces to communicate.',
    name: 'Shanti Raghavan',
    designation: 'Founder',
    company: 'Enable India',
    image: {
      srcSet:
        '/img/testimonials/Shanti.jpg 533w, /img/testimonials/Shanti.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
      'My interview with you helped me to articulate my scattered thoughts and make a roadmap for the future. Though we were in a super early stage, you gave us a chance and treated me as if I had already made it big. We spoke about the larger mission, going global, institutionalizing our work, none of it was done, but it was up there in our thoughts. Now I watch our interaction and realize that you helped me articulate and later manifest things that are happening right now. Thanks a lot again for giving me that opportunity in the early days of Afforestt.',
    name: 'Shubhendu Sharma',
    designation: 'Founder',
    company: 'Afforestt',
    image: {
      srcSet:
        '/img/testimonials/shubhendu-sharma.jpg 533w, /img/testimonials/shubhendu-sharma.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 2,
    quote: `I am deeply thankful for the opportunity to have been featured on The Lakshmi Rebecca Show. The interview was not just a chance to talk about Frontier Markets; it was an authentic reflection of my journey and the passion driving our mission. Lakshmi's storytelling captured the heart of our work, resonating with viewers in a profound way. The episode has been invaluable in raising awareness about Frontier Markets and fostering connections with a much wider audience. I am truly grateful for the platform and highly recommend The Lakshmi Rebecca Show to fellow changemakers seeking to share their story.`,
    name: 'Ajaita Shah',
    designation: 'Founder',
    company: 'Frontier Markets',
    image: {
      srcSet:
        '/img/testimonials/Ajaita-Shah.jpg 533w, /img/testimonials/Ajaita-Shah.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

export const CSRPage = () => {
  const [youTubeUrl, setYouTubeUrl] = useState(null)
  const [herovideoOpen, setHerovideoOpen] = useState(false)

  const onModalOpen = (e, url) => {
    setHerovideoOpen(true)
    setYouTubeUrl(url)
    e.stopPropagation()
  }

  useEffect(() => {
    if (!herovideoOpen) {
      setYouTubeUrl(null)
    }
  }, [herovideoOpen])

  const sliderRef1 = useRef()
  const sliderRef2 = useRef()
  const [slider1Progress, setSlider1Progress] = useState(0)
  const [slider2Progress, setSlider2Progress] = useState(0)

  const isSlider1PrevDisabled = slider1Progress === 0
  const isSlider1NextDisabled = slider1Progress === 1

  const isSlider2PrevDisabled = slider2Progress === 0
  const isSlider2NextDisabled = slider2Progress === 1

  return (
    <>
      <SEO
        title="How we give back to society and animals | Makerrs"
        description="We support amazing causes. From street cats in Mumbai to social entrepreneurs across India—here’s how we give back and support the world we are grateful for."
        url="https://www.makerrs.com/impact"
      />

      <section className="bg-white py-15 md:py-30">
        <div className="container">
          <h1 className="text-[56px] tracking-[-1px] md:text-[72px] lg:text-[120px] uppercase leading-[100%] md:tracking-[-1.92px] font-everett font-medium">
            GIVING BACK & COMMUNITY
          </h1>
          <p className="text-sm md:text-accordion-large font-semibold max-w-[1153px] mt-4 md:mt-20">
            From street cats in Mumbai to entrepreneurs the world over - here’s how we give back and support the world we are grateful for.
          </p>

          <div style={{ display: 'none' }}>
            <h2>Stories Of Social Impact</h2>
            <h2>Impact Entrepreneurship</h2>
            <h2>Lakshmi Rebecca Show</h2>
            <h2>Talk Show</h2>
            <h2>Volunteering</h2>
            <h2>Interviewing Entrepreneurs</h2>
            <h2>Volunteering Work</h2>
            <h2>ESG</h2>
            <h2>Social Responsibility</h2>
            <h2>CSR</h2>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-15 pb-0 md:pt-0 md:pb-0 bg-rb-service-grey">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="block md:hidden px-4">
              <LineHeading className="mb-6 md:mb-9">
                Caring for Homeless Animals
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
                Feeding Street Cats in Mumbai
              </h3>
            </div>

            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/img/impact/cat_1.webp"
                width="1416"
                height="1580"
              />
              <img
                srcSet="/img/impact/cat_1.webp"
                alt="Cat"
                width="708"
                height="790"
                className="w-full"
              />
            </picture>
          </div>
          <div className="w-full md:w-1/2 pt-12 md:pt-0 px-4 md:pl-14 max-w-[586px]">
            <div className="hidden md:block">
              <LineHeading className="mb-6 md:mb-9">
               Caring for Homeless Animals
              </LineHeading>
              <h3 className=" text-title md:text-title-md font-everett font-medium mb-6 md:mb-8">
               Feeding Street Cats in Mumbai
              </h3>
            </div>
            <p className="text-lg text-rb-black/80">
             For the past couple of years, we have had the opportunity to support the feeding street cats in Mumbai via our colleague and friend, Debarti Banerjee
              (
              <a
                href="https://www.linkedin.com/in/debarti-banerjee-2899b7249/"
                className="underline hover:text-rb-link-green"
                target="_blank"
              >
                in
              </a>
              ). Debarti is our Vice President of Operations, and for the last 20 years has been feeding hundreds of street cats and dogs in Mumbai every single day. Our little contribution to Debarti’s work has sponsored 18,000 cat meals over the past 2 years. In other words, we have been helping feed 25 stray cats every day for the last 24 months. 
            </p>
          </div>
        </div>

        <div className="pt-8 md:pt-8 pb-0 ">
          <div className="container">
            <Swiper
              onSwiper={(swiper) => (sliderRef1.current = swiper)}
              spaceBetween={12}
              slidesPerView={1}
              className="swiper-overflow-visible"
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              onSlideChange={(swiper) => {
                setSlider1Progress(swiper.progress)
              }}
            >
              {catList.map(({ id, thumbnail, alt }) => (
                <SwiperSlide key={id}>
                  <div className="h-[240px] overflow-hidden mb-4 relative">
                    <img
                      src={thumbnail}
                      className="w-full h-full object-cover"
                      alt={alt || ''}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-6 justify-end mb-4 md:mb-0 w-full">
              <div>
                <SliderButton
                  left
                  onClick={() => {
                    sliderRef1.current.slidePrev()
                  }}
                  disabled={isSlider1PrevDisabled}
                />
                <SliderButton
                  className="ml-1"
                  onClick={() => {
                    sliderRef1.current.slideNext()
                  }}
                  disabled={isSlider1NextDisabled}
                />
              </div>
            </div>
          </div>
        </div>

        <Testimonials
          title={'A Note from Debarti'}
          className="pb-15 md:pb-30 pt-0 !bg-rb-service-grey"
          testimonialData={Testimonial_1}
          htmlQuote="true"
          type="semi"
          widthClassName="md:w-max"
          imageCustomClass="md:w-[318px]"
        />
      </section>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(csrSchema)}
      </Script>
    </>
  )
}

export default CSRPage
