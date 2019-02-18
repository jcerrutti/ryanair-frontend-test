import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightItemComponent } from './flight-item/flight-item.component';
import { ResultsRoutingModule } from './results.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule,
  ],
  declarations: [FlightListComponent, FlightItemComponent]
})
export class ResultsModule {
}
