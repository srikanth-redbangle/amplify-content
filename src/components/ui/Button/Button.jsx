import PropTypes from 'prop-types'
import { cva, cx } from 'class-variance-authority'
import { forwardRef } from 'react'
import Link from 'next/link'

const button = cva(
  'button uppercase group/button flex items-center justify-center whitespace-nowrap transition-colors',
  {
    variants: {
      intent: {
        primary: [
          'bg-rb-btn-green text-black hover:bg-rb-btn-hover focus:bg-rb-btn-hover hover:text-black focus:text-black',
        ],
        'p-secondary': ['border-2 border-rb-btn-green text-black hover:text-rb-black'],
        secondary: ['border-2 border-white text-white'],
      },
      size: {
        sm: ['h-7.5', 'text-sm font-medium', 'rounded-6xl', 'py-2.5 px-4'],
        pill: ['h-11.5', 'text-sm font-medium', 'rounded-8.5', 'py-2.5 px-9'],
        md: [
          'h-11 md:h-15',
          'text-xs leading-4.5 md:text-base font-bold',
          'rounded-8.5',
          'py-5 px-8',
        ],
        filter: ['h-12', 'text-base font-medium', 'rounded-6xl', 'py-3 px-4'],
      },
      isLoading: {
        true: 'pointer-events-none',
      },
      sameLine: {
        true: 'px-6 text-xs md:text-base',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
)

export const Button = forwardRef(
  (
    {
      prefix = null,
      suffix = null,
      children,
      isLoading,
      className,
      intent,
      size,
      sameLine = false,
      ...props
    },
    ref
  ) => {
    const Wrapper = props.href ? Link : 'button'
    // const animationProps =
    //   intent == undefined || intent == 'primary'
    //     ? {
    //         'data-rb-cursor-blend': 'difference',
    //         'data-rb-cursor-blendclick': 'difference',
    //         'data-state': 'open',
    //       }
    //     : {}
    const animationProps = {}
    return (
      <Wrapper
        className={button({ intent, size, isLoading, sameLine, className })}
        {...animationProps}
        {...props}
        ref={ref}
      >
        {isLoading ? (
          'Loading'
        ) : (
          <>
            {prefix && (
              <span
                className={cx(
                  'inline-block flex-shrink-0',
                  sameLine
                    ? 'w-3.5 md:w-5 h-3.5 md:h-5 mr-2 md:mr-2.5'
                    : 'w-4.5 md:h-5 h-4.5 md:w-5 mr-2.5'
                )}
              >
                {prefix}
              </span>
            )}
            {children}
            {suffix && (
              <span
                className={cx(
                  'inline-block flex-shrink-0',
                  sameLine
                    ? 'w-3.5 md:w-5 h-3.5 md:h-5 ml-2 md:ml-2.5'
                    : 'w-4.5 md:h-5 h-4.5 md:w-5 ml-2.5'
                )}
              >
                {suffix}
              </span>
            )}
          </>
        )}
      </Wrapper>
    )
  }
)
Button.displayName = 'Button'
Button.propTypes = {
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  isLoading: PropTypes.bool,
  sameLine: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
