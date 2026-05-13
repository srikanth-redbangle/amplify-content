export const Grid1 = ({
  image1 = {},
  image2 = {},
  image3 = {},
  image4 = {},
}) => (
  <div className="container">
    <div className="grid md:px-8 grid-rows-[0.51fr_0.22fr_0.27fr] grid-cols-2 md:grid-rows-[0.2fr_0.3fr_0.3fr_0.2fr] md:grid-cols-[0.13fr_0.27fr_0.6fr] gap-4 md:gap-5 aspect-[343/771] md:aspect-[1200/1217] w-full mt-15 md:mt-[70px]">
      <div className="row-start-2 md:row-start-1 md:col-span-1 md:col-start-2 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image1}
        />
      </div>
      <div className="row-start-3 md:row-start-2 col-start-1 col-span-2 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image2}
        />
      </div>
      <div className="row-start-2 md:row-start-3 col-start-2 md:row-span-2 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image3}
        />
      </div>
      <div className="row-start-1 md:row-start-1 md:col-start-3 col-span-2 md:col-span-1 md:row-span-3 relative">
        <img
          alt=""
          loading="lazy"
          className="object-cover absolute h-full w-full left-0 top-0"
          {...image4}
        />
      </div>
    </div>
  </div>
)
