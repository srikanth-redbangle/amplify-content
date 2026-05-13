import React, { useEffect, useState } from 'react'
import { LineArrow } from '@/components/icons'
import { LineHeading, Marquee, SEO, RollupNumber } from '@/components/shared'
import { Button } from '@/components/ui'
import { useFilterObserver } from '@/hooks'
import { schemaCareer } from '@/components/schema/career-schema'
import Script from 'next/script'
import axios from 'axios'
import statsStyles from '@/styles/sections/StatsSection.module.scss'

const Career = () => {

  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 60,
        suffix: <span className="text-rb-red">+</span>,
      },
      text: (
        <span className="md:max-w-[188px]">
          brands <br />
          powered
        </span>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 3,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          creative <br />projects
        </>
      ),
    },
    {
      id: 2,
      countUpProps: {
        value: 1,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text:
        <>
          creators <br />
          and makerrs
        </>,
    },
     {
      id: 3,
      countUpProps: {
        value: '30',
        suffix: (
          <span className="inline-flex">
            <span className="text-rb-red">+</span>
          </span>
        ),
      },
      text:
        <>
          amazing <br />
          team members
        </>,
    }
  ]

  const { ref, ...filterProps } = useFilterObserver({
    threshold: 0.3,
  })
  const [filterPopup, setfilterPopup] = useState(0)
  const [careerFilterTabs, setcareerFilterTabs] = useState(0)
  const [jobOpenings, setJobOpenings] = useState([])
  const [displayCount, setDisplayCount] = useState(5)

  const [selectedIndustry, setSelectedIndustry] = useState([])
  const [selectedLocation, setSelectedLocation] = useState([])

  const clearSelection = () => {
    setSelectedIndustry([]) // Clear the selected industries
    setSelectedLocation([])
  }

  const handleCheckboxIndustry = (industry) => {
    if (selectedIndustry.includes(industry)) {
      setSelectedIndustry(selectedIndustry.filter((item) => item !== industry))
    } else {
      setSelectedIndustry([...selectedIndustry, industry])
    }
  }
  const handleCheckboxLocation = (city) => {
    if (selectedLocation.includes(city)) {
      setSelectedLocation(selectedLocation.filter((item) => item !== city))
    } else {
      setSelectedLocation([...selectedLocation, city])
    }
  }

  const filteredJobOpenings = jobOpenings.filter(
    (job) =>
      (selectedIndustry.length === 0 ||
        selectedIndustry.includes(job.Client_Name.name)) &&
      (selectedLocation.length === 0 || selectedLocation.includes(job.City)) &&
      job.Publish
  )

  function careerFilterTabsTrigger(value) {
    return () => {
      setcareerFilterTabs(value)
    }
  }

  const toggleFilterPopup = () => {
    setfilterPopup((filterPopup) => !filterPopup)

    const bodyElement = document.body

    if (!filterPopup) {
      // If the filterPopup is open, add the disable-scroll class
      bodyElement.classList.add('disable-scroll')
      bodyElement.setAttribute('data-lenis-prevent', '')
    } else {
      // If the filterPopup is closed, remove the disable-scroll class
      bodyElement.classList.remove('disable-scroll')
      bodyElement.removeAttribute('data-lenis-prevent')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://eldtosyzy4.execute-api.eu-north-1.amazonaws.com/prod/jobs',
          {
            headers: {
              'x-apigateway-event': "sample",
              'x-apigateway-context': "jobs",
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.data) {
          throw new Error('Failed to fetch data')
        }

        const jsonData = response.data

        setJobOpenings(jsonData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const loadMore = () => {
    setDisplayCount(displayCount + 5)
  }

  const uniqueIndustries = [
    ...new Set(
      jobOpenings
        .filter((job) => job.Publish === true)
        .map((job) => job.Client_Name.name)
    ),
  ];
  const uniqueLocations = [...new Set(jobOpenings.map((job) => job.City))]
  return (
    <div>
      <SEO
        title="Careers at Global Creative Agency & Network | Makerrs"
        description="Work with top brands on strategy, branding, design, videos, podcasts, campaigns and production. Grow your career in a fun, open environment. Explore opportunities today."
        keywords="Career opportunities, Job opportunities, Careers, Career openings, Jobs, Employment opportunities, Best workplaces, Workplaces, Career options, Work opportunities, Job listing, Creative job, Creative careers, Job vacancies, Job hiring, Job postings, Dynamic environment, Team, Dynamic team"
      />

      <section className="py-16 md:py-30 bg-rb-mercury">
        <div className="container">
          <h1 className="font-everett text-[32px] md:text-[64px] xl:text-[120px] font-normal mb-8 md:mb-18 leading-[100%] uppercase">
            CALLING MAKERRS & CREATORS
          </h1>

          <p className="text-sm md:text-accordion-large font-semibold max-w-[1153px] mb-10 md:mb-16">
            Come, disrupt and delight, inspire culture and curiosity, and launch and scale beautiful brands across the world.
          </p>

          <div style={{ display: 'none' }}>
            <h2>Career Opportunities in Advertising Agency</h2>
            <h2>Join Our Team of Creative Marketing experts</h2>
            <h2>Employment At Makerrs</h2>
            <h2>Job Openings in Creative Marketing and Digital Campaign</h2>
            <h2>Work With Us in Creative Agency</h2>
            <h2>Careers In Marketing Digital Campaign</h2>
            <h2>Career Development in Creative Marketing</h2>
            <h2>Team Culture in Advertising Agency</h2>
            <h2>Apply Now for Creative Marketing career</h2>
            <h2>Hiring Digital Campaign experts</h2>
          </div>

          <Button
            suffix={<LineArrow hover />}
            className="inline-flex uppercase"
            href="#open-roles"
          >
            Explore open roles
          </Button>
        </div>
      </section>

      <section className={`bg-white overflow-hidden pt-15 md:pt-30 md:pb-7.5`}>
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">WE CRAFT BORDERLESS BRANDS & NARRATIVES</LineHeading>
         <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none ml-5 transform transform -translate-x-5 sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-12">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statsStyles.statline}`}
                key={s.id}
              >
                <div className={`${i == 2 && 'lg:ml-[20%]'} ${s.id === 3 ? 'ipad-mini-ml':''}`}>
                  <div className='lg:w-fit lg:mx-auto'>
                    <div className={`${s.id === 1 ? '!-ml-[4px] md:!-ml-[8px]':''} ${s.id === 0 ? '!-ml-[4px] md:!-ml-[7px]':''} ${s.id === 2 ? '!-ml-[2px] md:!-ml-[3px]':''} ${s.id === 3 ? '!-ml-[3px] md:!-ml-[5px]':''}`}>
                        <RollupNumber {...s.countUpProps} />
                      </div>
                    <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                      {s.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-0 overflow-hidden">
        <div className="py-16 md:py-30">
          <div className="container">
            <LineHeading className="mb-7">OUR TENETS</LineHeading>

            <h2 className="text-title md:text-title-md font-bold  mb-6">
              Building a great team
            </h2>

            <p className="text-base md:text-2xl mb-8 opacity-90">
              We win some, we lose some. But through it all, what’s most important to us is how
              we treat each other, and the value we deliver for our clients. Here are the tenets
              that guide us in our creative journey.
            </p>

            <div className="pt-10 grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  id: 0,
                  icon: '/img/career/icon1.svg',
                  title: 'Equality',
                  description:
                    'We strive to treat everyone equally and merit those who deliver on their professional commitments with skill, determination and leadership.',
                },
                {
                  id: 1,
                  icon: '/img/career/icon2.svg',
                  title: 'Respect',
                  description:
                    'We respect and recognise that everyone is unique in their own way.',
                },
                {
                  id: 2,
                  icon: '/img/career/icon3.svg',
                  title: 'Ownership',
                  description:
                    'We find that there is no better inspiration than when individuals own their ideas and bring them life with passion.',
                },
                {
                  id: 3,
                  icon: '/img/career/icon4.svg',
                  title: 'Creativity',
                  description:
                    'In everything we create, we strive to deliver an amazing experience for the consumer.',
                },
                {
                  id: 4,
                  icon: '/img/career/icon5.svg',
                  title: 'Time & Value',
                  description:
                    'We strive to create solutions that drive value for our clients. We understand the client context and strike a balance between business value, creative value and on-time delivery.',
                },
                {
                  id: 5,
                  icon: '/img/career/icon6.svg',
                  title: 'Empathy',
                  description:
                    'Not all days are good days. But everyday is a chance to treat each other with empathy and honesty.',
                },
                {
                  id: 6,
                  icon: '/img/career/icon7.svg',
                  title: 'Growth',
                  description:
                    'We evolve together and are open to ideas from everyone.',
                },
              ].map(({ id, icon, title, description }) => (
                <div
                  className="bg-rb-service-grey rounded-lg md:py-8 md:px-7 p-4"
                  key={id}
                >
                  <div className="mb-4 w-15 h-15">
                    <img src={icon} alt={title} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-base opacity-80">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <section className="overflow-hidden">
          <div className="mb-6">
            <Marquee duration={60}>
              {[
                { id: 0, img: '/img/career/career-thumb-15.webp' },
                { id: 0, img: '/img/career/career-thumb-18.webp' },
                { id: 0, img: '/img/career/career-thumb-10.webp' },
                { id: 0, img: '/img/career/career-thumb-16.webp' },
                { id: 0, img: '/img/career/career-thumb-2.webp' }

              ].map(({ id, img }) => (
                <div
                  key={id}
                  className="h-[200px] md:h-[380px] overflow-hidden grow mx-3"
                >
                  <img src={img} className="w-full h-full object-cover" alt="career" />
                </div>
              ))}
            </Marquee>
          </div>
          <div>
            <Marquee duration={60} direction={-1}>
              {[
                { id: 0, img: '/img/career/career-thumb-8.webp' },
                { id: 3, img: '/img/career/career-thumb-20.png' },
                { id: 0, img: '/img/career/career-thumb-19.png' },


                { id: 3, img: '/img/career/career-thumb-21.png' },
                { id: 3, img: '/img/career/career-thumb-22.png' },
                { id: 3, img: '/img/career/career-thumb-23.png' },
              ].map(({ id, img }) => (
                <div
                  key={id}
                  className="h-[200px] md:h-[380px] overflow-hidden grow mx-3"
                >
                  <img src={img} className="w-full h-full object-cover" alt="career" />
                </div>
              ))}
            </Marquee>
          </div>
        </section> */}




      </section>

      <section className="py-15 md:pt-7.5 md:pb-7.5">
        <div className="container">
          <LineHeading className="mb-8">MAKERRS PERKS</LineHeading>
          <h2 className="font-everett text-2xl md:text-7xl mb-6 md:mb-18">
           Employee Benefits and Rewards
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-18">
            {[
              {
                id: 0,
                title: 'Rewards & Recognition',
                description:
                  'Our annual offsite is where the best performing individuals and teams are recognised. Awards include trophies, certificates and goodies.',
              },
              {
                id: 1,
                title: 'Stock Options',
                description:
                  'For those who show exceptional commitment, growth and leadership – we roll out Employee Stock Options.',
              },
              {
                id: 2,
                title: 'Remote Work',
                description:
                  'Most of us work remotely. We have the culture and the systems to support remote collaboration.',
              },
              {
                id: 3,
                title: 'In-person Work',
                description:
                  'For those in the same city, there’s ‘Together Tuesdays’ - where we work together once a week at a coworking space.',
              },
              {
                id: 4,
                title: 'Compensatory Off',
                description:
                  'Work on a Sunday or a public holiday, and you’ll be earning a comp off.',
              },
              {
                id: 5,
                title: 'Holidays',
                description:
                  'We offer 25 personal days off in a year and 10 public holidays.',
              },
              {
                id: 6,
                title: 'Family & Recovery Leave',
                description:
                  'We offer paid maternity, paternity, adoption leave to full time employees.',
              },
              {
                id: 7,
                title: 'Mental Health',
                description:
                  'Life has its ups and downs, and so do we. Should you need a professional counselor, we have a handpicked service provider whom we can refer to.',
              },
              {
                id: 8,
                title: 'Health Insurance',
                description:
                  'Once you complete your probation period, we automatically add you to our Group Health Insurance cover.',
              },
              {
                id: 9,
                title: 'Emotional Wellbeing',
                description:
                  'Life has its ups and downs, and so do we. Should you need a professional counselor, we have a curated service provider we can refer you to.',
              }
            ].map(({ id, title, description }) => (
              <div key={id}>
                <h4 className="font-everett mb-1 text-7xl md:text-[86px]">
                  {id > 8 ? id + 1 : `0${id + 1}`}

                  <span className="text-rb-red">.</span>
                </h4>
                <p className="text-lg font-semibold mb-2">{title}</p>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="overflow-hidden">
        <div className="mb-6">
          <Marquee duration={60}>
            {[
              // {
              //   id: 0,
              //   img: '/img/career/career-thumb-6.webp',
              // },
              {
                id: 1,
                img: '/img/career/career-thumb-7.webp',
              },
              {
                id: 2,
                img: '/img/career/career-thumb-8.webp',
              },
              {
                id: 3,
                img: '/img/career/career-thumb-9.webp',
              },
              {
                id: 4,
                img: '/img/career/career-thumb-10.webp',
              },
              {
                id: 5,
                img: '/img/career/career-thumb-11.webp',
              },
              {
                id: 0,
                img: '/img/career/career-thumb-12.webp',
              },
              {
                id: 6,
                img: '/img/career/career-thumb-13.webp',
              },
              {
                id: 7,
                img: '/img/career/career-thumb-14.webp',
              },
              {
                id: 8,
                img: '/img/career/career-thumb-17.webp',
              },
              {
                id: 9,
                img: '/img/career/career-thumb-18.webp',
              },
            ].map(({ id, img }) => (
              <div
                key={id}
                className="h-[200px] md:h-[380px] overflow-hidden grow mx-3"
              >
                <img src={img} className="w-full h-full object-cover" alt="career" />
              </div>
            ))}
          </Marquee>
        </div>

      </section> */}

      <section className="py-16 md:py-30 " id="open-roles">
        <div className="container" ref={ref}>
          <div
            data-state={filterProps.inView ? 'open' : 'closed'}
            data-visible={filterProps.state == 'closed'}
            className={
              'fixed bottom-10 left-0 right-0 transition-all group opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible flex justify-center z-40'
            }
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
          <LineHeading className="mb-7">WE ARE HIRING</LineHeading>

          <h2 className="text-title md:text-title-md font-bold md:mb-18 mb-6">
            Take a look at our open positions
          </h2>

          <div className="mt-20 group">
            {filteredJobOpenings.slice(0, displayCount).map(
              ({
                id,
                Job_Type,
                Job_Opening_Name,
                City,
                Industry,
                Job_Description,
                Publish,
                Job_Summary,
                Client_Name,
              }) =>
                Publish && (
                  <a
                    key={id}
                    href={`https://redbangle.zohorecruit.in/jobs/Careers/${id}`}
                    target="_blank"
                    className="group-hover:opacity-60 hover:!opacity-100 hover:text-black group-hover:text-rb-black duration-300 ease-out items-center border border-rb-stroke-dark rounded-xl md:rounded-3xl mb-6 p-6 md:py-16 md:px-10 grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <p className="text-xl md:text-2xl font-semibold mb-2">
                        {Job_Opening_Name}
                      </p>

                      <div className="flex gap-4 pseudo-right-lines">
                        <p>{Client_Name.name}</p>
                        <p>{Job_Type}</p>
                        <p>{City}</p>
                      </div>
                    </div>

                    <div>
                      <p className="md:text-base text-sm opacity-90 mb-4 job-desc-line3clamp">
                        {Job_Summary}
                      </p>

                      <p className="inline-flex gap-2 items-center font-semibold hover:text-rb-link-green">
                        View more
                        <LineArrow className=" max-w-[20px] duration-300 ease-out " />
                      </p>
                    </div>
                  </a>
                )
            )}
          </div>

          {displayCount < filteredJobOpenings.length && (
            <div className="mt-12 text-center">
              <Button
                intent="p-secondary"
                className="mx-auto "
                onClick={loadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>

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
              onClick={careerFilterTabsTrigger(0)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${careerFilterTabs === 0 ? 'text-rb-red' : ''
                }`}
            >
              DEPARTMENT
            </button>
            <button
              onClick={careerFilterTabsTrigger(1)}
              className={`uppercase font-medium text-base md:text-xl mb-4 block duration-300 ease-out ${careerFilterTabs === 1 ? 'text-rb-red' : ''
                }`}
            >
              LOCATIONS
            </button>
          </div>
          <div
            className={`max-h-[360px] md:max-h-[450px] overflow-auto flex-1 ${careerFilterTabs === 0 ? '' : 'hidden'
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
          <div
            className={`max-h-[450px] overflow-auto flex-1 ${careerFilterTabs === 1 ? '' : 'hidden'
              }`}
            data-lenis-prevent
          >
            {uniqueLocations
              .filter((city) => city)
              .map((city) => (
                <div className="custom-checkbox mb-5" key={city}>
                  <input
                    type="checkbox"
                    name="city"
                    id={city}
                    onChange={() => handleCheckboxLocation(city)}
                    checked={selectedLocation.includes(city)}
                  />
                  <label htmlFor={city}>{city}</label>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaCareer)}
      </Script>
    </div>
  )
}

// export async function getStaticProps() {
//   const jobListings = await fetchJobListings()

//   return {
//     props: {
//       jobListings,
//     },
//   }
// }

export default Career
