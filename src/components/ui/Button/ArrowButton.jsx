import { cx } from 'class-variance-authority'
import { LineArrow } from '../../icons'
import { forwardRef } from 'react'

export const ArrowButton = forwardRef(
  ({ className, left, type, ...props }, ref) => (
    <button
      {...props}
      className={cx(
        'button h-9.5 md:h-11.5 bg-rb-red text-white rounded-8.5 px-7 md:px-9 py-2.5 md:py-3 ',
        className
      )}
      ref={ref}
      type={type ?? 'button'}
    >
      <LineArrow left={left} width="20" height="20" />
    </button>
  )
)
ArrowButton.displayName = 'ArrowButton'
