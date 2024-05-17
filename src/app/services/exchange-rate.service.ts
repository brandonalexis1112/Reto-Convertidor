import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRate } from "../models/exchange-rate.model";
import { ApiService } from '../utils/api.service';
@Injectable({
    providedIn: 'root'
  })

export class ExchangeRateService {
  constructor(private apiService: ApiService) {}

  getExchangeRates(): Observable<ExchangeRate> {
    return this.apiService.getExchangeRates();
  }
}