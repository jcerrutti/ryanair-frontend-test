import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FlightBookingSelector } from '../models/airports.model';

@Injectable()
export class AirportsService {
  private url =
    'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';

  constructor(private http: HttpClient) {
  }

  public airports$(): Observable<FlightBookingSelector> {
    return this.http.get<FlightBookingSelector>(this.url);
  }
}
