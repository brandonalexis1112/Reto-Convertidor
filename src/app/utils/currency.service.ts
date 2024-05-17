import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyUtil {
  constructor() {}

  formatCurrency(amount: number, currencySymbol: string): string {
    return currencySymbol + ' ' + amount.toFixed(2);
  }

  convertCurrency(amount: number, exchangeRate: number): number {
    return amount * exchangeRate;
  }

  roundNumber(number: number, decimals: number): number {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }
}
