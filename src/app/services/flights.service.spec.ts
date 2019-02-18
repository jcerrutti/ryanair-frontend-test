import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightsService } from './flights.service';
import { Flight, FlightResponse } from '../models/flights.model';
import { FlightRequest } from '../models/flightRequest.model';

const flightsMock: Flight = {
  currency: '$',
  dateFrom: '2018-09-01',
  dateTo: '2018-09-10',
  price: 200.123,
};


describe('FlightsService', () => {
  let injector: TestBed;
  let service: FlightsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService]
    });
    injector = getTestBed();
    service = injector.get(FlightsService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<FlightResponse>', () => {
    const baseUrl = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights';
    const reqObj: FlightRequest = {
      from: 'MAD',
      to: 'BCN',
      departureDate: '2018-09-01',
      returnDate: '2018-09-10',
      timestamp: 123456789,
    };

    const expectedEndpoint =
      `${baseUrl}/from/${reqObj.from}/to/${reqObj.to}/${reqObj.departureDate}/${reqObj.returnDate}/250/unique/?limit=15&offset-0`;

    const dummyResponse: FlightResponse = {
      flights: [
        flightsMock
      ]
    };

    service.flights$(reqObj).subscribe(response => {
      expect(response.flights.length).toBe(1);
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(expectedEndpoint);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(expectedEndpoint);
    req.flush(dummyResponse);
  });
});
