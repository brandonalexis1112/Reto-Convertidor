import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { HistoryComponent } from './components/history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CaculatorComponent,
    ExchangeRateComponent,
    HistoryComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reto-convertidor-17';
}
