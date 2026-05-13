import { ImageAccordion } from '@/components/ui'
import { LineHeading } from '../../Heading'

export const RedbangleWaySection = ({
  title = 'Our approach to crafting winning brand strategy',
  data,
  image,
  video,
  heading = 'The Makerrs Way',
  sectionBG = 'bg-white',
  flexValue='md:flex-row-reverse'
}) => (
  <section className={`${sectionBG} py-7.5 md:py-15`}>
    <div className="container">
      <LineHeading className="mb-6 md:mb-7.5">{heading}</LineHeading>
      <h3 className="text-title md:text-title-md mb-10 md:mb-18 font-everett max-w-[800px]">
        {title}
      </h3>
      <ImageAccordion
        containerClass={`${flexValue}`}
        image={image}
        video={video}
        imageAccordionContentClassName="md:w-2/3 md:text-acc-large text-rb-black/80"
        data={
          data ?? [
            {
              key: '0',
              heading: 'Discovery',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                alt: 'service image',
                width: '726',
                height: '915',
              },
            },
            {
              key: '1',
              heading: 'Strategy Development',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                alt: 'service image',
                width: '726',
                height: '915',
              },
            },
            {
              key: '2',
              heading: 'Creative Ideation',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                alt: 'service image',
                width: '726',
                height: '915',
              },
            },
            {
              key: '3',
              heading: 'Production',
              content:
                'We begin by thoroughly understanding your brand, target audience, and goals. Through extensive research and analysis, we uncover valuable insights.',
              image: {
                src: '/img/services/service-image.webp',
                alt: 'service image',
                width: '726',
                height: '915',
              },
            },
          ]
        }
      />
    </div>
  </section>
)
