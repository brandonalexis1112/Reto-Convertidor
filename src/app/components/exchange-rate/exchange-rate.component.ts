import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.css',
})
export class ExchangeRateComponent implements OnInit {
  tipoCambioCompra: number | undefined;
  tipoCambioVenta: number | undefined;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRates();
  }

  getExchangeRate(): void {
    const observer: Observer<any> = {
      next: (data: any) => {
        this.tipoCambioCompra = data.rates.COMPR;
        this.tipoCambioVenta = data.rates.VENTA;
      },
      error: (error: any) => {
        console.error('Error al obtener el tipo de cambio:', error);
      },
      complete: () => {
        console.log('La operación se ha completado con éxito');
      },
    };

    this.exchangeRateService.getExchangeRates().subscribe(observer);
  }
}
