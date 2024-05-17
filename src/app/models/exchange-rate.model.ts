export interface ExchangeRate {
    base: string;
    rates: { [moneda: string]: number };
  }