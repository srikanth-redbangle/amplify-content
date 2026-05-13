import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
  Testimonials,
  TrustedBrandsSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  campaignCards,
  campaignCards3,
  serviceVideos,
  campaignCards2,
} from '@/content/services'
import { campaignPosts, explorecards } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { Accordion, Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { useRouter } from 'next/router'

const Campaign = ({ setisPopupOpen }) => {
  const _posts = campaignPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const [isOverlapping, setIsOverlapping] = useState(false)
  const stickyButtonRef = useRef(null)
  const router = useRouter()
  // Observe the hero section and toggle sticky CTA when it scrolls out
  useEffect(() => {
    const hero = document.getElementById('service-hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // when hero is NOT intersecting (scrolled past), set sticky true
        setSticky(!entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const testimonialData = [
    {
      key: 0,
      quote:
        'Working with Makerrs has been an excellent experience. Their team was able to effortlessly transform our communication needs into a well crafted campaign. They have been perceptive in understanding our needs as a business, this is what I believe allowed them to come up with creative ideas for the campaign. The team has smoothly executed the plan for us in a short amount of time, with commendable agility for on the fly changes.',
      name: 'KALP PATEL & AYUSH PATEL',
      designation: 'FOUNDERS',
      company: 'L74 CRAFT CIDERS',
      image: {
        srcSet:
          '/img/testimonials/kalp-patel_ayush-patel-1.jpg 533w, /img/testimonials/kalp-patel_ayush-patel-1.jpg 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote:
        'The Makerrs team is fantastic to work with. They add value not just from a creative standpoint but also in terms of communication strategy.',
      name: 'ROSHAN CARIAPPA',
      designation: 'VICE-PRESIDENT MARKETING',
      company: 'VYMO',
      image: {
        srcSet: `/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'We partnered with Makerrs to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They\’re clued in on the latest trends, are always experimental and open to feedback. They are amazing to work with!',

      designation: 'VP INTERNAL COMMUNICATIONS',
      company: 'FORTUNE 100 ITES ENTERPRISE',
      image: {
        srcSet: `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 3,
      quote:
        'We worked on 2 films with Makerrs and I can confidently say that the output exceeded our expectations. The team was able to come up with a concept that combined the strong recall of popular culture and at the same time incorporated the brand messaging clearly in the campaign. I would highly recommend them as a reliable and kickass creative partner',
      name: 'BHARAT VIRMANI',
      designation: 'Marketing Manager',
      company: 'Games24x7',
      image: {
        srcSet:
          '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]
  const filteredCards = explorecards.filter(card => card.href !== router.pathname);

  const TNC = [
    {
      key: 1,
      title: 'Do you offer end-to-end campaign solutions?',
      content: (
        <>
          <div>
            From insightful communication strategies, to big campaign ideas and
            creatives, exciting campaign plans, and flawless execution across
            formats and locations–Makerrs provides comprehensive campaign
            solutions. Whether it&apos;s for brand marketing, product and
            solution marketing, employer branding, localization or ESG
            campaigns–we support every phase of enterprise growth.
          </div>
        </>
      ),
    },
    {
      key: 2,
      title: 'What types of campaigns do you craft?',
      content:
        'We design and deliver a diverse range of campaigns tailored to your marketing and communication needs. From a single brand awareness campaign film with a landing page to a social media campaign with many creative assets, we support your brand across requirements for digital, offline, events and more.',
    },
    {
      key: 3,
      title: 'What’s included in your campaign services?',
      content:
        'From insightful communication strategies, big campaign ideas and exciting campaign plans to copy, design, production, animation and technology–we offer end-to-end campaign services across mediums and locations.',
    },
    {
      key: 4,
      title: 'Do you handle campaign execution?',
      content:
        'Our teams across strategy, copy, design, production and technology come together to plan, conceptualize and execute exciting creative campaigns. We have a global collaborative of crews to support us with on-ground film and video production across 100 countries. And we have the capability to onboard curated partners for performance marketing as per your campaign needs.',
    },

    {
      key: 5,
      title: 'How long does it take to create and launch a campaign?',
      content:
        'The time required to strategise, plan and create a campaign depends on how unique it is, its scale, as well as its complexity. While a single campaign film and a couple of static creatives can be executed in as little as under a month, a large, more comprehensive marketing campaign may need several months. ',
    },
    {
      key: 6,
      title: 'Do you work on retainers to support long-term campaigns?',
      content:
        'Yes, we engage on a retainer basis to support long-term campaigns and ongoing creative requirements. We allocate talent, project managers and creative heads to ensure every creative is aligned to the brand and the campaign strategy, and is delivered on time.',
    },
    {
      key: 7,
      title: 'What types of short-term campaigns do you create?',
      content:
        'We support a wide range of short-term campaigns. These campaigns could be around a new store launch, festive offer, international days such as Earth Day or business milestones such as 25 years in business. We craft unique ideas, taglines, key visuals and creative assets for your short-term and near-term campaign requirements.',
    },
    {
      key: 8,
      title: 'What types of long-term campaigns do you create?',
      content:
        'Be it for brand building, lead generation, CorpComm or ESG–we support long-term campaign requirements through suitable ideation methodologies, creative processes and staffing models. We engage in project-based models as well as retainers.',
    },
    {
      key: 9,
      title:
        'How do you handle copyright and ownership of the campaign assets?',
      content: (
        <>
          <p>
            With the majority of our work, as per pre-agreed contracts, the
            copyright for creative assets created by us is transferred to the
            client upon receipt of full and final payment for the commissioned
            work.
          </p>
          <br />
          <p>
            In some cases though, the copyright is not assigned or transferred
            for perpetuity. Examples of short-term rights assignment include
            custom-composed music for a TV commercial, celebrities featured in a
            campaign film, etc. Rights are agreed upon with these creators and
            artists on a case-by-case basis, and usually are for a year or three
            to begin with and for specific mediums. The client may extend such
            rights for additional years and mediums via us, at a future date and
            at an additional cost.
          </p>
        </>
      ),
    },
    {
      key: 10,
      title: 'Do you use any technology in your creative process?',
      content: (
        <>
          <p>
            We use a host of tools and platforms in our creative process. Here
            are a few.
          </p>
          <br />
          <p>
            1. Client-Agency Collaboration and Project Management: Our creative
            cloud platform allows us to capture briefs and collaborate with our
            clients, internal teams and our curated global network of creative
            collaborators. Project schedules as well as interactive reviews of
            films and videos, and final asset delivery are all done on the
            cloud–ensuring a high level of efficiency, on-time delivery and zero
            loss of assets.{' '}
          </p>
          <br />
          <p>
            2. Design and Post-production: We work with a suite of
            industry-leading tools such as Photoshop, Premiere Pro, After
            Effects, Adobe Illustrator, Adobe Bridge, Final Cut Pro, Da Vinci
            Resolve, Eleven Labs, Filmora and Adobe Podcast, amongst others. If
            a creative project requires the use of specific tools or technology
            platforms that we don’t have ready subscriptions to, we are happy to
            acquire suitable licenses and deploy the tools at an additional
            cost.{' '}
          </p>
          <br />
          <p>
            3. Research and Copy Writing: We use a range of tools to facilitate
            data gathering, analysis and creative ideation. From Statista, SEM
            Rush and VidIQ to Copy AI and Gemini–we use a wide range of tools to
            strategise, plan and brainstorm creative ideas to ensure the best
            outcome for your brand.{' '}
          </p>
        </>
      ),
    },
    {
      key: 11,
      title: 'How do you store and deliver campaign assets?',
      content: (
        <>
          <div>
            <p>
              We store all our creative assets on a secure cloud and deliver
              them via our proprietary creative cloud platform. Our platform
              ensures zero asset loss and easy repurposing of creative assets in
              the future.{' '}
            </p>
            <br />
            <p>
              The creative assets developed for you are stored for free for up
              to a year. You can access these anytime to download or share with
              colleagues. On high-profile or confidential projects, we have the
              controls to limit asset access to select individuals within your
              organisation.
            </p>
          </div>
        </>
      ),
    },
  ]
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore') // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true)
          setstopVisible(true)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [stopVisible])
  return (
    <>
      <SEO
        title="Campaigns for Marketing, Employer branding & ESG | Makerrs"
        description="Get the marketing campaigns, employer branding campaigns and ESG campaigns for your global brand. Get digital campaigns, print ad campaigns, and more with Makerrs."
        url="https://www.makerrs.com/advertising-agency"
        keywords="Digital campaign, Best digital campaigns, Campaign events, Print ad campaigns, ESG campaigns, Best employer branding campaigns, Best corporate communications campaigns, Best interactive campaigns, Offline campaign"
      />
      <div id="service-hero">
        <ServiceHeroSection
          className=""
          type="GET Campaign"
          video={serviceVideos.get_campaign.video}
          fullVideo={serviceVideos.get_campaign.fullVideo}
          ctaText="Campaign with us"
          ctaLink="/contact"
          textColor="#111010"
          content={
            <>
              <h1 className="inline">
                From brand awareness campaigns and product launch campaigns to
                employer branding campaigns and ESG campaigns–we take our cues
                from people and culture, and turn real insights into relatable
                campaigns that align perfectly with your business goals.
              </h1>
            </>
          }
        />
        <div
          ref={stickyButtonRef}
          className={`hidden fixed bottom-30 right-8 z-20 md:min-w-[190px] transition-opacity duration-300 ease-in-out ${
            isSticky ? 'lg:block' : ''
          } ${isOverlapping ? 'opacity-0' : 'opacity-100'}`}
        >
          <Button
            onClick={() => {
              setTimeout(() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: { type: 'send-us-a-brief' },
                  },
                  undefined,
                  { shallow: true }
                )
              }, 100)
            }}
          className="w-full md:!px-4 md:!h-11 md:text-[0.9rem]"
            suffix={<LineArrow hover />}
          >
            Campaign with us
          </Button>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <h2>Marketing Agency</h2>
        <h2>Holistic Marketing</h2>
        <h2>Marketing Content Strategy</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>
      <ServiceCardSection
        tag="Explore Our Campaign Services"
        title={
          <div className="md:max-w-[620px]">
            Get Campaigns that <br /> Score Big
          </div>
        }
        iconClassName="w-15 h-15"
        cards={campaignCards}
        sectionStyle={{ 'padding-bottom': 0 }}
      />

      <div className="pt-10 md:pt-15">
        <RedbangleWaySection
          data={campaignCards3}
          video={{
            src: '/img/services/campaign/b2b-campaigns-gif.mp4',
            width: '1080',
            height: '1080',
          }}
          heading="The Makerrs Way"
          title="How we craft Campaigns that drive growth for your brand"
          flexValue="md:flex-row"
        />
      </div>

      <ServiceCardSection
        tag="Explore Our Campaign Formats"
        title={
          <div className="md:max-w-[620px]">
            We Execute Campaigns Across Formats
          </div>
        }
        iconClassName="w-15 h-15"
        cards={campaignCards2}
        containerClassName="flex flex-row items-center gap-3 md:gap-6 camaign-cards"
      />

      <div className="pt-8 md:pt-15">
        <FeaturedWorkSection
          posts={_posts}
          href="/work/campaign"
          title="Explore Our Campaign Work"
          btnposition='bottom'
        />
      </div>

      <TrustedBrandsSection className="py-12 md:pt-15 md:pb-12" heading='Our Clients' />

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={testimonialData}
        type="semi"
      />
      <div id="leap-explore" className="py-6 md:py-12">
        <ExploreMoreSection
          type="think"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={filteredCards}
        />
      </div>
      <section className="md:pt-12 pt-6 md:pb-24 pb-12">
        <div className="container">
          <div className="rb-row">
            <div className="w-full md:w-5/12">
              <div className="static md:sticky top-[100px]">
                <h3 className="max-w-[400px] mb-8 text-title-md-tight font-everett text-rb-black !text-[26px] md:!text-[52px]">
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <Accordion
                data={TNC?.map((c) => ({
                  key: `${c.key}`,
                  heading: c?.title,
                  content: c?.content,
                }))}
              />
            </div>
          </div>
        </div>
      </section>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkSchema)}
      </Script>
    </>
  )
}
export default Campaign
