import { useState, useEffect, useMemo, useRef } from 'react'
import { PlayCard } from '@/components/shared/Cards'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { LineHeading, VideoMetaModal } from '@/components/shared'
import { useRouter } from 'next/router'
import { getPlayWorkDetails } from '@/utils/graphql'
import usePagination from '@/hooks/usePagination'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null
}

export const FeaturedPlayWorkSection = ({
  title = 'Here’s a portfolio of work that worked',
  works = [],
  href = '/work/play',
  featuredTitle,
  tags,
  stickyBg,
  noSideBtn,
  initialTab = 'featured-work'
}) => {
  const [type, setType] = useState(initialTab)
  const [modal, setModal] = useState(INIT_MODAL)

  const router = useRouter()
  const pathname = router.pathname
  const videos = useMemo(
    () => works.filter((w) => w.tags.find((v) => v.slug === type)),
    [type, works]
  )

  const { loadMore, data, hasMore } = usePagination(videos, 8)
  // console.log(works)
  useEffect(() => {
    if (router.query?.work) {
      setModal((prev) => ({ ...prev, loading: true, open: true }))
      getPlayWorkDetails(router.query?.work)
        .then((data) => {
          if (data.status == 'success') {
            setModal((prev) => ({
              ...prev,
              loading: false,
              video: data?.data?.work,
              title: data?.data?.work?.title
            }))
          }
        })
        .catch((err) => {
          setModal(INIT_MODAL)
        })
    } else {
      setModal(INIT_MODAL)
    }
  }, [router.query])



  const [scrollable, setScrollable] = useState(false);
  const [atRightEnd, setAtRightEnd] = useState(false);
  const [atLeftEnd, setAtLeftEnd] = useState(true);

  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;
      setScrollable(isScrollable);
      // const atRightEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
      // setAtRightEnd(atRightEnd);

      // const atLeftEnd = container.scrollRight >= container.scrollWidth - container.clientWidth;
      // setAtLeftEnd(atLeftEnd);
      const atRightEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
      setAtLeftEnd(container.scrollLeft === 0);
      setAtRightEnd(atRightEnd);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += 100; // You can adjust the scrolling amount
    }
  };

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft -= 100; // You can adjust the scrolling amount
    }
  };
  return (
    <section className="py-7.5 md:py-15">
      <div className="container relative">
        {featuredTitle && (
          <>
            <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading>
            <div className="rb-row mb-8 md:items-center">
              <div className="w-full md:w-7/12">
                <h3 className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[963px]">
                  {featuredTitle}
                </h3>
              </div>
              <div className="w-full hidden md:block md:w-5/12">
                {noSideBtn ? (
                  ''
                ) : (
                  <Button
                    suffix={<LineArrow hover />}
                    intent="p-secondary"
                    href={href}
                    className={`md:float-right ${featuredTitle === 'Work that brands and consumers loved'?'hidden':''}`}
                  >
                    EXPLORE WORK
                  </Button>
                )}
              </div>
            </div>
          </>
        )}

        {tags && (
          <>
            <div
              className={`sticky top-0 py-6 md:py-10 z-[1] ${stickyBg ? stickyBg : 'bg-white'
                } ${featuredTitle === 'Work that brands and consumers loved'?'hidden':''}`}
            >
              {/* <div className="flex text-xl leading-5.5 md:text-2xl md:leading-5.5 font-medium font-everett text-rb-black/50 overflow-auto">
                {tags.map(({ key, label, value }) => (
                  <button
                    key={key}
                    onClick={() => setType(value)}
                    data-active={type === value}
                    className="mx-3 md:mx-4 capitalize whitespace-nowrap first:ml-0 data-[active=true]:text-rb-red border-b-[3px] border-b-transparent pb-2.5 data-[active=true]:border-b-rb-red"
                  >
                    {label}
                  </button>
                ))}
              </div> */}
              <div className="relative">
                <div className="flex text-xl leading-5.5 md:text-2xl md:leading-5.5 font-medium font-everett text-rb-black/50 overflow-auto" ref={scrollContainerRef} onScroll={handleScroll}>
                  {tags.map(({ key, label, value }) => (
                    <button
                      key={key}
                      onClick={() => setType(value)}
                      data-active={type === value}
                      className="mx-3 md:mx-4 capitalize whitespace-nowrap first:ml-0 data-[active=true]:text-rb-red border-b-[3px] border-b-transparent pb-2.5 data-[active=true]:border-b-rb-red"
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {scrollable && (
                  <>
                    {!atLeftEnd && (
                      <button className="absolute -top-20 bottom-0 -left-5 ml-2 text-rb-red" onClick={handleScrollLeft}>
                        <FaArrowAltCircleLeft className='bg-white rounded-full text-2xl hover:scale-110 duration-700' />
                      </button>
                    )}
                    {!atRightEnd && (
                      <button className="absolute -top-20 bottom-0 -right-5 mr-2 text-rb-red" onClick={handleScrollRight}>
                        <FaArrowAltCircleRight className='bg-white rounded-full text-2xl hover:scale-110 duration-700' />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        )}

        <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 md:mt-10">
          {data.map((v) => (
            <PlayCard
              onClick={() => {
                router.push(`${pathname}?work=${v.slug}`, undefined, {
                  shallow: true,
                })
              }}
              src={v?.featuredImage?.src}
              name={v?.title}
              company={v?.company?.name}
              key={v.slug}
            />
          ))}
        </div>
        {/* {hasMore && (
          <Button
            className="mt-12 md:mt-16 mx-auto"
            intent="p-secondary"
            onClick={loadMore}
          >
            VIEW MORE
          </Button>
        )} */}

        <VideoMetaModal
          loading={modal.loading}
          open={modal.open}
          video={modal.video}
          title={modal.title}
          setOpen={(v) => {
            router.push(`${pathname}`, undefined, { shallow: true })
            setModal((m) => ({ ...m, open: v }))
          }}
        />
      </div>
      {hasMore && (
        <div className="mt-12 text-center">
          <Button intent="p-secondary" className="mx-auto" onClick={loadMore}>
            SEE MORE WORK
          </Button>
        </div>
      )}
    </section>
  )
}
