import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConversionModel } from '../../models/conversion.model';
import { HistoryFilter } from '../../models/history.model';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  historial: ConversionModel[] = [];
  filter: HistoryFilter = {};
  showTable: boolean = false;

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.loadConversionHistory();
  }

  loadConversionHistory(): void {
    this.historyService.getHistorial().subscribe({
      next: (historial: ConversionModel[]) => {
        this.historial = historial; 
      },
      error: (error: any) => {
        console.error('Error al cargar el historial:', error);
      },
    });
  }

  applyFilter(): void {
    this.loadConversionHistory();
  }

  clearFilter(): void {
    this.filter = {};
    this.loadConversionHistory();
  }
  toggleTable(): void {
    this.showTable = !this.showTable; 
  }
}
