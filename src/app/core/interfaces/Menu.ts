export interface NavigationItem {
  label: string
  link: string
}

export interface NavigationSection {
  title: string
  items: NavigationItem[]
}