import { Swiper } from 'swiper/react'
import { SliderButton } from '../ui'
import { Children, useRef, useState } from 'react'
/**
 *
 * @param {*} type default | half
 * @returns
 */
export const ArrowButtonSlider = ({
  children,
  type = 'default',
  arrowBtnClassName,
}) => {
  const sliderRef = useRef()

  const [slide, setSlide] = useState(0)

  const totalSlide = Children.count(children)
  const props =
    type == 'default'
      ? {}
      : {
          breakpoints: {
            768: {
              slidesPerView: 1.5,
              spaceBetween: 56,
            },
          },
        }
  const isPrevDisabled = slide === 0
  const isNextDisabled = slide === totalSlide - 1
  return (
    <div className="relative">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        className={type == 'default' ? '' : '!overflow-visible'}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex)
        }}
        {...props}
      >
        {children}
      </Swiper>
      {children.length > 1 && (
        <div
          className={` ${
            type == 'default'
              ? 'mt-6 md:mt-0 md:absolute z-[1] right-0 bottom-0'
              : `mt-6 md:mt-10 ${arrowBtnClassName}`
          }`}
        >
          <SliderButton
            left
            onClick={() => {
              sliderRef.current.slidePrev()
            }}
            disabled={isPrevDisabled}
          />
          <SliderButton
            className="ml-1"
            onClick={() => {
              sliderRef.current.slideNext()
            }}
            disabled={isNextDisabled}
          />
        </div>
      )}
    </div>
  )
}
