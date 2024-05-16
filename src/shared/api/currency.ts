import axios, { AxiosResponse } from "axios";
import { CurrencyModel } from "../../entities/currency/currencyModel";
const API_BASE_URL = "https://api.currencyapi.com/v3"; // Replace with your actual API base URL
const API_TOKEN = "cur_live_pciJDfYfaEMZidMY0JP7JjucGFEagFi5dSzOVrvr";

export const getCurrenncyLatest = async (
  baseCurrency: string,
  currencies: string | Array<string>
): Promise<AxiosResponse<CurrencyModel>> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/latest?apikey=${API_TOKEN}&currencies=${currencies}&base_currency=${baseCurrency}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
