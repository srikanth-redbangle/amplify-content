import { GoArrowRight } from "react-icons/go"

export const AboutArticleRow = ({ article, ...rest }) => {
  const { title, slug, author, date, excerpt, href } = article
  return (
    <a
      target="_blank" rel="noopener noreferrer"
      href={href}
      data-rb-cursor-state="invisible"
      className="justify-between mb-5 last:mb-0 py-13 px-10 border rounded-xl data-[selected=true]:text-rb-black border-rb-stroke hover:border-rb-stroke-dark transition-all group"
      {...rest}
    >
      <div className="rb-row items-center">
        <div className="w-3/4">
          <div className="flex flex-wrap gap-5 text-base leading-8 font-normal text-[#111010] mb-2 tracking-[-0.2px]">
            <div>{author}</div>
            {/* <div>{date}</div> */}
          </div>
          <h4 className="text-2xl leading-10.5 font-semibold mb-1.5 tracking-[-0.2px] group-hover:text-rb-red transition-colors">
            {title}
          </h4>
        </div>
        {/* <div
          className="w-1/2 text-base leading-7 transition-colors"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div> */}
        <div className="w-1/4 text-base font-bold leading-7 transition-colors justify-end flex group-hover:text-rb-red text-[#DB2F2C] gap-2">
          Read more <GoArrowRight className="my-auto gap-2"/>
        </div>
      </div>
    </a>
  )
}
