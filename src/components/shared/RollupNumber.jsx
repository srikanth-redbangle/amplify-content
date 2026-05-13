import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import styles from '@/styles/ui/RollupNumber.module.scss'
import { Fragment, useEffect } from 'react'

export const RollupNumber = ({ value, prefix, suffix, className = '' }) => {
  const splitText = `${value}`.split('')
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  useEffect(() => {
    const tl = gsap.timeline()
    if (inView) {
      const elms = [...entry.target.querySelectorAll('.digit-wrapper')]

      tl.to(elms, {
        duration: 1.2,
        yPercent: (_, e) => {
          const v =
            -1000 - 100 * (parseInt(e?.parentElement?.dataset?.digit) || 0)
          return v
        },
      })
    }
    return () => tl.kill()
  }, [inView, entry])
  return (
    <div
      className={`text-5xl leading-14 tracking-[-1.44px] md:text-stat overflow-hidden font-everett ${className}`}
    >
      <div className= {`flex-nowrap ${styles.root}`} data-init={inView} ref={ref}>
        {prefix && <div className={styles.char}>{prefix}</div>}
        {splitText.map((d, i) =>
          d == '.' ? (
            <Fragment key={i}>
              <span className="text-rb-link-green">.</span>
            </Fragment>
          ) : (
            <div
              // className={styles.digit}
              className={`${styles.digit} ${parseInt(d) === 1 ? 'lg:-ml-3' : ''}`}
              data-digit={d}
              key={i}
              data-place={splitText.length - i - 1}
            >
              <div className="digit-wrapper text-center">
                0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
              </div>
            </div>
          )
        )}
        {suffix && <div className={styles.char}>{suffix}</div>}
      </div>
    </div>
  )
}
