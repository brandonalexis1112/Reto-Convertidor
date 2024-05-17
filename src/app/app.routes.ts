import { Routes } from '@angular/router';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CaculatorComponent },
  { path: 'tipo-cambio', component: ExchangeRateComponent },
  { path: 'history', component: HistoryComponent },
];
