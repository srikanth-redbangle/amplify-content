import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { LineHeading } from '../../Heading'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'

export const FeaturedWorkSection = ({
  title = 'Here’s a portfolio of work that worked',
  posts = [],
  href = '/work/play',
  btnposition = 'right',
  showbtn = true
}) => {
  return (
    <section className="bg-white py-7.5 md:py-15">
      <div className="container">
        {/* <LineHeading className="mb-6 md:mb-9">FEATURED WORK</LineHeading> */}

        <div className="rb-row mb-10 md:mb-18 md:items-center">
          <div className="w-full md:w-7/12">
            <h3 className="text-title md:text-title-md font-everett max-w-[343px] md:max-w-[963px]">
              {title}
            </h3>
          </div>
          {btnposition === 'right' && showbtn && (
            <div className="w-full hidden md:block md:w-5/12">
              <Button
                suffix={<LineArrow hover />}
                href={href}
                className="md:float-right"
              >
                EXPLORE WORK
              </Button>
            </div>
          )}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-6 mt-12 md:mt-20">
          {posts.map((p, i) => (
            <ContentPostCard type={'md'} key={p.key} {...p} />
          ))}
        </div>

        {btnposition === 'bottom' && showbtn && (
          <div className='flex justify-center items-center mt-20'>
            <Button
              suffix={<LineArrow hover />}
              href={href}
              className="md:float-right"
            >
              EXPLORE WORK
            </Button>
          </div>
        )}


      </div>
    </section>
  )
}
