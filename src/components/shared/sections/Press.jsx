import { Button } from '@/components/ui'
import { LineHeading } from '../Heading'
import { PostContent } from '../PostContent'
import { LineArrow } from '@/components/icons'
import Link from 'next/link'
import { VideoGallery } from '@/components/pages/work/VideoGallery'

export const PressSection = ({ className = '', title, image, content, type = '', readmore = true, presstitle, thumbnail, sources = [] }) => {
  return (
    <section className={className}>

      <div className="container py-10 md:pb-[70px] md:pt-8 text-black overflow-hidden">
        <LineHeading white className="mb-6 md:mb-9">
          {presstitle ? presstitle : 'Press'}
        </LineHeading>
        <h3 className="!text-title md:!text-title-md-tight md:tracking-[-2.08px] mb-10 md:mb-9 max-w-[730px]">
          {title}
        </h3>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-[642px]">
            {type === 'video' ? (
              <video controls className="w-full h-auto" poster={thumbnail} style={{ maxWidth: image?.width, height: image?.height, backgroundColor: image?.bgColor }}>
                <source src={image?.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : type === 'videogallery' ? (
              <VideoGallery sources={sources} type={type} />
            ) : (
              <img alt="" {...image} />
            )}
          </div>
          <div className={`w-full md:w-1/2 lg:w-[calc(100%_-_642px)] md:pl-6 lg:pl-14 ${presstitle === 'Campaign' ? 'md:bottom-[17rem] mt-4' : 'bottom-0 relative md:self-end mt-8'} `}>
            <PostContent
              className="text-base md:text-2xl mb-10"
              content={content}
              noMargin={type === 'videogallery'}
            />
            <Link className={readmore === false ? 'hidden' : 'block'} href={'https://www.exchange4media.com/advertising-news/security-agency-mygates-campaign-is-an-ode-to-security-guards-94402.html'} target="_blank">
              <Button
                suffix={<LineArrow hover />}
                className="w-full md:w-auto"
              >
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
