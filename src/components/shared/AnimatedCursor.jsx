import { useAppState } from '@/context'
import styles from '@/styles/ui/AnimatedCursor.module.scss'
import { cx } from 'class-variance-authority'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export const AnimatedCursor = () => {
  const rootRef = useRef()
  const router = useRouter()
  const { cursorRefresh } = useAppState()
  const [state, setState] = useState({
    type: 'default',
    live: false,
    invisible: false,
    blend: false,
    // over: false, //z-index
  })
  const pos = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const onMouseMove = ({ clientX, clientY }) => {
      pos.current.x = clientX
      pos.current.y = clientY
      gsap.to(`.${styles.root}`, {
        duration: 0.05,
        x: pos.current.x ?? 0,
        y: pos.current.y ?? 0,
      })
    }
    const getCursorType = (e) => {
      return e.target.dataset.rbCursorType ?? 'default'
    }
    const getCursorBlend = (e) => {
      return e.target.dataset.rbCursorBlend ?? 'initial'
    }

    const onLinkHoverEnter = (e) => {
      setState((prev) => ({
        ...prev,
        blend: getCursorBlend(e),
        // over: getCursorOver(e),
        type: getCursorType(e),
        live: true,
      }))
    }
    const onLinkHoverLeave = (e) => {
      setState((prev) => ({
        ...prev,
        blend: 'initial',
        type: 'default',
        // over: false,
        live: false,
      }))
    }
    const onInvisibleEnter = (e) => {
      setState((prev) => ({
        ...prev,
        blend: getCursorBlend(e),
        // over: getCursorOver(e),
        type: getCursorType(e),
        invisible: true,
      }))
    }
    const onClick = (e) => {
      setState((prev) => ({
        ...prev,
        blend: e.currentTarget?.dataset?.rbCursorBlendclick?.length
          ? e.currentTarget?.dataset?.rbCursorBlendclick
          : e.currentTarget?.dataset?.rbCursorBlend ?? prev.blend,
        type:
          e.currentTarget?.dataset?.state === 'closed' ? 'close' : 'default',
        live:
          e.currentTarget?.dataset?.state === 'closed' ||
          e.currentTarget?.dataset?.state === 'open',
      }))
    }
    const onInvisibleLeave = (e) => {
      setState((prev) => ({
        ...prev,
        blend: 'initial',
        type: 'default',
        // over: false,
        invisible: false,
      }))
    }

    const links = [
      ...document.querySelectorAll('.button'),
      ...document.querySelectorAll('a[href]'),
      ...document.querySelectorAll('[data-rb-cursor]'),
    ]
    links.forEach((el) => {
      const cursorState = el.dataset.rbCursorState ?? 'live'
      const cursorType = el.dataset.rbCursorType ?? 'default'
      const cursorBlend = el?.dataset?.rbCursorBlend ?? null

      if (cursorState === 'invisible') {
        el.addEventListener('mouseenter', onInvisibleEnter)
        el.addEventListener('mouseleave', onInvisibleLeave)
      } else {
        el.addEventListener('mouseenter', onLinkHoverEnter)
        el.addEventListener('mouseleave', onLinkHoverLeave)
      }
      if (cursorType == 'close' || cursorBlend != null) {
        el.addEventListener('click', onClick)
      }
    })
    document.body.addEventListener('pointermove', onMouseMove)
    return () => {
      document.body.removeEventListener('pointermove', onMouseMove)
      links.forEach((el) => {
        const cursorState = el.dataset.rbCursorState ?? 'live'
        const cursorType = el.dataset.rbCursorType ?? 'default'
        const cursorBlend = el?.dataset?.rbCursorBlend ?? null
        if (cursorState === 'invisible') {
          el.removeEventListener('mouseenter', onInvisibleEnter)
          el.removeEventListener('mouseleave', onInvisibleLeave)
        } else {
          el.removeEventListener('mouseenter', onLinkHoverEnter)
          el.removeEventListener('mouseleave', onLinkHoverLeave)
        }
        if (cursorType == 'close' || cursorBlend != null) {
          el.removeEventListener('click', onClick)
        }
      })
    }
  }, [router.asPath, cursorRefresh])

  return (
    <>
      <div
        className={cx(
          styles.root,
          'group hidden md:flex items-center justify-center data-[blend=darken]:mix-blend-darken  data-[blend=difference]:mix-blend-difference data-[blend=lighten]:mix-blend-lighten'
        )}
        ref={rootRef}
        // data-over={state.over}
        data-blend={state.blend}
        data-live={state.live && state.type != 'default'}
        data-type={state.type}
      >
        <div
          className={styles.circle}
          data-shrink={state.live && state.type == 'default'}
          data-invisible={state.invisible}
        ></div>
        <div className={cx(styles.items, 'group-data-[type=close]:scale-100')}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L21 21M21 1L1 21" stroke="white" />
          </svg>
        </div>
        <div className={cx(styles.items, 'group-data-[type=play]:scale-100')}>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.92018 0.259994L12.2764 6.81653L0.92018 13.3731L0.92018 0.259994Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=playtext]:scale-100'
          )}
        >
          PLAY
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=read]:scale-100'
          )}
        >
          READ
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=view]:scale-100'
          )}
        >
          VIEW
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=bio]:scale-100'
          )}
        >
          BIO
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=startnow]:scale-100'
          )}
        >
          START
          <br />
          NOW
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=viewDetails]:scale-100 text-center normal-case font-normal text-sm font-opensans leading-[22px]'
          )}
        >
          View<br />details
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=comingsoon]:scale-100 text-center normal-case font-normal text-sm font-opensans leading-[22px]'
          )}
        >
          COMING
          <br />
          SOON
        </div>
        <div
          className={cx(
            styles.items,
            styles.text,
            'group-data-[type=bio]:scale-100'
          )}
        >
          BIO
        </div>
      </div>
      {/* <div className={cx(styles.root, styles.overlay)} data-live={state.live}>
        <div className={styles.circle} data-invisible={state.invisible}></div>
      </div> */}
    </>
  )
}
