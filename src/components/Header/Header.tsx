import styles from './header.module.css'


const Header = () => {

  return (
    <nav className={styles.navBar}>
      <div className={styles.navElementsContainer}>
        <div className={styles.logoElement}>LOGO HERE</div>
        <div className={styles.navElement}>Menu</div>
        <div className={styles.navElement}>Locations</div>
        <div className={styles.navElement}>About Us</div>
      </div>
    </nav>
  )
}

export default Header;
