import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AirportsService } from '../../services/airports.service';
import { FlightRequest } from '../../models/flightRequest.model';
import { FlightBookingSelector, Airport, Routes } from '../../models/airports.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  public airports: Airport[] = [];
  public destinationAirports: Airport[] = [];
  public routes: Routes;
  public today = new Date();

  public form: FormGroup;

  constructor(private router: Router,
              private _airportService: AirportsService) {
  }

  ngOnInit() {
    const newAirport = () => ({
      name: new FormControl('', Validators.required),
      iataCode: new FormControl('', Validators.required),
    });
    this.form = new FormGroup({
      departureAirport: new FormGroup(newAirport()),
      destinationAirport: new FormGroup(newAirport()),
      departureDate: new FormControl(['', Validators.required]),
      returnDate: new FormControl(['', Validators.required]),
    });

    this.form.valueChanges.subscribe((form: FormGroup) => {
      const {iataCode} = form['departureAirport'];
      if (iataCode) {
        this.filterDestinationAirportList(iataCode);
      }
    });

    this._airportService.airports$().subscribe((result: FlightBookingSelector) => {
      this.airports = result.airports;
      this.routes = result.routes;
    });
  }

  filterDestinationAirportList(iataCode: string) {
    const destinationRoutes = this.routes[iataCode];
    this.destinationAirports = this.airports.filter(
      (airport: Airport) => destinationRoutes.includes(airport.iataCode)
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const {iataCode: departureIata} = this.form.value['departureAirport'];
    const {iataCode: destinationIata} = this.form.value['destinationAirport'];

    const flightRequest: FlightRequest = {
      from: departureIata,
      to: destinationIata,
      departureDate: this.form.value['departureDate'],
      returnDate: this.form.value['returnDate'],
      timestamp: +new Date(),
    };
    this.router.navigate(['/flights', flightRequest]);
  }
}
