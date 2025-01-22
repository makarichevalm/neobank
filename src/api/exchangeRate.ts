const keyAPI: string = '61bf54bf58488c026f7427f1'
const baseURL: string = `https://v6.exchangerate-api.com/v6/${keyAPI}/pair`
export const exchangeRate: string[] = [
  `${baseURL}/USD/RUB`,
  `${baseURL}/EUR/RUB`,
  `${baseURL}/CNY/RUB`,
  `${baseURL}/GBP/RUB`,
  `${baseURL}/JPY/RUB`,
  `${baseURL}/KZT/RUB`,
]
