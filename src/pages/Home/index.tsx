import { OurCoffees } from '../../components/OurCoffees'
import { Hero } from './components/Hero'
import styles from './styles.module.scss'
export function Home() {
  return (
    <div className={styles['home-container']}>
      <Hero />
      <OurCoffees />
    </div>
  )
}
