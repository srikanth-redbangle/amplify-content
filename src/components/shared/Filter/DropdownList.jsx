import { cx } from 'class-variance-authority'
import Link from 'next/link'
import PropTypes from 'prop-types'

export const DropdownList = ({
  className = '',
  options = [],
  onClose,
  onChange,
  selected,
}) => {
  const onSelect = (o) => {
    onChange(o)
  }
  return (
    <div
      className={cx('bg-white rounded-6xl py-4.5 text-sm leading-6', className)}
      role="listbox"
    >
      {options.map((o) => (
        <Link href={'#featured-work'} key={o?.value}>
        <div
          aria-selected={selected === o?.value}
          tabIndex={0}
          role="option"
          className="py-1.5 px-6 relative flex items-center transition-all cursor-pointer aria-selected:font-bold group"
          onClick={() => { 
            onSelect(o); 
            onClose() ;

          }}
          onKeyDown={(e) => {
            if (e.key == 'Escape' && onClose) {
              onClose()
            }
            if (e.key == 'Enter') {
              onSelect(o)
            }
          }}
        >
          {o?.text}

          <span className="relative ml-1.75  group-aria-selected:scale-100 scale-0 transition-all w-2 h-2">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <circle cx="4" cy="4" r="4" fill="#EF001C" />
            </svg>
          </span>
        </div>
      </Link>
      ))}
    </div>
  )
}
DropdownList.propTypes = {
  onChange: PropTypes.func.isRequired,
}
