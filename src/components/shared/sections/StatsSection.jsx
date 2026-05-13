import { LineHeading } from '../Heading'
import { RollupNumber } from '../RollupNumber'
import styles from '@/styles/sections/StatsSection.module.scss'

export const stats = [
  {
    id: 0,
    countUpProps: {
      value: 30,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
         brands
        <br /> powered
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 1,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
        Add commentMore actions brand
        <br />
        solutions
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 20,
      suffix: (
        <span className="inline-flex">
          <span className="text-rb-red">+</span>
        </span>
      ),
    },
    text: (
      <>
        Add commentMore actions industries
        <br />
        championed
      </>
    ),
  },
  {
    id: 3,
    countUpProps: {
      value: 50,
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

export const StatsSection = ({
  className = '',
  data = [],
  tag = 'OUR PRODUCTION BACKYARD',
}) => (
  <section className={`bg-white overflow-hidden ${className}`}>
    <div className="container">
      <LineHeading className="mb-6 md:mb-7.5">{tag}</LineHeading>
      <div className="grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none mx-5 md:!ml-0 md:relative md:right-8">
        {(data?.length ? data : stats).map((s, i) => (
          <div
            className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
            key={s.id}
          >
            <div className={`${i == 2 && 'lg:ml-[20%]'}`}>
              <div className="lg:w-fit lg:mx-auto">
                <RollupNumber value={s.value}
                  suffix={
                    <div className="inline-flex">
                      {s.suffix}
                      {s.symbol && <span className="text-rb-red">{s.symbol}</span>}
                    </div>
                  }
                />
                <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 md:ml-[6px] font-medium font-everett">
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
