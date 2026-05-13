import { LineHeading } from '../Heading'
import { RollupNumber } from '../RollupNumber'
import styles from '@/styles/sections/StatsSection.module.scss'

export const stats = [
  {
    id: 0,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
        brands <br />
        partnered with
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 4,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
        brand content <br />
        assets created
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 1,
      suffix: (
        <span className="inline-flex">
          K <span className="text-rb-red">+</span>
        </span>
      ),
    },
    text:
      <>
        partners and<br />
        collaborators
      </>,
  },
  {
    id: 3,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        thinkers and
        <br />
        storytellers
      </>
    ),
  },
]

export const StatsPlay = ({
  className = '',
  data = [],
  tag = 'OUR PRODUCTION BACKYARD',
}) => (
  <section className={`bg-white overflow-hidden ${className}`}>
    <div className="container">
      <LineHeading className="mb-6 md:mb-7.5">{tag}</LineHeading>
      <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none mx-5">
        {(data?.length ? data : stats).map((s, i) => (
          <div
            className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
            key={s.id}
          >
            <div className={`${i == 2 && 'lg:ml-[10%]'} ${i == 1 && 'lg:ml-[7%]'}`}>
              <div className='lg:w-fit lg:mx-auto'>
                <div className='lg:-ml-[6px]'>
                  <RollupNumber {...s.countUpProps} />
                </div>
                <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett">
                  {s.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
