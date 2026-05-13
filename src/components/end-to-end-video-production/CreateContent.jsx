import React, { useState } from 'react'
import { LineArrow } from '@/components/icons'
import { schemaccsCreate } from '@/components/schema/ccs-create-schema'
import {
  LineHeading,
  TrustedBrandsSection,
  WorkListHeroSection,
} from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui'
import { ccsPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import { useFilterObserver } from '@/hooks'
import Script from 'next/script'
import { ContentCard } from './ContentCard'
import Link from 'next/link'

export default function CreateContent() {
  const _posts = ccsPosts.map(postsMapper)

  const [visiblePosts, setVisiblePosts] = useState(3); // Initial number of visible posts
  const totalPosts = _posts.length;

  const loadMorePosts = () => {
    const nextVisiblePosts = visiblePosts + 3;
    setVisiblePosts(Math.min(nextVisiblePosts, totalPosts));
  };

  const { ref, ...filterProps } = useFilterObserver({
    threshold: 0.3,
  })
  const [filterPopup, setfilterPopup] = useState(0)
  const [careerFilterTabs, setcareerFilterTabs] = useState(0)

  const [selectedIndustry, setSelectedIndustry] = useState([])
  const [selectedBrand, setSelectedBrand] = useState([])

  const clearSelection = () => {
    setSelectedIndustry([])
    setSelectedBrand([])
  }

  const handleCheckboxIndustry = (industry) => {
    if (selectedIndustry.includes(industry)) {
      setSelectedIndustry(selectedIndustry.filter((item) => item !== industry))
    } else {
      setSelectedIndustry([...selectedIndustry, industry])
    }
  }
  const handleCheckboxBrand = (brand) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter((item) => item !== brand))
    } else {
      setSelectedBrand([...selectedBrand, brand])
    }
  }

  function workFilterTabsTrigger(value) {
    return () => {
      setcareerFilterTabs(value)
    }
  }

  const toggleFilterPopup = () => {
    setfilterPopup((filterPopup) => !filterPopup)

    const bodyElement = document.body

    if (!filterPopup) {
      // If the filterPopup is open, adding disable-scroll class
      bodyElement.classList.add('disable-scroll')
      bodyElement.setAttribute('data-lenis-prevent', '')
    } else {
      // If the filterPopup is closed, removing disable-scroll class
      bodyElement.classList.remove('disable-scroll')
      bodyElement.removeAttribute('data-lenis-prevent')
    }
  }

  const uniqueBrands = ['Swiggy', 'Nike', 'Nuebank', 'Vartizo', 'Gucci']
  const uniqueIndustries = [
    'Marketing',
    'Direction',
    'Client Servicing',
    'Creative',
  ]

  return (
    <>
      <SEO
        title="Creative Agency for Brand Promotions"
        description="Go through our creative campiagn case studies that have changed the game for brands."
        keywords="Creative Campaigns, Brand Promotions, Ad Campaigns, Advertising Solutions, Advertising Agency, Advertising Company, Marketing Campaign, Advertising Agency Near Me, Campaign Management, Creative Agency, Email Campaign, Content Marketing Services, Video Production Services, Creative Marketing, Content Marketing In Digital Marketing, Creative Consulting Agency, Digital Marketing Campaign, Drip Campaign, Email Marketing Campaign, Advertising Services, Creative Idea Advertising, Digital Campaign, Brand Video, Top Advertising Agencies, Promotional Campaign, Best Advertising Agencies, Brand Awareness Campaign, Creative Advertising Agency, Advertising Companies Near Me, Creative Strategy In Advertising, Creative Ad Agency, Best Marketing Campaigns, Social Campaign, Lead Generation Campaign, Social Media Advertising Agency, Creative Campaign, Creative Social Media Marketing, Content Marketing Agencies, Best Content Marketing Agency, Best Advertising Companies, Video Production Agency, Creative Ad Campaigns, Creative Marketing Idea, Social Media Marketing Campaign, Creative Digital Marketing Agency, Creative Agency Website, Advertising Agency Website, Video Marketing Agency, Creative Branding Agency, Creative Design Agency, Creative Marketing Agency, Integrated Marketing Campaign, Brand Content Marketing, Branded Content Instagram, Online Advertising Agency, Full Service Advertising Agency, Media Advertising Agency, Advertising Agency Services, Advertising Studio, Video Ad Agency, Creative Marketing Strategies, Brand Advertising Agency, Instagram Branded Content, Marketing And Advertising Agency, Video Marketing Company, Top Creative Agencies, Best Creative Agencies, Advertising Agency In Marketing, Social Media Advertising Agencies, Video Advertising Company, Creative Advertising Solutions, Marketing Campaign Strategy, Brand Content, Branded Content Facebook, Social Media Advertising Companies, Media Advertising Company, Video Production Company, Creative Video Agency, Video Creation Agency, Creative Advertising Campaigns, Content Creative Agency, Creative Agency Services, Video Creative Agency, Advertising Agency Brochure, Content Production Company, Corporate Video Production Agency, Video Creation Company, Content Creative Company, Creative Content Agency, Branded Content Marketing, Video Production Agency Near Me, Brand Video Production, Web Advertising Agency, Video Content Agency, Marketing Video Production Company, Creative Video Production Company, Video Content Creation Agency, Creative Video Production Agency, Branded Content Production Companies, Video Content Production Company, Video Content Company, Video Content Creation Company, Content Production Agency, Creative Content Strategy, Creative Content Specialist, Creative Content Marketing Agency, Creative Content Services, Creative Content Production Company, Creative Content Studios, Creative Content Solutions, Creative Marketing Content, Content And Creative Agency, Creative Content Company, Brand Content Agency, Content Agency Near Me, Content Advertising Agency, Creative Agency Video Production, Full Service Content Agency, Brand And Content Agency, Digital Marketing Creative Content, Creative Video Marketing, Marketing Campaign Company, Marketing Campaign Solution, Marketing Campaign Specialist, Creative Brand Marketing, Best Brand Videos, Branded Content Agency, Branded Video Content, Branded Content Video Production, Brand Video Agency, Branded Content Advertising, Media Brands Content Studio, Branded Content Studio, Creative Content Creation Agency, Creative Content Marketing Company, Creative Content Design Company, Best Creative Content Company, Creative Content Strategy Company, Creative Content Development Agency, Top Creative Content Companies, Content Creation And Design Agency, Innovative Content Company, Commercial Content Agency, Creative Content Marketing Solutions"
        url="https://www.makerrs.com/work/creative-campaigns-for-brand-promotions"
      />

      {/* <WorkListHeroSection
        className="bg-rb-torch-red"
        type="create"
        typeTwo="Work Showcase"
        contentClassName="md:max-w-[1025px]"
        pillImg="/img/create-pill.webp"
        content={
          <>
            Go from creative insights to{' '}
            <h1 className="inline">
              campaign ideas, end-to-end content production
            </h1>
            &nbsp;and distribution in one seamless journey.
          </>
        }
      /> */}
      <div style={{ display: 'none' }}>
        <h2>Creative Agency</h2>
        <h2>Creative Campaigns</h2>
        <h2>Brand Promotions</h2>
        <h2>Ad Campaigns</h2>
        <h2>Advertising Solutions</h2>
      </div>

      <section className="bg-white pt-15 md:pt-30 pb-7.5 md:pb-15">
        <div id='discover' className="container">
          <LineHeading className="mb-6 md:mb-9">
            EFEATURED WORK
          </LineHeading>
          <h3 className="text-title font-inter md:text-title-md mb-10 md:mb-14 md:max-w-[576px] md:tracking-[-2.08px]">
            Here’s a portfolio of work that worked
          </h3>
          {/* <Button
            suffix={<LineArrow />}
            href="/contact"
            className="w-full md:w-auto !inline-flex"
          >
            CREATE WITH US TODAY
          </Button> */}
          <div ref={ref}>
            <div
              data-state={filterProps.inView ? 'open' : 'closed'}
              data-visible={filterProps.state == 'closed'}
              className={
                'fixed bottom-10 left-0 right-0 transition-all group opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible flex justify-center z-40'
              }
              style={{ display: 'none' }}
            >
              <Button
                className="justify-between min-w-[180px] !bg-black"
                int
                onClick={() => {
                  filterProps.onOpen()
                  toggleFilterPopup()
                }}
              >
                FILTER
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
              {_posts.slice(0, visiblePosts).map((p) => (
                <ContentCard key={p.key} {...p} />
              ))}
            </div>
            {visiblePosts < totalPosts && (
              <button
                className="text-center text-[16px] mx-auto mt-[30px] md:mt-12 bg-white text-rb-red hover:bg-rb-red hover:text-white duration-300 border-rb-red border-2 py-[19px] px-[34px] font-bold rounded-full justify-center flex"
                onClick={loadMorePosts}
              >
                SEE MORE WORK
              </button>
            )}
            {visiblePosts >= totalPosts && (
              <Link href={'#discover'}>
                <button
                  className="text-center text-[16px] mx-auto mt-[30px] md:mt-12 bg-white text-rb-red hover:bg-rb-red hover:text-white duration-300 border-rb-red border-2 py-[19px] px-[34px] font-bold rounded-full justify-center flex"
                  onClick={() => setVisiblePosts(3)}
                >
                  SEE LESS
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* <TrustedBrandsSection className="bg-white pt-7.5 pb-15 md:pt-15 md:pb-30" /> */}

      <div
        className={`fixed w-full h-full bg-black/20 backdrop-blur-lg inset-0 flex justify-center items-center z-10  ${filterPopup
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="bg-white cursor-auto p-4 pt-[70px] md:p-6 rounded-2xl z-[999] flex gap-6 md:gap-10 max-w-[95%] md:max-w-[600px] w-full relative">
          <button
            className="absolute right-18 top-6 border-b-[1px] border-[#111010B2] text-[#111010B2]"
            onClick={clearSelection}
          >
            Clear
          </button>

          <button
            onClick={() => {
              filterProps.onClose()
              toggleFilterPopup()
            }}
            className="w-8 h-8 rounded-full bg-rb-mercury flex items-center justify-center  absolute right-7 top-6"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M11 1 1 11M1 1l10 10"
                stroke="#000"
                strokeWidth="1.667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="pr-6 border-r border-r-rb-stroke">
            <button
              onClick={workFilterTabsTrigger(0)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${careerFilterTabs === 0 ? 'text-rb-red' : ''
                }`}
            >
              BRANDS
            </button>
            <button
              onClick={workFilterTabsTrigger(1)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${careerFilterTabs === 1 ? 'text-rb-red' : ''
                }`}
            >
              INDUSTRIES
            </button>
          </div>
          <div
            className={`max-h-[450px] overflow-auto flex-1 ${careerFilterTabs === 0 ? '' : 'hidden'
              }`}
            data-lenis-prevent
          >
            {uniqueBrands.map((brand) => (
              <div className="custom-checkbox mb-5" key={brand}>
                <input
                  type="checkbox"
                  name="brand"
                  id={brand}
                  onChange={() => handleCheckboxBrand(brand)}
                  checked={selectedBrand.includes(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
          <div
            className={`max-h-[360px] md:max-h-[450px] overflow-auto flex-1 ${careerFilterTabs === 1 ? '' : 'hidden'
              }`}
            data-lenis-prevent
          >
            {uniqueIndustries.map((industry, index) => (
              <div className="custom-checkbox mb-5" key={index}>
                <input
                  type="checkbox"
                  name="industry"
                  id={industry}
                  onChange={() => handleCheckboxIndustry(industry)}
                  checked={selectedIndustry.includes(industry)}
                />
                <label htmlFor={industry}>{industry}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaccsCreate)}
      </Script>
    </>
  )
}
