import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightItemComponent } from './flight-item.component';
import { By } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

describe('FlightItemComponent', () => {
  let component: FlightItemComponent;
  let fixture: ComponentFixture<FlightItemComponent>;
  const expectedFlight = {
    currency: '$',
    dateFrom: '2018-01-02',
    dateTo: '2018-01-07',
    price: 210.234,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightItemComponent);
    component = fixture.componentInstance;

    component.flight = expectedFlight;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display flight items', () => {
    const currencyPipe = new CurrencyPipe('en-US');

    const dateFromElement = fixture.debugElement.query(By.css('.flight-item_date-departure')).nativeElement;
    const dateToElement = fixture.debugElement.query(By.css('.flight-item_date-return')).nativeElement;
    const priceElement = fixture.debugElement.query(By.css('.flight-item_price')).nativeElement;

    const expectedDateFrom = `From ${expectedFlight.dateFrom}`;
    const expectedDateTo = `To ${expectedFlight.dateTo}`;
    const expectedPrice = currencyPipe.transform(expectedFlight.price);

    expect(dateFromElement.textContent).toContain(expectedDateFrom);
    expect(dateToElement.textContent).toContain(expectedDateTo);
    expect(priceElement.textContent).toContain(expectedPrice);
  });
});
