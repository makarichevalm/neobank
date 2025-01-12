import { TEmpStatus, TGender, TMaritalStatus, TOffer, TPosition, TSelectOption } from "@/types"

export const TERM_OPTIONS:TSelectOption<number>[] = [
    { value: 6, name: '6 month' },
    { value: 12, name: '12 month' },
    { value: 18, name: '18 month' },
    { value: 24, name: '24 month' },
  ]
export const OFFERS: TOffer[] = [
  { requested: 200000, total: 200000, period: 24, payment: 9697, rate: 15, insurance: false, salary: false },
  { requested: 200000, total: 200000, period: 24, payment: 9788, rate: 11, insurance: true, salary: false },
  { requested: 200000, total: 200000, period: 24, payment: 9603, rate: 14, insurance: false, salary: true },
  { requested: 200000, total: 200000, period: 24, payment: 9690, rate: 10, insurance: true, salary: true },
]
export enum StatusCodes {
  OK = 200,
  SERVER_ERROR = 500,
}
export const GENDER_OPTIONS: TSelectOption<TGender>[] = [
  {value: 'MALE', name: 'male'},
  {value: 'FAMALE', name: 'famale'}
]
export const MARITAL_OPTIONS: TSelectOption<TMaritalStatus>[] = [
  {value: 'MARRIED', name: 'married'},
  {value: 'DIVORCED', name: 'divorced'},
  {value: 'SINGLE', name: 'single'},
  {value: 'WIDOW_WIDOWER', name: 'widow widower'}
]
export const DEPENDENT_OPTIONS: TSelectOption<number>[] = [
  {value: 0, name: '0'},
  {value: 1, name: '1'},
  {value: 2, name: '2'},
  {value: 3, name: '3'},
  {value: 4, name: '4'},
  {value: 5, name: '5 or more'}
]
export const EMPLOYMENT_OPTIONS: TSelectOption<TEmpStatus>[] = [
  {value: 'UNEMPLOYED', name: 'unemployed'},
  {value: 'SELF_EMPLOYED', name: 'self employed'},
  {value: 'EMPLOYED', name: 'employed'},
  {value: 'BUSINESS_OWNER', name: 'business owner'}
]
export const POSITION_OPTIONS: TSelectOption<TPosition>[] = [
  {value: 'WORKER', name: 'worker'},
  {value: 'MID_MANAGER', name: 'mid manager'},
  {value: 'TOP_MANAGER', name: 'top manager'},
  {value: 'OWNER', name: 'owner'},
]