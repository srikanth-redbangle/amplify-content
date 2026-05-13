import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LineHeading } from '../Heading'
import { PostContent } from '../PostContent'
import { useLenis } from '@studio-freight/react-lenis'
import ReactPlayer from 'react-player'
import dayjs from 'dayjs'
import { LineArrow } from '@/components/icons'
import { Button } from '@/components/ui'
import { useRouter } from 'next/router'
export const VideoMetaModal = ({
  loading,
  open,
  setOpen,
  video,
  title,
  points,
  redText,
  showContent = false,
  relatedVideos = [],
  onRelatedVideoClick,
}) => {
  const container = useRef()
  const overlayRef = useRef()
  const lenis = useLenis()
  const router = useRouter()

  const [activeVideo, setActiveVideo] = useState(video)

  const sliderRef = useRef()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  useEffect(() => {
    if (video) setActiveVideo(video)
  }, [video])
  useEffect(() => {
    const onClick = (e) => {
      if (container.current === e.target || overlayRef.current === e.target) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [setOpen])

  useEffect(() => {
    const video = container.current?.querySelector('video')
    if (video) {
      if (open) {
        video.src = video.src
        video.muted = false
        video.play()
      } else {
        video.muted = true
        video.pause()
      }
    }
    if (open) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [open, lenis])

  return (
    <>
      {showContent === false && (
        <div
          data-state={open ? 'open' : 'closed'}
          // data-rb-cursor
          // data-rb-cursor-type="live"
          className="fixed flex items-center justify-center left-0 top-0 z-[999] w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible"
          ref={container}
        >
          <div
            className="absolute w-full h-full modal-blur"
            ref={overlayRef}
          ></div>
          <div className="relative overflow-hidden rounded">
            <button
              aria-label="close modal"
              onClick={() => setOpen(false)}
              className="w-8 h-8 absolute top-4.5 right-4.5 bg-white/10 z-[1] flex items-center justify-center rounded-full"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3307 1.66797L1.66406 12.3346"
                  stroke="white"
                  strokeWidth="1.74545"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66406 1.66797L12.3307 12.3346"
                  stroke="white"
                  strokeWidth="1.74545"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {!loading && open && video && (
              <div
                className="bg-white max-w-[calc(100vw_-_64px)] md:max-w-[calc(100vw_-_128px)] lg:max-w-[calc(60vw_-_128px)] max-h-[90vh] rb-scrollbar overflow-y-auto cursor-auto"
                data-lenis-prevent
              >
                {/* <div className="bg-black aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                playsinline
                loop
                playing
                controls
                url={video?.workDetails?.videolink}
              />
            </div> */}
                <div className="bg-black aspect-video">
                  {[
                    'https://rb-video-poc.s3.ap-south-1.amazonaws.com/infosystopaz/index.html',
                    'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
                  ].includes(video?.workDetails?.videolink) ? (
                    <iframe
                      src={video?.workDetails?.videolink}
                      width="100%"
                      height="100%"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="aspect-video"
                      style={{ border: 0 }}
                    ></iframe>
                  ) : (
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      playsinline
                      loop
                      playing
                      controls
                      key={activeVideo?.workDetails?.videolink}
                      url={video?.workDetails?.videolink}
                    />
                  )}
                </div>
                <div className="flex flex-wrap px-8 py-6 md:px-16 md:py-9 text-sm leading-4 md:text-base">
                  <div className="w-full md:w-2/3 md:px-3">
                    <h3 className=" text-rb-red text-2xl font-semibold">
                      {title}
                    </h3>

                    <PostContent
                      content={video?.content}
                      noMargin
                      className="mt-4 md:mt-6"
                    />
                  </div>
                  <div className="w-full md:w-1/3 mt-8 md:mt-[30px] md:px-3">
                    {/* <h3 className=" text-rb-red text-2xl font-semibold">
                  Project Details
                </h3> */}

                    <ul className="mt-4 md:mt-6 grid grid-cols-1 gap-1">
                      {video?.companies?.nodes?.length > 0 && (
                        <li>
                          Brand -{' '}
                          {video?.companies?.nodes
                            ?.map((n) => n?.name)
                            .join(', ')}
                        </li>
                      )}
                      {video?.tags?.nodes?.length > 0 && (
                        <li>
                          Usage -{' '}
                          {video?.tags?.nodes
                            ?.filter((n) => n?.slug !== 'featured-work')
                            ?.map((n) => n?.name)
                            .join(', ')}
                        </li>
                      )}
                      {video?.usage?.nodes?.length > 0 && (
                        <li>
                          Type -{' '}
                          {video?.usage?.nodes?.map((n) => n?.name).join(', ')}
                        </li>
                      )}
                      {video?.videoDetails?.publish && (
                        <li>
                          Year -{' '}
                          {dayjs(video?.videoDetails?.publish).format('YYYY')}
                        </li>
                      )}
                      {video?.videoDetails?.width &&
                        video?.videoDetails?.height && (
                          <li>
                            Dimensions - {video?.videoDetails?.width} x{' '}
                            {video?.videoDetails?.height}
                          </li>
                        )}
                      {video?.videoDetails?.aspectRatio && (
                        <li>
                          Aspect Ratio - {video?.videoDetails?.aspectRatio}
                        </li>
                      )}

                      {video?.videoDetails?.duration && (
                        <li>Duration - {video?.videoDetails?.duration}</li>
                      )}
                      {video?.videoDetails?.fps && (
                        <li>FPS - {video?.videoDetails?.fps}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {showContent === true && (
        <div
          data-state={open ? 'open' : 'closed'}
          className="fixed flex items-center justify-center left-0 top-0 z-[999] w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible"
          ref={container}
          style={{ cursor: 'default' }}
        >
          <div
            className="absolute w-full h-full modal-blur"
            ref={overlayRef}
          ></div>

          {/* Only this wraps the modal now */}
          <div className="relative overflow-auto rounded">
            {!loading && open && activeVideo && (
              <div
                className="bg-white w-full max-w-[1260px] h-auto max-h-[90vh] overflow-y-auto   rounded-lg shadow-xl relative"
                data-lenis-prevent
              >
                {/* ✅ Close Button moved inside modal box */}
                <button
                  aria-label="close modal"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 sticky top-2 right-4 bg-[#e4dddd] z-[1] ml-auto mr-4  flex items-center justify-center rounded-full  !cursor-pointer"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3307 1.66797L1.66406 12.3346"
                      stroke="black"
                      strokeWidth="1.74545"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66406 1.66797L12.3307 12.3346"
                      stroke="black"
                      strokeWidth="1.74545"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="px-6 pt-6 md:px-10 md:pt-0">
                  <LineHeading className="mb-6 md:mb-[24px]">
                    {redText}
                  </LineHeading>
                  <h3 className="text-black font-medium text-[1.625rem] leading-[1.75rem] tracking-[-0.52px] md:text-[32px] md:leading-[32px] md:tracking-[-1.04px] font-everett">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 px-6 pb-6 md:px-10 md:pb-12 text-sm leading-4 md:text-base pt-[20px]">
                  {/* Video Section */}
                  <div className="w-full  md:w-[676px] flex-none ">
                    <div className={`w-full h-auto ${activeVideo?.workDetails?.videolink === 'https://vimeo.com/1078429989' ? 'bg-rb-black' : ''}`}>
                      {[
                        'https://rb-video-poc.s3.ap-south-1.amazonaws.com/infosystopaz/index.html',
                        'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
                      ].includes(activeVideo?.workDetails?.videolink) ? (
                        <iframe
                          src={activeVideo?.workDetails?.videolink}
                          width="100%"
                          height="100%"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          className="w-full h-full"
                          style={{ border: 0, aspectRatio: '16 / 9' }}
                        ></iframe>
                      ) : (
                        <ReactPlayer
                          url={activeVideo?.workDetails?.videolink}
                          key={activeVideo?.workDetails?.videolink}
                          width="100%"
                          height="100%"
                          playsinline
                          playing
                          loop
                          controls
                          style={{ aspectRatio: '16 / 9' }}
                        />
                      )}
                    </div>
                    {/* ✅ Mobile-Only Related Videos Swiper */}
                    {relatedVideos?.length > 0 && (
                      <div className="mt-6 block md:hidden">
                        <div className="flex justify-end mb-4">
                          <button
                            onClick={() => sliderRef.current?.slidePrev()}
                            disabled={isBeginning || relatedVideos.length <= 2}
                            className="disabled:pointer-events-none disabled:opacity-50 custom-button h-10 md:h-[50px] rounded-8.5 inline-flex w-[66px] justify-center items-center border-2 border-rb-black bg-white text-rb-black"
                          >
                            <LineArrow
                              className="max-w-[16px] group-hover:text-white"
                              left
                            />
                          </button>
                          <button
                            onClick={() => sliderRef.current?.slideNext()}
                            disabled={isEnd || relatedVideos.length <= 2}
                            className="disabled:pointer-events-none disabled:opacity-50 custom-button h-10 md:h-[50px] rounded-8.5 inline-flex w-[66px] justify-center items-center border-2 border-rb-red bg-rb-red text-white ml-1"
                          >
                            <LineArrow className="max-w-[16px] group-hover:text-white" />
                          </button>
                        </div>

                        <Swiper
                          spaceBetween={16}
                          slidesPerView={2}
                          onSwiper={(swiper) => {
                            sliderRef.current = swiper
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                          }}
                          onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning)
                            setIsEnd(swiper.isEnd)
                          }}
                          breakpoints={{
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 24,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 24,
                            },
                          }}
                          style={{ paddingBottom: '10px' }}
                        >
                          {relatedVideos.map((vid, idx) => {
                            const isActive =
                              vid.videolink ===
                              activeVideo?.workDetails?.videolink
                            return (
                              <SwiperSlide
                                key={idx}
                                className="relative group !mr-[12px]"
                              >
                                <button
                                  // onClick={() =>
                                  //   setActiveVideo({
                                  //     ...activeVideo,
                                  //     workDetails: {
                                  //       ...activeVideo.workDetails,
                                  //       videolink: vid.videolink,
                                  //     },
                                  //     content:
                                  //       vid.content || activeVideo.content,
                                  //   })
                                  // }
                                  onClick={() => {
                                    onRelatedVideoClick(vid.videolink)
                                  }}
                                  className="text-left w-full cursor-pointer"
                                >
                                  <div className="relative aspect-[297/176] w-full overflow-hidden mb-3">
                                    <img
                                      src={vid.thumbnail}
                                      alt={vid.title}
                                      width={446}
                                      height={265}
                                      className="w-full h-full object-cover absolute group-data-[playing=true]:opacity-60 transition-all"
                                    />
                                    {isActive && (
                                      <div className="absolute inset-0 bg-white/40 z-10"></div>
                                    )}
                                    {isActive && (
                                      <div className="absolute text-[10px] md:text-xs py-1 px-4 md:py-2 md:px-6 whitespace-nowrap rounded-2xl bg-rb-black text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 group-data-[playing=true]:visible">
                                        Now Viewing
                                      </div>
                                    )}
                                    <span className="capitalize absolute top-1 left-1 text-[12px] font-semibold border border-white text-white py-1 px-3 rounded-full z-30">
                                      {vid.duration}
                                    </span>
                                  </div>
                                  <div className="mt-1 text-xs md:text-[14px] font-medium !font-everett uppercase !tracking-0 leading-[16px] text-black">
                                    {vid.title}
                                  </div>
                                </button>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="w-full">
                    <PostContent
                      content={video?.content}
                      noMargin
                      className="text-rb-black/80 font-opensans font-normal md:text-[18px] text-[16px] leading-[26px] tracking-normal"
                    />

                    {points?.length > 0 && (
                      <div className="mt-[8px] flex flex-col sm:flex-row gap-x-6">
                        <ul className="flex-1 list-none flex flex-col">
                          {points
                            .slice(0, Math.ceil(points.length / 2))
                            .map((point, index) => (
                              <li
                                key={index}
                                className="md:text-[16px] text-[14px] font-semibold text-rb-black tracking-[-0.16px] py-3 border-b border-b-rb-black border-opacity-15"
                              >
                                {point}
                              </li>
                            ))}
                        </ul>
                        <ul className="md:mt-0 flex-1 list-none flex flex-col">
                          {points
                            .slice(Math.ceil(points.length / 2))
                            .map((point, index) => (
                              <li
                                key={index + Math.ceil(points.length / 2)}
                                className="md:text-[16px] text-[14px] font-semibold text-rb-black tracking-[-0.16px] py-3 border-b border-b-rb-black border-opacity-15"
                              >
                                {point}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 md:mt-7">
                      <div className="w-full rounded-3xl md:rounded-full !px-0  items-center lg:w-auto mb-2 lg:mb-0 ">
                        <Button
                          className="w-full mx-auto font-opensans font-bold !text-[14px] !leading-[20px] tracking-[0] uppercase md:!h-[2.75rem] !h-[1.75rem]"
                          onClick={() => {
                            setOpen(false) // Close the modal
                            setTimeout(() => {
                              router.push(
                                {
                                  pathname: router.pathname,
                                  query: { type: 'send-us-a-brief' }, // Update query param
                                },
                                undefined,
                                { shallow: true }
                              )
                            }, 300) // Delay to allow modal animation to finish
                          }}
                          suffix={<LineArrow hover />}
                        >
                          {' '}
                          Send us a brief
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {relatedVideos?.length > 0 && (
                  <div className="md:px-10 pb-10">
                    {/* Mobile Arrows */}

                    {/* Desktop Arrows */}
                    {/* {relatedVideos.length > 2 && (
                      <div className="hidden md:flex justify-start gap-2 mb-4">
                        <button
                          onClick={() => sliderRef.current?.slidePrev()}
                          className="prev w-[66px] h-[50px] rounded-full border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group flex items-center justify-center"
                        >
                          <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" left />
                        </button>
                        <button
                          onClick={() => sliderRef.current?.slideNext()}
                          className="next w-[66px] h-[50px] rounded-full border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group flex items-center justify-center"
                        >
                          <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" />
                        </button>
                      </div>
                    )} */}

                    {/* ✅ Desktop only */}
                    <div className="hidden md:block ">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={2.1}
                        breakpoints={{
                          768: { slidesPerView: 3, spaceBetween: 24 },
                          1024: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        // onSwiper={(swiper) => (sliderRef.current = swiper)}
                      >
                        {relatedVideos.map((vid, idx) => {
                          const isActive =
                            vid.videolink ===
                            activeVideo?.workDetails?.videolink
                          return (
                            <SwiperSlide
                              key={idx}
                              className="!w-[237px] relative group md:!mr-[16px]"
                            >
                              <button
                                // onClick={() =>
                                //   setActiveVideo({
                                //     ...activeVideo,
                                //     workDetails: {
                                //       ...activeVideo.workDetails,
                                //       videolink: vid.videolink,
                                //     },
                                //     content: vid.content || activeVideo.content,
                                //   })
                                // }
                                onClick={() => {
                                  onRelatedVideoClick(vid.videolink)
                                }}
                                className="text-left w-full"
                              >
                                <div className="relative w-full w-[237px] h-[140px] md:aspect-[237/140] overflow-hidden mb-2">
                                  <img
                                    src={vid.thumbnail}
                                    alt={vid.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform group-data-[playing=true]:opacity-60 transition-all"
                                  />
                                  {isActive && (
                                    <div className="absolute inset-0 bg-white/40 z-10"></div>
                                  )}
                                  {isActive && (
                                    <div className="absolute text-[10px] md:text-xs py-1 px-4 md:py-2 md:px-6 whitespace-nowrap rounded-2xl bg-rb-black text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                                      Now Viewing
                                    </div>
                                  )}
                                  <span className="capitalize absolute top-1 left-1 text-[12px] font-semibold border border-white text-white py-1 px-3 rounded-full z-30">
                                    {vid.duration}
                                  </span>
                                </div>

                                <div className="mt-1 text-[14px] font-medium !font-everett uppercase !tracking-0 leading-[18px] text-black">
                                  {vid.title}
                                </div>
                              </button>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
