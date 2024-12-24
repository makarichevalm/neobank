export type TNewsItem = {
  urlToImage: string | null
  title: string | null
  url: string
  description: string | null
}
export type TCurrencies = {
  id:number
  name: string
  value: number
}
export type TTab = {
  name: string
  content: React.ReactElement
}
export type TAccordionItem = {
  index: number
  title: string
  content: string
}