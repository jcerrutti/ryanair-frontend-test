export interface FlightResponse {
  flights: Flight[];
}

export interface Flight {
  currency: string;
  dateFrom: string;
  dateTo: string;
  price: number;
}
