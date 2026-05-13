import { cx } from 'class-variance-authority'
export const ContentCard = ({
  className = '',
  type = 'md', //md, lg
  href = '#!',
  name,
  company,
  image,
  tags = [],
}) => (
  <div
    // href={href}
    className={`flex flex-col group ${className}`}
    data-rb-cursor-type="view"
  >
    <div
      className={cx(
        'relative w-full aspect-[404/454] after:bg-[linear-gradient(360deg,_#00000099_0%,_#00000000_100%)] after:w-full after:h-full after:absolute after:top-0 after:left-0 overflow-hidden',
        type == 'lg' && 'md:aspect-[1260/494]'
      )}
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover md:group-hover:scale-105 transition-all"
      />
      <div
        className={`flex flex-wrap text-white justify-start absolute left-4 bottom-4.5 md:bottom-5 md:left-5 z-[1] mr-2 font-semibold text-xs ${
          type === 'md' ? 'gap-3 gap-x-2  lg:max-w-[70%]' : 'gap-3 md:gap-2'
        }`}
      >
        {tags.map((t, i) => (
          <div
            className="px-3.5 py-1.5 md:py-2 md:px-4 rounded-2xl border border-white"
            key={i}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
    <div
      className={cx(
        'mt-3 md:mt-6 font-everett font-medium uppercase text-lg leading-8 tracking-[-0.72px]',
        type == 'md'
          ? 'md:text-[24px] md:leading-9.5 md:tracking-[-0.96px]'
          : 'md:text-[36px] md:leading-10 md:tracking-[-1.44px]'
      )}
    >
      {name}
      {/* <span className="hidden md:inline">,</span>{' '} */}
      <span
        className={cx(
          'opacity-60 text-sm leading-[25px] tracking-[-0.56px] block',
          type == 'md'
            ? 'md:text-lg md:leading-7.5 md:tracking-[-0.72px]'
            : 'md:text-reveal-small md:leading-8 md:tracking-[-1.04px]'
        )}
      >
        {company}
      </span>
    </div>
  </div>
)
