import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CountUp = ({
  useIndianFormat,
  useComma,
  suffix,
  prefix,
  value,
  startValue,
  duration,
  ease,
  animate,
  alwaysCenter,
}) => {
  const ref = useRef()
  const baseRef = useRef()
  useEffect(() => {
    const count = { value: startValue }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        // markers: true,
      },
    })
    const isDecimal = `${value}`.split('.').length > 1

    const formatNumber = (val) => {
      let formatedValue = val.toFixed(isDecimal ? 1 : 0)

      if (useIndianFormat) {
        formatedValue = val.toLocaleString('en-IN')
      } else if (useComma) {
        formatedValue = val.toLocaleString('en-US')
      }
      return `${formatedValue}`
    }
    if (animate) {
      tl.to(count, duration, {
        value,
        ease,
        // roundProps: 'value',
        onUpdate: () => {
          ref.current.innerHTML = formatNumber(count.value)
        },
      })
    }
    baseRef.current.innerHTML = formatNumber(value)
    return () => {
      if (tl) tl.kill()
    }
  }, [animate, duration, ease, startValue, useComma, useIndianFormat, value])
  return (
    <div
      className={`inline-flex ${
        alwaysCenter ? 'justify-center' : 'md:justify-center'
      }`}
    >
      <span className="text-inherit absolute">
        {prefix}
        <span ref={ref}>{value}</span>
        {suffix}
      </span>
      <span className="invisible flex">
        {prefix}
        <span ref={baseRef}></span>
        {suffix}
      </span>
    </div>
  )
}
CountUp.defaultProps = {
  useIndianFormat: false,
  useComma: false,
  value: 0,
  startValue: 0,
  duration: 1.4,
  suffix: '',
  prefix: '',
  ease: 'power1.inOut',
  animate: true,
  alwaysCenter: true,
}
CountUp.propTypes = {
  useIndianFormat: PropTypes.bool,
  useComma: PropTypes.bool,
  value: PropTypes.number,
  startValue: PropTypes.number,
  duration: PropTypes.number,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ease: PropTypes.string,
  animate: PropTypes.bool,
  alwaysCenter: PropTypes.bool,
}
export { CountUp }
