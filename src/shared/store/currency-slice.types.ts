import { CurrencyAbbrreviation, LoadingStatus } from "../utils/enums";

export interface CurrencyState {
  baseCurrency: string | null;
  into: string | null;

  actualCurrencies: Array<Currency>;
  status: LoadingStatus;
  error: any;
  amount: number;
}

export interface Currency {
  code: string;
  value: number;
}

export type CurrencyObject = {
  [key: string]: Currency;
};
