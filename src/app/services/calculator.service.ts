import { Injectable } from '@angular/core';
import { ConversionModel } from '../models/conversion.model';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  constructor() {}

  calcularConversion(cantidad: number, tipoCambio: number): ConversionModel {
    const cantidadDestino = cantidad * tipoCambio;
    return {
      cantidadOrigen: cantidad,
      cantidadDestino: cantidadDestino,
      monedaOrigen: 'USD',
      monedaDestino: 'EUR',
      tipoCambio: tipoCambio
    };
  }
}
