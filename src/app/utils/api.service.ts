import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    const url = `${environment.apiBaseUrl}?app_id=${environment.apiKey}`;
    return this.http.get(url);
  }
}
