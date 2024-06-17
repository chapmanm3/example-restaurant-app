import styles from "./page.module.css";
import HomePageBody from "@/components/HomePageBody/HomePageBody";

export default function Home() {
  return (
    <div className={styles.mainText}>
      <HomePageBody/>
    </div>
  );
}
