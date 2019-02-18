import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';

const resultsRoutes: Routes = [
  {
    path: '',
    component: FlightListComponent,
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(resultsRoutes)
  ],
  exports: [RouterModule]
})

export class ResultsRoutingModule {
}
