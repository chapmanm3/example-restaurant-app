import { menuParser } from "@/utils/menuParser"
import styles from "./page.module.css"

async function getMenu() {
  const resp = await fetch('/menuItems.json')

  if (!resp.ok) {
    throw new Error ("Failed to load menu")
  }

  return resp.json()

}

export default async function MenuPageBody() {
  const menu = await getMenu()
  const { validatedMenu, sections, tags } = menuParser(menu)

  return (
    <div >

    </div>
  )
}
