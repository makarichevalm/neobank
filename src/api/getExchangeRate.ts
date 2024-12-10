import axios from 'axios'
import { TCurrencies } from '../types';

export const getExchangeRate = async (apiEndpoints: string[]): Promise<TCurrencies[]> => {
  try {
    const requests = apiEndpoints.map((endpoint) => axios.get(endpoint));
    const responses = await axios.all(requests);

    const currencyValues = responses.map((response, index) => ({
      id: index + 1,
      name: response.data.base_code,
      value: response.data.conversion_rate.toFixed(2),
    }));
    return currencyValues;
  } catch (errors) {
    console.error("Error fetching data:", errors);
    return [];
  }
};