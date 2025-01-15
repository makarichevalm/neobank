import { TOffers } from "@/types"

const validateFormDate = (birth: string) => {
  let today = new Date()
  let birthArr = birth.split('-')
  let birthDate = new Date(Number(birthArr[0]), Number(birthArr[1])-1, Number(birthArr[2]))
  if (birthDate.getFullYear() > today.getFullYear()) return 'Incorrect date of birth'
  let dateOf18 = new Date()
  dateOf18.setFullYear(today.getFullYear() - 18)
  if(birthDate > dateOf18) return 'You are under 18 years old'
  return true
}
const validateIssueDate = (date: string) => {
  let today = new Date()
  let dateArr = date.split('-')
  let dateIssue = new Date(Number(dateArr[0]), Number(dateArr[1])-1, Number(dateArr[2]))
  if(dateIssue > today)  return 'Incorrect date of passport issue date'
  return true
}
const sortOffersByRates = (offers: TOffers) => {
    if(offers){
      let sortOffers = [...offers]
      sortOffers.sort((x, y) => x.rate - y.rate);
      return sortOffers
    }
    return offers
}
export const utils = {
  validateFormDate,
  validateIssueDate,
  sortOffersByRates
}