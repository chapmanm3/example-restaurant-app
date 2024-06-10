
import styles from "./homePageBody.module.css"

export default function HomePageBody() {
  return (
    <div className={styles.homePageContainer}>
      <h2>Matt's Taco Shop</h2>
      <div className={styles.locationDateContainer}>
        <h4>1234 Not Real Dr.<br/>Haslet TX 76052</h4>
        <p>
          Sunday - Sunday: 9am - 9pm
        </p>
      </div>
    </div>
  )
}
