export const Grid3 = ({
  image1 = {},
  image2 = {},
  image3 = {},
  image4 = {},
  image5 = {},
}) => (
  <div className="container">
    <div className="grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px]">
      <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image1}
        />
      </div>
      <div className="row-start-1 md:row-start-2  col-start-2 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image2}
        />
      </div>
      <div className="row-start-5 relative md:hidden">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image2}
        />
      </div>
      <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image3}
        />
      </div>
      <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image4}
        />
      </div>
      <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image5}
        />
      </div>
    </div>
  </div>
)
