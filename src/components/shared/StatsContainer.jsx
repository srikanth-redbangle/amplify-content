import PropTypes from 'prop-types'
import { RollupNumber } from './RollupNumber'
import { cx } from 'class-variance-authority'

export const StatsContainer = ({ type = 'row', stats = null }) => {
  if (!stats) return <></>
  return (
    <div
      className={cx(
        'flex md:flex-wrap items-center md:items-end border-opacity-15 border-y-rb-black',
        type == 'row'
          ? 'border-b md:first:pt-10 pt-10 md:pt-16 pb-3'
          : 'border-b md:border-b-0 group-first:border-t md:border-t md:first:pt-8 pt-10 md:pt-21 pb-3 md:pb-0'
      )}
    >
      <div className="flex md:flex-wrap items-end font-everett flex-shrink-0">
        <RollupNumber value={stats.value} className="flex-shrink-0" />
        {stats?.suffix && (
          <span className="text-[38px] mb-1.5 md:text-[52px] md:mb-2.5 flex-shrink-0 leading-none font-medium tracking-[-0.832px] text-rb-red">
            {stats?.suffix}
          </span>
        )}
      </div>
      <div
        className={cx(
          'pl-5 max-w-[276px] font-everett text-sm leading-4 md:text-2xl md:leading-7',
          type == 'column'
            ? 'md:mt-3 md:pl-0 md:max-w-full'
            : 'md:pl-6.5 md:mb-3'
        )}
      >
        {stats?.title}
      </div>
    </div>
  )
}
StatsContainer.propTypes = {
  type: PropTypes.oneOf(['row', 'column']),
  value: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.number,
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }),
}
