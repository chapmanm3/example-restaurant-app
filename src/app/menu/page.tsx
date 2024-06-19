import { menuParser } from "@/utils/menuParser"
import styles from "./page.module.css"
import MenuNavigation from "@/components/Menu/MenuNavigation"
import MenuBody from "@/components/Menu/MenuBody"
import menuItems from './menuItems.json'

async function getMenu() {
  return menuItems
}

export default async function MenuPageBody() {
  const menu = await getMenu()
  const { validatedMenu, sections, tags } = menuParser(JSON.stringify(menu))

  return (
    <div className={styles.menuPageContainer}>
      <MenuNavigation />
      <MenuBody />
    </div>
  )
}
