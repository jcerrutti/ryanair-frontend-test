import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirportAutocompleteComponent } from '../airport-autocomplete/airport-autocomplete.component';
import { ListComponent } from '../list/list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { AirportsService } from '../../services/airports.service';
import { FlightsService } from '../../services/flights.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [SearchComponent, AirportAutocompleteComponent, ListComponent, ListItemComponent],
      providers: [AirportsService, FlightsService]
    });

    fixture = TestBed.createComponent(SearchComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Form valid when have valid iataCodes', () => {
    component.routes = {
      'MAD': ['BCN']
    };
    expect(component.form.valid).toBeFalsy();
    component.form.controls['departureAirport'].setValue({
      name: 'Madrid',
      iataCode: 'MAD',
    });
    component.form.controls['destinationAirport'].setValue({
      name: 'Barcelona',
      iataCode: 'BCN',
    });
    expect(component.form.valid).toBeTruthy();
  });
});
