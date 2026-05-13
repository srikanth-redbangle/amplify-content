export const PlayCard = ({ poster, name, company, src, ...rest }) => (
  <button className="text-left group flex flex-col h-full" aria-label={name} {...rest}>
    <div className="aspect-[162/96] md:aspect-[297/176] relative w-full overflow-hidden">
      <img
        src={src}
        alt=""
        className="absolute h-full w-full object-cover left-0 top-0 group-hover:scale-105 transition-all duration-300"
      />
    </div>
    <div className="text-xs md:text-xl md:!leading-6 leading-[16px] font-medium tracking-[-0.2px] mt-3 uppercase font-everett">
      {name}
    </div>
    <div className="text-rb-black/60  text-[10px] md:text-base leading-2.5 md:leading-4.5 font-medium mt-1.5 md:mt-2.5 line-clamp-1 uppercase font-everett">
      {company}
    </div>
  </button>
)
