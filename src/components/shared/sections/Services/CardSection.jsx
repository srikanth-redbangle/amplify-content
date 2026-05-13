import { LineHeading } from '../../Heading'

export const ServiceCardSection = ({
  className = '',
  tag = '',
  title = '',
  cards = [],
  iconClassName = 'w-12 h-12',
  pageSpecificLayout = 'grid-cols-1',
  sectionStyle = {},
  containerClassName = ''
}) => {
  return (
    <section className={`pb-7.5 md:pb-15 pt-15 md:pt-30 bg-white ${className}`}
    style={sectionStyle}>
      <div className={`container`}>
        <LineHeading className="mb-6 md:mb-9">{tag}</LineHeading>
        <h3 className="text-title md:text-title-md mb-10 md:mb-18 font-everett max-w-[343px] md:max-w-[963px]">
          {title}
        </h3>
        <div
          className={`grid ${pageSpecificLayout} md:grid-cols-3 gap-4 md:gap-6`}
        >
          {cards.map((c) => (
            <div
              className={`py-6 md:py-8 px-5 md:px-6 bg-rb-service-grey rounded-lg ${containerClassName}`}
              key={c?.key}
            >
              <div className={iconClassName}>
                <img alt="" width="48" height="48" {...c?.icon} />
              </div>
              <h4 className="mt-4 text-base leading-5 md:text-lg md:leading-6 font-everett font-medium">
                {c?.title}
              </h4>
              {c?.text && (
                <p className="text-sm md:text-base text-rb-black/80 mt-2 md:mt-1.5">
                  {c.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
