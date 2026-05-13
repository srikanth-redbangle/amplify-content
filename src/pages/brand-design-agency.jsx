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
  designCards,
  redbanglewayThink,
  serviceVideos,
} from '@/content/services'
import { strategyPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { Accordion } from '@/components/ui'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import {explorecards} from '../utils/dummy'

const Design = ({ setisPopupOpen }) => {
  const _posts = strategyPosts.map(postsMapper)
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

  const createTestimonialData = [
    {
      key: 0,
      quote: (
        <>
          Makerrs brought a unique blend of clarity and creativity—translating
          complex healthcare concepts into a simple brand identity system that
          was &apos;full of heart&apos;. They also created a cohesive website
          experience within incredibly tight deadlines. Their efficiency and
          understanding of our needs were pivotal in successfully launching our
          brand.
        </>
      ),
      name: 'Rinku Agarwal Basu',
      designation: 'COO',
      company: 'Lillia Care',
      image: {
        srcSet: `/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 1,
      quote: (
        <>
          Makerrs was especially impressive with their creative strategy, design
          and copy. They took the colors, the quirky and iconic signages, and
          the energy of the local markets and transformed them into a fresh,
          modern expression for our brand. Our customers are drawn to the unique
          identity, and it&apos;s translated into a love for the food itself.
        </>
      ),
      name: 'KUNCHERIA MARATTUKALAM',
      designation: 'FOUNDER & DIRECTOR',
      company: 'Maratt Group',
      image: {
        srcSet: `/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Makerrs has given us a brand bursting with character and joy! Seeing customers connect with it at our dessert cafe feels incredible.',
      name: 'NAKUL KULKARNI',
      designation: ' CO-FOUNDER',
      company: 'P.U. DINGDING',
      image: {
        srcSet: `/img/testimonials/nakul_1.jpg 533w, /img/testimonials/nakul_1.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
  ]
  const filteredCards = explorecards.filter(card => card.href !== router.pathname);

  const TNC = [
    {
      key: 1,
      title: 'Do you offer end-to-end design solutions?',
      content: (
        <>
          <div>
            We provide end-to-end design solutions, managing every aspect of a
            project from concept to roll out. Our services encompass strategy,
            design, development, deployment, and ongoing support. Our dedicated
            design processes ensure a streamlined experience—whether you need
            comprehensive branding services or a well-designed business
            presentation.
          </div>
        </>
      ),
    },
    {
      key: 2,
      title: 'What are the design services you provide?',
      content:
        'We offer the full spectrum of design services–from brand identity systems, editorial design, to environmental graphics, motion graphics, and experience design. With a great in-house design team and a curated community of creative talent from around the world, we leverage a variety of skills and techniques to bring to life ideas that are fresh and dynamic.',
    },
    {
      key: 3,
      title: 'What’s included in your brand identity solution?',
      content: (
        <>
          <p>
            We create unique, multi-sensory Brand Design Systems—visual, verbal,
            and sonic—for a consistent and impactful brand presence which
            resonates with customers.
          </p>
          <p>
            The first leg involves market research, competitor analysis, and
            immersive brand workshops with the client. Then we cull out a
            creative strategy for the brand, articulate the positioning, brand
            values, and brand story.{' '}
          </p>
          <p>
            Next, we develop a comprehensive brand identity which includes the
            name, brand voice, logo design, typography, iconography, color
            palettes, imagery, and usage guidelines–all of which go into a
            comprehensive Brand Manual.{' '}
          </p>
          <p>
            We also create a stipulated number of relevant brand collaterals.
            These include physical and digital assets that reinforce the new
            brand identity through various use cases, such as business
            stationery, email templates, brochures, websites, posters, games,
            jingles, and other formats.
          </p>
          <p>
            In some cases, we also support brands during the launch phase by
            executing strategic rollouts across key channels, including social
            media.
          </p>
        </>
      ),
    },
    {
      key: 4,
      title: 'Do you handle both digital and physical brand experiences?',
      content:
        'Yes, we design for both digital and physical brand experiences. Our work ranges from environmental graphics for corporate offices to interactive experiences at events.',
    },
    {
      key: 5,
      title: 'Can you help with packaging design?',
      content:
        'Yes, our packaging design services take you from initial concept development to final production-ready designs, no matter which industry.',
    },
    {
      key: 6,
      title: 'How long does it take you to develop a brand identity?',
      content:
        'Depending on the complexity and scope of work, the process can take anywhere from one month to a year. A limited-scope project consisting of logo design, font, and colors may be completed in a few weeks. While a more comprehensive brand identity–covering strategy, brand identity, design collateral, and launch execution–may take a few months.',
    },
    {
      key: 7,
      title: 'What’s your process for creating a brand identity?',
      content: (
        <>
          <div>
            We develop your unique brand identity in 6 progressive steps:
          </div>
          <h3 className="mt-5 font-semibold  text-base">1. Discovery:</h3>
          <div>
            We explore and analyse your business origins, offerings, customer
            segment, competition, etc., through immersive discussions. We also
            host a brand workshop for all stakeholders to gather diverse
            opinions + vision for the brand.
          </div>
          <h3 className="mt-5 font-semibold  text-base">2. Distillation:</h3>
          <div>
            We relay back the focal points from the dialogue, and align all
            parties to lock on business goals, brand vision, brand personality,
            and broad stylistic preferences.
          </div>
          <h3 className="mt-5 font-semibold  text-base">3. Strategy:</h3>
          <div>
            We map out where your brand needs to sit in the minds of your
            customers, crafting a brand differentiator based on research + on
            our own creative hunch!
          </div>
          <h3 className="mt-5 font-semibold  text-base">4. Creative:</h3>
          <div>
            We dive into an iterative creative process, exploring visual styles,
            voice, and personas, to arrive at a unique design direction and
            brand story.
          </div>
          <h3 className="mt-5 font-semibold  text-base">5. Brand:</h3>
          <div>
            We bring the brand to life-compiling all the brand assets and
            identity guidelines into a comprehensive brand manual that captures
            the brand story, logo, imagery, colours, typography, usage
            guidelines, and more!
          </div>
          <h3 className="mt-5 font-semibold  text-base">6. Boom:</h3>
          <div>
            We help you roll out your brand with the big bang it deserves. This
            is an ongoing process of implementation that ranges in scope from
            sales and marketing collateral, launch campaign, website, social
            media, to merchandise.
          </div>
        </>
      ),
    },

    {
      key: 8,
      title: 'Do you work on retainers for ongoing design support?',
      content:
        'Yes, we work on retainers for brands that require ongoing design support. This could be for marketing collateral or communications, packaging, or other requirements. We strive to deliver on-brand consistency and align with your evolving business goals.',
    },
    {
      key: 9,
      title:
        'What industries do you specialize in for brand identity and design?',
      content:
        'With experience in technology, FMCG, healthcare, F&B, manufacturing, aerospace, education, energy, engineering, and pharma-we understand industry-specific demands, design cultures, and market dynamics. We craft compelling brand identities and design solutions with an adaptable approach.',
    },
    {
      key: 10,
      title: 'Do you use AI or other technology in your design process?',
      content: (
        <>
          <div>
            <p>
              We are tech-first in our approach and see AI as a powerful tool to
              solve for faster outcomes, to enhance creativity with new and
              infinite possibilities. We actively integrate technology to
              streamline workflows and to innovate.
            </p>
            <br />
            <p>
              That said, while AI supports our craft, it&apos;s our people who
              shape the brand vision, bring emotion, human connection, and
              uniqueness to ideas and design.
            </p>
          </div>
        </>
      ),
    },
    {
      key: 11,
      title: 'Do you handle experiential design for physical spaces?',
      content: (
        <>
          <div>
            We design interactive and immersive brand experiences that transform
            physical and digital spaces into dynamic storytelling platforms.
            From interactive installations or augmented and mixed reality
            experiences-we design and develop concepts end to end, and even
            recommend suitable hardware for the on-ground roll out.
          </div>
        </>
      ),
    },
    {
      key: 12,
      title: 'What’s included in your design collateral services?',
      content: (
        <>
          <div>
            Our collateral design services include presentation design, brochure
            design, poster design, mailer design, coffee table book design,
            social media creatives, and more.
          </div>
        </>
      ),
    },
    {
      key: 13,
      title: 'How do you approach brand storytelling through design?',
      content: (
        <>
          We articulate a creative strategy that drives the brand&apos;s
          narrative and creates an emotional, value-driven connection with your
          target audience. Everything from the brand voice, colors, typography,
          and imagery to sound and messaging comes together to form a cohesive
          personality for the brand. Through this holistic bundle of traits, we
          tell stories of impact, shared dreams, adventures, or histories to
          build trust and delight for customers.
        </>
      ),
    },
    {
      key: 14,
      title: 'How do you store and deliver final design assets?',
      content: (
        <>
          <div>
            <p>
              All your creative assets get stored on a secure cloud and are
              delivered via our Creative Cloud platform. This ensures easy
              access, smooth project management, organised storage, and easy
              repurposing of creative assets in the future.
            </p>
            <br />
            <p>
              All your creative assets are stored for free for up to a year. You
              can access these anytime to download or share with colleagues. On
              high-profile or confidential projects, asset access can also be
              restricted to select individuals within your organisation.
            </p>
          </div>
        </>
      ),
    },
    {
      key: 15,
      title: 'How do you handle copyright and ownership of design assets?',
      content: (
        <>
          <div>
            With the majority of our work, as stipulated in pre-agreed
            contracts, copyright for creative assets is assigned to the client
            upon receipt of final payment for the commissioned work. However, in
            certain instances, copyright is not transferred in perpetuity.
            Clients may extend such rights for additional durations and
            distribution channels through Makerrs, subject to future
            negotiations and additional licensing fees.
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
        title="Premium Branding and Brand Design Services | Makerrs"
        description="Get brand identity design, packaging design, editorial design, experiential design, motion graphics and more. Build brand differentiation and human connect with us."
        url="https://www.makerrs.com/brand-design-agency"
        keywords="User interface design, Packaging design, Branding and brand identity, Brand design, Designing illustrations, Experiential design, Brand identity design, Editorial design, Top branding agencies, Branding collateral"
      />
      <div id="service-hero">
        <ServiceHeroSection
          className=""
          type="GET DESIGN"
          video={serviceVideos.get_design.video}
          fullVideo={serviceVideos.get_design.fullVideo}
          ctaText="Design with us "
          ctaLink="/contact"
          textColor="#111010"
          content={
            <>
              <h1 className="inline">
                From brand identity systems, experiential design, and event
                branding to editorial design, illustrations, and motion
                graphics-build brand differentiation and human connect with us.
              </h1>
            </>
          }
        />
      </div>
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
          Design with us
        </Button>
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
        tag="Explore Our Design Services"
        title={
          <div className="md:max-w-[620px]">
            Get future-forward design solutions
          </div>
        }
        iconClassName="w-15 h-15"
        cards={designCards}
      />
      <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/design_redbangle_way.png',
          alt: 'design_redbangle_way',
          width: '500',
          height: '500',
        }}
        heading="Explore Our Design Process"
        title="How we design for brand growth"
      />
      <div className="pt-8 md:pt-0">
        <FeaturedWorkSection
          posts={_posts}
          href="/work/design"
          title="Explore Our Design Work"
          btnposition="bottom"
        />
      </div>

      <TrustedBrandsSection
        className="py-12 md:pt-24 md:pb-12"
        heading="Our Clients"
      />
      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
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
export default Design
