import { IPrescoringValues } from "@/types";
import axios from "axios";
import { StatusCodes } from '@/constants';

const BASE_URL = "http://localhost:8080"
const emailSubscribe = async (email: string) => {
    try {
      const response  = await axios.post(`${BASE_URL}/email`, { email: email });
        if(response.status === StatusCodes.OK) {
          localStorage.setItem("email", email);
        }
    } catch(error) {
      console.log(error)
    }
}
const prescoringApplication = async (data: IPrescoringValues) => {
    try {
        const response = await axios.post(`${BASE_URL}/application`, data)
        if(response.status === StatusCodes.OK) {
            return response.data
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const api = {emailSubscribe, prescoringApplication}