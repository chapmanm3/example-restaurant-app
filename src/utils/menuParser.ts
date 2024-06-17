import { ZMenuObject } from "@/types/menuTypes"

export function menuParser(menu: string) {

  const parsedMenu = JSON.parse(menu)
  const validatedMenu = ZMenuObject.parse(parsedMenu)

  const sections = Object.keys(validatedMenu)

  const tags = new Set<string>()
  for (let section of sections){
    validatedMenu[section].map(menuItem => {
      menuItem.tags.map(tag => tags.add(tag))
    }) 
  }
  
  return {
    validatedMenu,
    sections,
    tags
  }
}
