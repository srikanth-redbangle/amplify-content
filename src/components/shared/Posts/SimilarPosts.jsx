import { postsMapper } from '@/utils/mapper'
import { ContentPostCard } from '../Cards'
import { LineHeading } from '../Heading'

export const SimilarPosts = ({ posts = [], tag = '', className = '' }) => {
  const _posts = posts.map(postsMapper)
  return (
    <section className={className}>
      <div className="container">
        <LineHeading className="mb-6 md:mb-9">{tag}</LineHeading>
        {/* <h3 className="md:max-w-[812px] !text-title md:!text-title-md mb-12 md:mb-18">
          Portfolio of video projects that elevated brands and exceeded client
          expectations.
        </h3> */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-12 md:gap-6">
          {_posts.map((p) => (
            <ContentPostCard key={p.key} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
