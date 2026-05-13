export const ArticleRow = ({ article, ...rest }) => {
  const { title, slug, author, date, excerpt, tags } = article
  return (
    <a
      href={`/${tags[0].slug}/${slug}`}
      data-rb-cursor-state="invisible"
      className="justify-between mb-5 last:mb-0 py-16 px-10 border rounded-xl data-[selected=true]:text-rb-black border-rb-stroke hover:border-rb-stroke-dark transition-all group"
      {...rest}
    >
      <div className="rb-row items-center">
        <div className="w-1/2">
          <h4 className="text-2xl leading-10.5 font-semibold mb-1.5 tracking-[-0.2px] group-hover:text-rb-link-green transition-colors">
            {title}
          </h4>
          {/* <div className="flex flex-wrap gap-5 text-sm leading-8 tracking-[-0.2px]">
            <div>{author}</div>
            <div>{date}</div>
          </div> */}
        </div>
        <div
          className="w-1/2 text-base leading-7 transition-colors"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
      </div>
    </a>
  )
}
