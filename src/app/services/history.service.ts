import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConversionModel } from "../models/conversion.model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historial: ConversionModel[] = [];

  constructor() { }

  getHistorial(): Observable<ConversionModel[]> {
    return of(this.historial);
  }

  getConversionHistory(conversion: ConversionModel): void {
    this.historial.push(conversion);
  }

  clearConversionHistory(): void {
    this.historial = [];
  }
}
