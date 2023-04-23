import styles from '@/styles/components/Dots.module.scss'

export default function Dots() {
  // TODO: Improve this component with good positioning and height calculations
  return (
    <div className={styles.dots_w}>
      <div className={styles.dots}></div>
    </div>
  )
}