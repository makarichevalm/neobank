export type TNewsItem = {
  urlToImage: string | null
  title: string | null
  url: string
  description: string | null
}
export type TCurrencies = {
  id: number
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
export type TSelectOption<T> = {
  value: T
  name: string
}
// types of PrescoringForm
export interface IPrescoringValues {
  amount: number
  term: number
  firstName: string
  lastName: string
  middleName: string | null
  email: string
  birthdate: string | Date
  passportSeries: string
  passportNumber: string
}
export interface IOfferCard {
  applicationId: number
  requestedAmount: number
  totalAmount: number
  term: number
  monthlyPayment: number
  rate: number
  isInsuranceEnabled: boolean
  isSalaryClient: boolean
}
export type TOffers = IOfferCard[]

//types of ScoringForm
export type TGender = 'MALE' | 'FAMALE'
export type TMaritalStatus = 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER'
export type TEmpStatus = 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER'
export type TPosition = 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER'
export interface IScoringValues {
  gender: TGender
  maritalStatus: TMaritalStatus
  dependentAmount: number
  passportIssueDate: string
  passportIssueBranch: string
  employment: {
    employmentStatus: TEmpStatus
    employerINN: number
    salary: number
    position: TPosition
    workExperienceTotal: number
    workExperienceCurrent: number
  }
  account: string
}
