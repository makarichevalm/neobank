import axios from "axios";

const BASE_URL = "http://localhost:8080"
const emailSubscribe = async (email: string) => {
    try {
      const response  = await axios.post(`${BASE_URL}/email`, { email: email });
        if(response.status === 200) {
          localStorage.setItem("email", email);
        }
    } catch(error) {
      console.log(error)
    }
}

export const api = {emailSubscribe}