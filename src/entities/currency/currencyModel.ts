export interface CurrencyModel {
  [key: string]: Currency;
}

export interface Currency {
  code: string;
  value: number;
}
