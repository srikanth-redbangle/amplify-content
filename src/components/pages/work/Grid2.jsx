export const Grid2 = ({
  image1 = {},
  image2 = {},
  image3 = {},
  image4 = {},
  image5 = {},
}) => (
  <div className="grid grid-cols-5 gap-[5px] md:gap-2.5 w-[768px] md:w-full mt-15 md:mt-[70px] px-4 md:px-0">
    <div className="relative aspect-[280/440] mt-13 md:mt-25">
      <img
        alt=""
        loading="lazy"
        className="object-cover absolute h-full w-full left-0 top-0"
        {...image1}
      />
    </div>
    <div className="relative aspect-[280/440]">
      <img
        alt=""
        loading="lazy"
        className="object-cover absolute h-full w-full left-0 top-0"
        {...image2}
      />
    </div>
    <div className="relative aspect-[280/440] mt-13 md:mt-25">
      <img
        alt=""
        loading="lazy"
        className="object-cover absolute h-full w-full left-0 top-0"
        {...image3}
      />
    </div>
    <div className="relative aspect-[280/440]">
      <img
        alt=""
        loading="lazy"
        className="object-cover absolute h-full w-full left-0 top-0"
        {...image4}
      />
    </div>
    <div className="relative aspect-[280/440] mt-13 md:mt-25">
      <img
        alt=""
        loading="lazy"
        className="object-cover absolute h-full w-full left-0 top-0"
        {...image5}
      />
    </div>
  </div>
)
