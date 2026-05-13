import { forwardRef, useEffect, useRef } from 'react'
import { Button } from '@/components/ui'
import { Chevron, LineArrow } from '@/components/icons'
import { cx } from 'class-variance-authority'

export const DropdownFilter = ({
  text = '',
  children,
  state,
  inView,
  onOpen,
  onClose,
  fade = false,
}) => {
  const container = useRef()
  useEffect(() => {
    const onClick = (e) => {
      if (
        container.current == e.target ||
        !container.current.contains(e.target)
      ) {
        onClose()
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [onClose])
  return (
    <>
      <div
        data-state={state}
        ref={container}
        className={cx(
          'fixed top-0 left-0 w-full h-full z-10 bg-black/20 transition-all md:hidden group',
          fade
            ? 'opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible'
            : 'translate-y-full data-[state=open]:translate-y-0'
        )}>

        {children}
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault()
          onOpen()
          //   window.document.body.style.overflow = 'hidden'
          e.stopPropagation()
        }}
        suffix={
          <Chevron
            className={cx('transition-all', state == 'open' && 'rotate-180')}
          />
        }
        data-state={inView ? 'open' : 'closed'}
        data-visible={state == 'closed'}
        size="filter"
        className="fixed left-1/2 z-[9] -translate-x-1/2 bottom-0 translate-y-full data-[state=open]:-translate-y-10.5 !transition-all data-[visible=false]:opacity-0 md:hidden"
      >
        {text}
      </Button>
    </>
  )
}
