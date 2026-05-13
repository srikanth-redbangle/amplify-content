import React, { useEffect, useState } from 'react'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import { useRouter } from 'next/router'
import { workPosts } from '@/utils/dummy'
import {
  SEO,
  TrustedBrandsSection,
  WorkListHeroSection,
} from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { aboutSchema } from '@/components/schema/about-schema'
import { WorkDropdown } from '@/components/dropdown/work-dropdown'

const getCountryFromCookie = () => {
  if (typeof document === 'undefined') return null

  const match = document.cookie.match(/user-country=([^;]+)/)
  return match ? match[1] : null
}

const WorkPage = ({ works, selectedvalue = 'featured' }) => {
  const router = useRouter()
  const { category } = router.query;
  const _posts = works
  const caseStudyTags = [
    {
      name: 'Featured',
      url: 'featured',
    },
    {
      name: 'Design',
      url: 'design',
    },
    {
      name: 'Video',
      url: 'videos',
    },
    {
      name: 'Podcast',
      url: 'podcast',
    },
    {
      name: 'Campaign',
      url: 'campaign',
    },
  ]
  const categoryOptions = [
    { name: 'ALL WORK', slug: 'all' },
    { name: 'B2B WORK', slug: 'b2b' },
    { name: 'B2C WORK', slug: 'b2c' },
  ]
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(9)
  const scrollRef = React.useRef(null)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const detectedCountry = getCountryFromCookie()
    setCountry(detectedCountry)
  }, [])

  useEffect(() => {
    const storedVisible = sessionStorage.getItem('work-visiblePosts')
    const storedTag = sessionStorage.getItem('work-selectedTag')

    if (storedTag === selectedTag && storedVisible) {
      setVisiblePosts(parseInt(storedVisible, 10))
    }
    if (storedTag) setSelectedTag(storedTag)
    if (!router.query.work) {
      if (
        selectedvalue &&
        caseStudyTags.some((tag) => tag.url === selectedvalue)
      ) {
        setSelectedTag(selectedvalue)
      } else if (!storedTag) {
        setSelectedTag('featured')
      }
    } else {
      setSelectedTag(router.query.work)
    }
  }, [router.query.work, selectedvalue])

  const saveState = (scrollOverride) => {
    const scroll =
      scrollOverride !== undefined ? scrollOverride : window.scrollY
    sessionStorage.setItem('work-scroll', String(scroll))
    sessionStorage.setItem('work-visiblePosts', String(visiblePosts))
    sessionStorage.setItem('work-selectedTag', selectedTag || 'featured')
    sessionStorage.setItem('work-selectedCategory', selectedCategory || 'all')
  }

  useEffect(() => {
    const scrollToPosts = () => {
      //after hard refresh we need to scrolls tabs section right..for that
      const postsGrid = document.querySelector('.work-posts-section')
      const stickyTabs = document.querySelector('.sticky-tab-section')
      if (postsGrid) {
        const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({
          top: gridTop - stickyHeight - 70,
          behavior: 'smooth',
        })
      }
    }

    const restore = () => {
      const navEntries = performance.getEntriesByType('navigation')
      const isReload = navEntries.length && navEntries[0].type === 'reload'
      const storedTag = sessionStorage.getItem('work-selectedTag')
      const storedScroll = sessionStorage.getItem('work-scroll')
      const storedCategory = sessionStorage.getItem('work-selectedCategory')

      if (storedTag) {
        setSelectedTag(storedTag)
      }
      if (storedCategory) {
        setSelectedCategory(storedCategory)
      }

      if (isReload) {
        // Hard refresh → reset to 6 posts & scroll to tabs
        setVisiblePosts(9)
        sessionStorage.setItem('work-visiblePosts', '9')
        scrollToPosts()
      } else if (storedScroll && !isNaN(parseInt(storedScroll, 10))) {
        // Back/forward navigation → restore posts & scroll
        const storedVisible = sessionStorage.getItem('work-visiblePosts')
        if (storedVisible) setVisiblePosts(parseInt(storedVisible, 10))

        setTimeout(() => {
          window.scrollTo(0, parseInt(storedScroll, 10))
        }, 50)
      } else {
        // First visit → reset to 6 posts (NO SCROLL)
        setVisiblePosts(9)
        sessionStorage.setItem('work-visiblePosts', '9')
      }
    }
    restore()
  }, [])

  useEffect(() => {
    setVisiblePosts(9)
  }, [selectedTag])

  const handleTagClick = (tagUrl) => {
    // Reset visible posts to 9 when switching tab
    setVisiblePosts(9)
    setSelectedTag(tagUrl)

    sessionStorage.setItem('work-visiblePosts', '9')
    sessionStorage.setItem('work-selectedTag', tagUrl)

    // Shallow route update
    // router.push(`/work/${tagUrl}`, undefined, { shallow: true, scroll: false })

    // Scroll to posts
    setTimeout(() => {
      const postsGrid = document.querySelector('.work-posts-section')
      const stickyTabs = document.querySelector('.sticky-tab-section')
      if (postsGrid) {
        const topOffset = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({
          top: topOffset - stickyHeight - 70,
          behavior: 'smooth',
        })
      }
    }, 50)
    setSelectedCategory('all')
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.slug);
    setVisiblePosts(9)   // ✅ RESET pagination
    sessionStorage.setItem('work-visiblePosts', '9')
  };

  const handleSeeMore = () => {
    const newVisible = visiblePosts + 6
    setVisiblePosts(newVisible)
    saveState()
  }

  const handleSeeLess = () => {
    setVisiblePosts(9)
    setTimeout(() => {
      const postsGrid = document.querySelector('.work-posts-section')
      const stickyTabs = document.querySelector('.sticky-tab-section')
      if (postsGrid) {
        const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({
          top: gridTop - stickyHeight - 70,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  const filteredPosts = _posts
    .filter((post) => {
      // 1️⃣ Region filter
      if (post?.workDetails?.region?.length && country && !post?.workDetails?.region.includes(country)) {
        return false
      }

      // 2️⃣ Tag filter
      if (selectedTag) {
        const tagMatch = post.tabs?.some(
          (tab) =>
            typeof tab === 'string' &&
            tab.toLowerCase() === selectedTag.toLowerCase()
        )
        if (!tagMatch) return false
      }

      if (selectedCategory !== 'all') {
        if (!post?.workDetails?.filter_type?.includes(selectedCategory)) {
          return false
        }
      }

      // 3️⃣ No tag selected → show post
      return true
    })
    .sort((a, b) => {
      if (!selectedTag) return 0;

      const orderA = a.workDetails?.tab_order?.[selectedTag] ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.workDetails?.tab_order?.[selectedTag] ?? Number.MAX_SAFE_INTEGER;

      return orderA - orderB;
    })


    .slice(0, visiblePosts)

  return (
    <>
      <SEO
        title="Top Branding, Video Production & Podcast Solutions | Makerrs"
        description="Get great brand design, scalable video production, branded podcast production, and winning creative campaigns for your borderless business."
        url={`https://www.makerrs.com/work/${selectedTag || 'featured'}`}
        keywords="B2B Brands, Brand solutions, B2B Business, Work, Portfolio, Big Ideas, Projects, Work Showcase, Case Study, Case Studies, Creativity, Innovation, B2C Brands, B2C Business"
      />

      <section className="py-14 md:py-24 overflow-hidden bg-rb-mercury text-rb-black ">
        <WorkListHeroSection
          type="Makerrs Work"
          typeTwo="Makerrs Work"
          video1="/img/services/strategy2.mp4"
          video2="/img/services/strategy1.mp4"
          pillImg="/img/who-we-are/about-pill.webp"
          marqueType="img"
          contentClassName="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]"
          content={
            <>
              Big ideas, captivating design, campaign magic and flawless global
              video production. We&apos;re the creative engine behind
              unstoppable brand growth.
            </>
          }
          duration={25}
        />
      </section>

      <div className="container relative bg-white">
        {/* Tags */}
        <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300 sticky-tab-section">
          <div className="relative mt-0 py-6">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-12"
            >
              {caseStudyTags.map((tag) => (
                <a
                  key={tag.url}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleTagClick(tag.url)
                  }}
                  className={`inline-block align-top leading-[1] p-0 m-0 !mr-[9px] text-[32px] font-medium font-everett relative whitespace-nowrap
                   ${selectedTag === tag.url ? 'text-rb-link-green after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px]' : 'text-[#11101080] hover:text-rb-link-green'}`}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {selectedTag === 'podcast' ? (
          <h2 className="w-full text-sm leading-[21px] max-w-[1100px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]">
            Coming Soon!
          </h2>
        ) : (
          <div className="container work-posts-section">
            {['featured', 'videos', 'campaign'].includes(selectedTag) && (
              <div className='blogs-dd mt-6 md:mt-9'>
                <WorkDropdown
                  placeholder={selectedCategory || 'all'}
                  options={categoryOptions}
                  onChange={handleCategoryChange} // Handle the value change
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((p) => (
                  <div key={p.key} onPointerDown={() => saveState()}>
                    <ContentPostCard
                      href={`/${p?.workDetails?.url}/${p.case_study_title}`}
                      page="work"
                      {...p}
                    />
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No case studies available for &ldquo;{selectedTag}&ldquo;
                </p>
              )}
            </div>
          </div>
        )}

        {/* See More / See Less */}
        {filteredPosts.length > 0 && (
          <div className="text-center">
            {(() => {
              // If no tag selected → total is filteredPosts length
              if (!selectedTag) {
                const total = filteredPosts.length

                if (total > 9 && visiblePosts < total) {
                  return (
                    <Button
                      className="w-fit mx-auto mt-[30px] md:mt-15"
                      onClick={handleSeeMore}
                      suffix={<LineArrow />}
                    >
                      SEE MORE
                    </Button>
                  )
                }

                if (total > 9 && visiblePosts >= total) {
                  return (
                    <Button
                      className="w-fit mx-auto mt-[30px] md:mt-15"
                      onClick={handleSeeLess}
                      suffix={<LineArrow />}
                    >
                      SEE LESS
                    </Button>
                  )
                }

                return null
              }

              // Tag selected → count safely
              const total = _posts.filter((post) => {
                // region filter
                if (post?.workDetails?.region?.length && country && !post?.workDetails?.region.includes(country)) {
                  return false
                }

                // tab filter
                const tagMatch = post.tabs?.some(
                  (tab) =>
                    typeof tab === 'string' &&
                    tab.toLowerCase() === selectedTag.toLowerCase()
                )
                if (!tagMatch) return false

                // dropdown category filter
                if (selectedCategory !== 'all') {
                  if (!post?.workDetails?.filter_type?.includes(selectedCategory)) {
                    return false
                  }
                }

                return true
              }).length


              if (total > 9 && visiblePosts < total) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15"
                    onClick={handleSeeMore}
                    suffix={<LineArrow />}
                  >
                    SEE MORE
                  </Button>
                )
              }

              if (total > 9 && visiblePosts >= total) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15"
                    onClick={handleSeeLess}
                    suffix={<LineArrow />}
                  >
                    SEE LESS
                  </Button>
                )
              }

              return null
            })()}
          </div>
        )}
      </div>

      <TrustedBrandsSection className="py-12 md:pt-24 md:pb-12" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      ></script>
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)

  return {
    props: {
      works,
    },
  }
}
export default WorkPage;
