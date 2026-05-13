import styles from '@/styles/WpPost.module.scss'
import { WebsiteLayout } from './WebsiteLayout'

export const SCSLayout = ({ children }) => {
  return <WebsiteLayout className={styles.root}>{children}</WebsiteLayout>
}
