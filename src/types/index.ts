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
export interface IFormValues {
  amount: number,
  term: number,
  firstName: string,
  lastName: string,
  middleName: string | null,
  email: string,
  birthdate: string | Date,
  passportSeries: string,
  passportNumber: string
}
export type TOffer = {
  requested: number
  total: number
  period: number
  payment: number
  rate: number
  insurance: boolean
  salary: boolean
}