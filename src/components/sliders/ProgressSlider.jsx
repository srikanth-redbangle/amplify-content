import { useRef } from 'react'
import { Scrollbar, A11y } from 'swiper/modules'
import { Swiper } from 'swiper/react'

export const ProgressSlider = ({ children, className = '', ...rest }) => {
  const scrollbarRef = useRef()
  return (
    <>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        className={className}
        scrollbar={{ draggable: true, el: scrollbarRef.current, hide: false }}
        {...rest}
      >
        {children}
        <div className="swiper-scrollbar" ref={scrollbarRef}></div>
      </Swiper>
    </>
  )
}
