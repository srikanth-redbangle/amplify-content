import { useEffect, useRef, useState, useCallback, Children } from 'react'
import Link from 'next/link'
import styles from '@/styles/Scrollspy.module.scss'
import elementOffset from '@/utils/elementOffset'
export const Scrollspy = ({ children, centered = false, secStyles = '' }) => {
  const containerRef = useRef(null)
  const rootRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const [menuItems, setMenuItems] = useState([])
  const linkClickHandler = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    const height = parseFloat(getComputedStyle(rootRef.current).height)
    window.scrollTo({
      top:
        elementOffset(
          document.querySelector(
            `[data-spy-id="${new URL(e.target.href).hash.replace('#', '')}"]`
          ),
          'top'
        ) -
        height +
        0.5,
      left: 0,
      behavior: 'smooth',
    })
  }, [])
  const scrollHandler = useCallback(() => {
    if (menuItems.length > 0) {
      let lastID = menuItems[0]?.id ?? ''
      const height = parseFloat(getComputedStyle(rootRef.current).height)
      menuItems.forEach(({ el, id }) => {
        if (window.scrollY > elementOffset(el, 'top') - height) lastID = id
      })

      setActiveSection(lastID)
    }
  }, [menuItems])
  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('[data-spy-id]')
      setMenuItems(
        Array.from(elements).map((el) => {
          el.id = el.dataset.spyId
          return {
            id: el.dataset.spyId,
            title: el.dataset.spyTitle || el.dataset.spyId,
            el,
          }
        })
      )
    }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <div ref={containerRef} className={secStyles}>
      <div className={styles.root} ref={rootRef} >
        <div className="container md:!max-w-full ">
          <div className={styles.linkScrollContainer}>
            <div className={styles.linkcontainer} data-centered={centered}>
              {Children.toArray(children)
                .filter((l) => l?.props['data-spy-id'] != null)
                .map(({ props }) => (
                  <Link
                    key={`${props['data-spy-id']}`}
                    href={`#${props['data-spy-id']}`}
                    className={`${styles.link} !mr-[9px]  !text-[16px] md:!text-[32px] md:!mx-[1.5rem]`}
                    data-active={props['data-spy-id'] === activeSection}
                    onClick={linkClickHandler}
                  >
                    {props['data-spy-title'] || props['data-spy-id']}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
