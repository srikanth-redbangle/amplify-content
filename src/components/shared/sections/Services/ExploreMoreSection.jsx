import Link from 'next/link'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react';
import {LineArrow} from '@/components/icons/LineArrow';


export const ExploreMoreSection = ({ type = 'create', className = '', cards=[], title = 'Explore More Services'}) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <section className="py-6 md:py-12 overflow-hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium mb-10 md:mb-16 font-everett">
              {title}
          </h2>

          {/* Swiper Slider (for md and above) */}
          <div className="hidden md:block">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }}
              modules={[Navigation]}
              className="servicesSlider"
            >
              {cards.map(
                ({ id, serviceTitle, serviceDescription, serviceAmblem, bgColor, href,textColor }) => (
                  <SwiperSlide key={id}>
                    <Link href={href} className="group">
                      <div
                        className={`h-[22rem] p-8 md:p-14 relative overflow-hidden min-h-full md:h-[31rem] border border-rb-black transition-colors duration-300`}>
                        <h3 className="relative text-black text-3xl md:text-6xl font-semibold flex items-center gap-3 mb-15 md:mb-[75px] group-hover:text-rb-link-green">
                          {serviceTitle}
                          <svg
                            width="34"
                            height="32"
                            viewBox="0 0 34 32"
                            fill="none"
                            className="group-hover:translate-x-1 transition-all"
                          >
                            <path
                              d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                              fill={textColor}
                            />
                          </svg>
                        </h3>

                        <p className="text-sm md:text-2xl text-black">{serviceDescription}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            {/* Custom Arrow Navigation Buttons */}
            <div className="md:flex bottom-[-80px] left-0 flex gap-2 justify-start mt-6 md:mt-10">
              <button
                ref={prevButtonRef}
                className="custom-button prev w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center border-2 group"
              >
                <LineArrow className="text-rb-black max-w-[16px] group-hover:text-black" left />
              </button>
              <button
                ref={nextButtonRef}
                className="custom-button next w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center border-2 group"
              >
                <LineArrow className="text-rb-black max-w-[16px] group-hover:text-black" />
              </button>
            </div>
          </div>

          {/* Grid (for mobile) */}
          <div className="block md:hidden">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {cards.map(
                ({ id, serviceTitle, serviceDescription, serviceAmblem, bgColor, href,textColor }) => (
                  // relative px-7.5 py-8 md:p-14 text-white overflow-hidden group bg-rb-torch-red
                  <Link key={id} href={href} className=" relative">
                    <div
                      className={`h-[18rem] p-8 md:p-14 relative overflow-hidden min-h-full md:h-[31rem] border border-rb-black hover:bg-rb-gray/10 transition-colors duration-300`}
                      style={{ backgroundColor: bgColor }}
                    >
                      <h3 className="relative text-black text-3xl font-semibold flex items-center gap-3 mb-8">
                        {serviceTitle}
                        <svg
                          width="34"
                          height="32"
                          viewBox="0 0 34 32"
                         fill="none"
                          className="group-hover:translate-x-1 transition-all"
                        >
                          <path
                            d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                            fill={textColor}
                          />
                        </svg>
                      </h3>

                      <p className="text-sm text-black">{serviceDescription}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

  )
}
