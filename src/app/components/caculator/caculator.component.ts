import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversionModel } from '../../models/conversion.model';
import { CalculadoraService } from '../../services/calculator.service';
import { ExchangeRateService } from '../../services/exchange-rate.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-caculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './caculator.component.html',
  styleUrl: './caculator.component.css',
})
export class CaculatorComponent implements OnInit {
  cantidadOrigen: number = 0;
  tipoCambio: number = 0;
  conversion: ConversionModel | undefined;
  exchangeRate: number = 0;
  baseCurrency: string = 'USD'; 
  monedaDestino: string = 'PEN';

  constructor(
    private calculadoraService: CalculadoraService,
    private historialService: HistoryService,
    private exchangeRateService: ExchangeRateService
  ) {}

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRates().subscribe((data) => {
      this.exchangeRate = data.rates[this.monedaDestino];
      this.baseCurrency = data.base;
    });
  }
  intercambiarMonedas(): void {
    const tempCantidadOrigen = this.cantidadOrigen;
    this.cantidadOrigen = this.tipoCambio;
    this.tipoCambio = tempCantidadOrigen;
    this.exchangeMonedas(); 
    this.calcularConversion();
    this.updateConversion();
  }

  calcularConversion(): void {
    if (this.cantidadOrigen && this.exchangeRate) { 
      this.conversion = this.calculadoraService.calcularConversion(
        this.cantidadOrigen,
        this.exchangeRate 
      );
      this.tipoCambio = this.conversion.cantidadDestino;
      this.historialService.getConversionHistory(this.conversion);
    }
  }
  private exchangeMonedas(): void {
    const tempBaseCurrency = this.baseCurrency;
    this.baseCurrency = this.monedaDestino;
    this.monedaDestino = tempBaseCurrency;
  }
  private updateConversion(): void {
    if (this.cantidadOrigen && this.exchangeRate) { 
      this.conversion = this.calculadoraService.calcularConversion(
        this.cantidadOrigen,
        1 / this.exchangeRate  // Cambio de multiplicación a división
      );
      this.tipoCambio = this.conversion.cantidadDestino;
      this.historialService.getConversionHistory(this.conversion);
    }
  }
}
