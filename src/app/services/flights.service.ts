import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FlightResponse } from '../models/flights.model';
import { HttpClient } from '@angular/common/http';
import { FlightRequest } from '../models/flightRequest.model';

@Injectable()
export class FlightsService {
  private baseUrl = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights';

  constructor(private http: HttpClient) {
  }

  public flights$(flightRequest: FlightRequest): Observable<FlightResponse> {
    const {from, to, departureDate, returnDate} = flightRequest;
    const url = `${
      this.baseUrl
      }/from/${from}/to/${to}/${departureDate}/${returnDate}/250/unique/?limit=15&offset-0`;
    return this.http.get<FlightResponse>(url);
  }
}
