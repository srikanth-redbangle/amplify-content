export const AwardRow = ({
  name = '',
  year = '',
  category = '',
  image = {},
  ...rest
}) => {
  return (
    <div
      data-rb-cursor
      data-rb-cursor-state="invisible"
      className="py-6 flex md:block data-[selected=true]:text-rb-black border-t last:border-b border-y-rb-black border-opacity-15 transition-all group"
      {...rest}
    >
      <div className="w-[53px] h-[53px] md:hidden mr-4 flex-shrink-0">
        <img {...image} alt={name} />
      </div>
      <div className="rb-row md:justify-around items-center font-semibold">
        <div className="w-full mb-[2px] md:mb-0 md:w-5/12 md:text-left order-1">
          <h4 className="text-base md:text-2xl md:leading-9 tracking-[-0.32px] md:tracking-[-0.48px] group-hover:text-rb-black transition-colors">
            {category}
          </h4>
        </div>
        <div className="md:w-2/12 text-rb-black/60 md:text-current md:text-center md:text-2xl md:leading-9 md:tracking-[-0.48px] hidden md:block md:order-2">
          {year}
        </div>
        <div className="w-auto md:w-5/12 text-rb-black/60 md:text-current md:text-right md:text-2xl md:leading-9 md:tracking-[-0.48px] order-2 md:order-3">
          {name}&nbsp;
          <span className="md:hidden inline-block mx-3">|</span>
          <span className="md:hidden">{year}</span>
        </div>
      </div>
    </div>
  )
}
