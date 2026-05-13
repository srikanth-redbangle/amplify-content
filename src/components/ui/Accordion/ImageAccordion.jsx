import { forwardRef, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import PropTypes from 'prop-types'
import gsap from 'gsap'
import { cx } from 'class-variance-authority'
import { Root, Item, Content, Header, Trigger } from '@radix-ui/react-accordion'
// import { Chevron } from '@/components/icons'

// Duration to stay on the tab 15sec
const DURATION = 10

const ImageAccordion = ({
  data = [],
  image = '',
  video = '',
  defaultValue = '0',
  //   chevron = 'plus',
  imageAccordionContentClassName = '',
  customClass,
  containerClass = '',
}) => {
  const [activeValue, setActiveValue] = useState(defaultValue)
  const [hovered, setHovered] = useState(false)
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const container = useRef()
  useEffect(() => {
    const tl = gsap.timeline()
    const progressLine =
      container.current?.children[activeValue]?.querySelector(
        '[data-underline]'
      )
    if (inView) {
      if (progressLine && !hovered) {
        // will animate progress from 0 to 100% on not hovered tabs
        tl.fromTo(
          progressLine,
          {
            translateX: '-100%',
          },
          {
            translateX: '0%',
            duration: DURATION,
            ease: 'linear',
            onComplete: () => {
              setActiveValue((ak) => {
                const i =
                  ((data || []).findIndex((d) => d?.key === ak) + 1) %
                  data?.length
                if (i >= 0 && data.length > i) {
                  const { key } = data[i]
                  return key
                }
                return ak
              })
            },
          }
        )
      }
      if (progressLine && hovered) {
        tl.fromTo(
          progressLine,
          { translateX: '-100%' },
          { translateX: '0%', duration: 0.5 }
        )
      }
    }
    return () => {
      tl.kill()
    }
  }, [activeValue, hovered, data, inView, entry])
  return (
    <div
      className={`rb-row md:items-start ${containerClass}`}
      data-init={inView}
      ref={ref}
    >
      <div
        className="w-full md:w-7/12"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <Root
          value={activeValue}
          onValueChange={setActiveValue}
          className="w-full"
          type="single"
          ref={container}
          defaultValue={defaultValue}
          //   collapsible
        >
          {data.map(({ key, heading, content }, index) => (
            <ImageAccordionItem key={key} value={key}>
              <ImageAccordionTrigger
                index={index + 1}
                //   chevron={chevron}
                customClass={customClass}
              >
                {heading}
              </ImageAccordionTrigger>
              <ImageAccordionContent className={imageAccordionContentClassName}>
                {content}
                {/* <img
                  className="w-full block md:hidden pt-6 pb-2"
                  key={key}
                  alt=""
                  {...image}
                /> */}
              </ImageAccordionContent>
            </ImageAccordionItem>
          ))}
        </Root>
      </div>
      <div className="w-full md:w-5/12 flex-col items-center flex">
        <div className="grid grid-cols-1 grid-rows-1 md:pr-5">
          {/* {data.map(({ key, image }) => (
            <img
              key={key}
              alt=""
              {...image}
              className="w-full col-start-1 row-start-1 opacity-0 invisible data-[active=true]:opacity-100 data-[active=true]:visible transition-all"
              data-active={key == activeValue}
            />
          ))} */}

          {/* <img alt="" {...image} className="w-full col-start-1 row-start-1 mt-2.5" /> */}
          {image?.src ? (
            <img
              alt={image.alt || ''}
              src={image.src}
              width={image.width}
              height={image.height}
              className="w-full col-start-1 row-start-1 mt-2.5"
            />
          ) : video?.src ? (
            <video
              src={video.src}
              width={video.width}
              height={video.height}
              autoPlay
              muted
              loop
              playsInline
              className="w-full col-start-1 row-start-1 mt-2.5"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

ImageAccordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      heading: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    alt: PropTypes.string,
  }),
  defaultValue: PropTypes.string,
  video: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    alt: PropTypes.string,
  }),
}

const ImageAccordionItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Item
      className={cx(
        'group overflow-hidden border-b border-b-rb-black first:border-t first:border-t-rb-black !border-opacity-15 focus-within:relative focus-within:shadow-[0_0_0_0px] ',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Item>
  )
)
ImageAccordionItem.displayName = 'ImageAccordionItem'

const ImageAccordionTrigger = forwardRef(
  ({ children, className, index, customClass, ...props }, forwardedRef) => (
    <Header className="flex !font-opensans relative">
      <Trigger
        className={cx(
          `${customClass} flex flex-1 cursor-pointer items-center justify-between py-4 md:py-8 font-everett font-medium text-xl leading-6 tracking-[-0.8px] md:text-accordion text-rb-black outline-none transition-all group-data-[state='open']:pb-3 md:group-data-[state='open']:pb-5 md:group-data-[state='open']:text-accordion-large`,
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className="inline-flex text-left items-start flex-col flex-wrap group-data-[state='open']:opacity-100 opacity-50">
          <span className="text-rb-link-green group-data-[state='closed']:hidden text-accordion-medium md:mb-6 mb-2">
            {index != null && `${`${index}`.padStart(2, '0')}`}
            &nbsp;
          </span>
          {children}
        </span>

        {/* <Chevron className="h-6 w-6 transition-transform group-data-[state='open']:rotate-180 text-rb-black/60" /> */}
      </Trigger>
      <span className="absolute top-0 left-0 w-full h-1 overflow-hidden group-data-[state='open']:opacity-100 opacity-0">
        <span
          className="w-full h-full bg-rb-red block -translate-x-full md:opacity-0"
          data-underline
        ></span>
      </span>
    </Header>
  )
)
ImageAccordionTrigger.displayName = 'ImageAccordionTrigger'

const ImageAccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Content
      className={cx(
        'overflow-hidden text-base data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="pb-6 md:pb-12 text-rb-black/80">{children}</div>
    </Content>
  )
)
ImageAccordionContent.displayName = 'ImageAccordionContent'
export { ImageAccordion }
