import styles from '@/styles/WpPost.module.scss'
export const PostContent = ({ noMargin = false, content, className }) =>
  content ? (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={`${noMargin ? '' : 'mt-6'} ${styles.content} ${className}`}
    ></div>
  ) : null
