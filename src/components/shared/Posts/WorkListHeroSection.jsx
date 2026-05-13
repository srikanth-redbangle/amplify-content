import { Button } from '@/components/ui'
import { Marquee } from '../Marquee'
import { LineArrow } from '@/components/icons'
import { useRouter } from 'next/router'

export const WorkListHeroSection = ({
  type,
  content,
  className = '',
  contentClassName = '',
  pillImg,
  typeTwo,
  CTA,
  CTAtext,
  outlineClass,
  duration = 20,
  video1,
  video2,
  videoborder = '',
  customSpacing = '',
  marqueType = 'video',
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { type: 'send-us-a-brief' },
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <section className={`  ${className}`}>
      <div className="hidden">{type}</div>
      <Marquee duration={duration}>
        <div
          className={`flex items-center uppercase text-[48px] leading-none md:text-[120px] mr-6 md:mr-7.5 font-medium md:leading-[112px] ${customSpacing} ${
            type === 'WORK SHOWCASE'
              ? 'cap-trim !tracking-[-1.92px] font-everett'
              : ''
          }`}
        >
          {type}
          {marqueType === 'img' && (
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 relative bottom-[5px] md:bottom-[4px]"
              src={pillImg ? pillImg : '/img/pill-marq.webp'}
              width="562"
              height="210"
              alt=""
            />
          )}

          {marqueType === 'video' && (
            <div className="md:w-24 md:h-24 w-12 h-12  ml-6 md:ml-10">
              {video1 ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={video1}
                  className={`w-full h-full object-cover rounded-[50%] ${videoborder}`}
                  // width="400"
                  // height="225"
                ></video>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        {typeTwo ? (
          <div
            className={`flex items-center uppercase text-[48px] leading-none md:text-[120px] mr-6 md:mr-7.5 font-medium md:leading-[112px] ${customSpacing} ${outlineClass} ${
              type === 'WORK SHOWCASE'
                ? 'cap-trim !tracking-[-1.92px] font-everett'
                : ''
            }`}
          >
            {typeTwo}
            {marqueType === 'img' && (
              <img
                className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 relative bottom-[5px] md:bottom-[4px]"
                src={pillImg ? pillImg : '/img/pill-marq.webp'}
                width="562"
                height="210"
                alt=""
              />
            )}
            {marqueType === 'video' && (
              <div className="md:w-24 md:h-24 w-12 h-12  ml-6 md:ml-10">
                {video2 ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={video2}
                    className={`w-full h-full object-cover rounded-[50%] ${videoborder}`}
                    // width="400"
                    // height="225"
                  ></video>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
        ) : (
          ''
        )}
      </Marquee>
      <div className="container text-rb-black">
        <div
          className={`w-full text-sm leading-[21px] md:text-[24px] md:leading-8 mt-8 md:mt-8 ${contentClassName}`}
        >
          {content}
        </div>
      </div>
      {/* {CTA && (
        <div className="md:mt-10 mt-14">
          <Button
            href="/contact"
            className="font-bold  w-full md:w-auto !inline-flex"
            suffix={<LineArrow hover />}
          >
            {CTAtext}
          </Button>
        </div>
      )} */}
      {CTAtext && (
        <div className="md:mt-10 mt-14">
          {CTA ? (
            <Button
              href="/contact"
              className="font-bold w-full md:w-auto !inline-flex"
              suffix={<LineArrow hover />}
            >
              {CTAtext}
            </Button>
          ) : (
            <Button
              onClick={handleClick}
              className="font-bold w-full md:w-auto !inline-flex"
              suffix={<LineArrow hover />}
            >
              {CTAtext}
            </Button>
          )}
        </div>
      )}
    </section>
  )
}
