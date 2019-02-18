import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Airport } from '../../models/airports.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() airports: Airport[];
  @Output() public selected = new EventEmitter<Airport>();

  constructor() {
  }

  ngOnInit() {
  }

  public onClick($event, airport) {
    this.selected.emit(airport);
  }
}
