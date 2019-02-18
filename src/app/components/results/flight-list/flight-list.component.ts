import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlightsService } from '../../../services/flights.service';
import { FlightRequest } from '../../../models/flightRequest.model';
import { Flight, FlightResponse } from '../../../models/flights.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit, OnDestroy {

  public flightList: Flight[];
  public noResults: boolean;
  public loading = false;
  public error = null;

  private paramsSubscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _flightsService: FlightsService) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const flightRequest: FlightRequest = {
        from: params.from,
        to: params.to,
        departureDate: params.departureDate,
        returnDate: params.returnDate,
        timestamp: params.timestamp,
      };
      this.loading = true;
      this._flightsService.flights$(flightRequest).subscribe(
        (flightsResponse: FlightResponse) => {
          this.noResults = !flightsResponse.flights.length;
          this.flightList = flightsResponse.flights;
        },
        (err) => {
          this.error = err;
          this.loading = false;
        },
        () => {
          this.loading = false;
        },
      );
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
