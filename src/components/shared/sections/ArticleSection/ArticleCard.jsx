function ArticleCard({ title, featuredImage, href, author, date, excerpt }) {
  return (
    <a
      href={href}
      className="flex flex-col  rounded-xl overflow-hidden border border-rb-stroke"
    >
      <div className="aspect-[313/168] relative w-full overflow-hidden">
        <img
          alt=""
          {...featuredImage}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pt-5 pb-6">
        <h4 className="text-base leading-5.5 font-semibold mb-3 line-clamp-1">
          {title}
        </h4>
        <div className="flex flex-wrap gap-5 text-sm leading-8 tracking-[-0.2px] mb-6">
          <div>{author}</div>
          <div>{date}</div>
        </div>
        <div
          className="text-rb-black/80 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
      </div>
    </a>
  )
}

export default ArticleCard
