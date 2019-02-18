import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Airport } from '../../models/airports.model';

const TAB_KEY = 9;

@Component({
  selector: 'app-airport-autocomplete',
  templateUrl: './airport-autocomplete.component.html',
  styleUrls: ['./airport-autocomplete.component.scss']
})
export class AirportAutocompleteComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formField: string;
  @Input() list: Airport[];
  @Input() inputName: string;

  focusComponent = false;
  filteredAirports: Airport[] = [];
  lastKeyPressed = '';

  @ViewChild('airportForm') airportForm: ElementRef;

  // Remove or add focus to component depending of the click
  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.focusComponent = this.airportForm.nativeElement.contains(event.target);
  }

  // Listen to TAB_KEY for autocomplete the first possible option. Also remove or add focus
  @HostListener('document:keyup', ['$event'])
  keyup(event) {
    if (event.keyCode === TAB_KEY && event.keyCode !== this.lastKeyPressed) {
      if (this.filteredAirports.length) {
        this.selectedAirport(this.filteredAirports[0]);
      }
      this.focusComponent = false;
    } else {
      this.focusComponent = true;
    }
    this.lastKeyPressed = event.keyCode;
  }

  constructor() {
  }

  ngOnInit() {
    this.form.controls[this.formField].valueChanges.subscribe(({name}) => {
      this.filterAirports(name);
    });
  }

  selectedAirport({name, iataCode}) {
    this.form.controls[this.formField].setValue({
      name,
      iataCode,
    });
    this.filteredAirports = [];
  }

  filterAirports(value) {
    if (!value) {
      this.filteredAirports = [];
    } else {
      const valueUC = value.toUpperCase();
      this.filteredAirports = this.list.filter(
        (airport: Airport) =>
          airport.name.toUpperCase().includes(valueUC) || airport.iataCode.toUpperCase() === valueUC
      );
    }
  }
}
