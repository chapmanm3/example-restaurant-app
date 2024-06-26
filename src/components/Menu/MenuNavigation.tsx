import Link from 'next/link'
import styles from './menuNavigation.module.css'

interface Props {
  sections: string[]
}

export default function MenuNavigation({ sections }: Props) {
  return (
    <div className={styles.menuNavigationContainer}>
      {sections.map(section => <Link href={`#${encodeURIComponent(section)}`}>{section}</Link>)}
    </div>
  )
}
