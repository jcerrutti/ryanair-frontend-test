import { Component, Input } from '@angular/core';

import { Airport } from '../../models/airports.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public airport: Airport;

  constructor() {
  }
}
