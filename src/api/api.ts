import { IOfferCard, IPrescoringValues, IScoringValues } from '@/types'
import axios from 'axios'
import { StatusCodes } from '@/constants'

const BASE_URL = 'http://localhost:8080'
const emailSubscribe = async (email: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/email`, { email: email })
    if (response.status === StatusCodes.OK) {
      localStorage.setItem('email', email)
    }
  } catch (error) {
    console.log(error)
  }
}
const prescoringApplication = async (data: IPrescoringValues) => {
  try {
    const response = await axios.post(`${BASE_URL}/application`, data)
    if (response.status === StatusCodes.OK) {
      return response.data
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
const chooseOffer = async (data: IOfferCard) => {
  try {
    const response = await axios.post(`${BASE_URL}/application/apply`, data)
    if (response.status === StatusCodes.OK) {
      return response.data
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
const finishRegistration = async (id: number, data: IScoringValues) => {
  try {
    await axios.put(`${BASE_URL}/application/registration/${id}`, data)
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const api = { emailSubscribe, prescoringApplication, chooseOffer, finishRegistration }
