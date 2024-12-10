const keyAPI: string = 'fbcce90bb33602c8707f2747'
const baseURL: string = `https://v6.exchangerate-api.com/v6/${keyAPI}/pair`
export const exchangeRate: string[] = [
  `${baseURL}/USD/RUB`,
  `${baseURL}/EUR/RUB`,
  `${baseURL}/CNY/RUB`,
  `${baseURL}/GBP/RUB`,
  `${baseURL}/JPY/RUB`,
  `${baseURL}/KZT/RUB`,
]