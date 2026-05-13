import { LineArrow } from '@/components/icons'
import classNames from 'classnames';

const ArrowButtons = ({ onPrev, onNext, type}) => {
  return (
    <div className="bottom-[-80px] left-0 flex gap-2 justify-start mt-4">
      <button
        onClick={onPrev}
        className={classNames('prev w-[66px] h-10 md:h-[42px] rounded-8.5 flex items-center justify-center duration-300 ease-out border-2 hover:bg-rb-red group',{
          'border-rb-black/60': type === 'projectLoom',
          'border-2': type === 'projectLoom',
          'hover:border-rb-red': type === 'projectLoom',
          'border-white': type !== 'projectLoom',
          'hover:border-white': type !== 'projectLoom'
        })}
      >
        <LineArrow className={classNames('max-w-[16px] group-hover:text-white',
          {
            'text-black': type === 'projectLoom',
            'text-white': type !== 'projectLoom'
          }
        )} left />
      </button>
      <button
        onClick={onNext}
        className={classNames('next w-[66px] h-10 md:h-[42px] rounded-8.5 flex items-center justify-center duration-300 ease-out border-2 hover:bg-rb-red group',{
          'border-rb-black/60': type === 'projectLoom',
          'border-2': type === 'projectLoom',
          'hover:border-rb-red': type === 'projectLoom',
          'border-white': type !== 'projectLoom',
          'hover:border-white': type !== 'projectLoom'
        })}
      >
        <LineArrow className={classNames('max-w-[16px] group-hover:text-white border-white',
           {
            'text-black': type === 'projectLoom',
            'text-white': type !== 'projectLoom'
          }
        )} />
      </button>
    </div>
  )
}

export default ArrowButtons