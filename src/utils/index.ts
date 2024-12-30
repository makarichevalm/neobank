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
export const utils = {
  validateFormDate
}