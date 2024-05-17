export interface HistoryItem {
    id: number;
    fecha: Date;
    monedaOrigen: string;
    montoOrigen: number;
    monedaDestino: string;
    montoDestino: number;
  }
  
  export interface HistoryFilter {
    fechaInicio?: Date;
    fechaFin?: Date;
    monedaOrigen?: string;
    monedaDestino?: string;
  }
  