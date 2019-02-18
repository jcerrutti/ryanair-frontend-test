import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AirportsService } from './airports.service';
import { Airport, Countries, FlightBookingSelector, Routes } from '../models/airports.model';

const country: Countries = {
  code: 'code',
  currency: '$',
  englishSeoName: 'englishSeoName',
  name: 'name',
  seoName: 'seoName',
  url: 'url',
};

const airport: Airport = {
  iataCode: 'MAD',
  name: 'Madrid',
  base: true,
  country: {
    code: 'code',
    currency: '$',
    englishSeoName: 'englishSeoName',
    name: 'Spain',
    seoName: 'seoName',
    url: 'url',
  },
  latitude: 20,
  longitude: 20,
};

const routes: Routes = {
  'MAD': ['mad']
};

describe('AirportsService', () => {
  let injector: TestBed;
  let service: AirportsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AirportsService]
    });
    injector = getTestBed();
    service = injector.get(AirportsService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<FlightBookingSelector>', () => {
    const expectedEndpoint = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';

    const dummyResponse: FlightBookingSelector = {
      airports: [
        airport,
      ],
      countries: [
        country
      ],
      routes: routes
    };

    service.airports$().subscribe(response => {
      expect(response.airports.length).toBe(1);
      expect(response.countries.length).toBe(1);
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(expectedEndpoint);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(expectedEndpoint);
    req.flush(dummyResponse);
  });
});
