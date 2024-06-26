import { MenuItem, MenuObject } from '@/types/menuTypes'
import styles from './menuBody.module.css'
import { z } from 'zod'

interface Props {
  menu: MenuObject
};

export default function MenuBody({ menu }: Props) {

  return (
    <div className={styles.menuBodyContainer}>
      {Object.keys(menu).map(section =>
        <div className={styles.menuSectionContainer} key={section} id={encodeURIComponent(section)}>
          <h3 className={styles.menuSectionTitle}>{section}</h3>
          <MenuItems menuSection={menu[section]} />
        </div>
      )}
    </div>
  )
}

const MenuItemsArray = z.array(MenuItem);

interface MenuSectionBodyProps {
  menuSection: z.infer<typeof MenuItemsArray>
}

function MenuItems({ menuSection }: MenuSectionBodyProps) {

  return (
    <div className={styles.menuItemsContainer}>
      {menuSection.map(item =>
        <div className={styles.menuItem}>
          <h5>{item.name}</h5>
          <p>{item.description}</p>
        </div>
      )}
    </div >
  )
}
