import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchComponent } from './components/search';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { AirportAutocompleteComponent } from './components/airport-autocomplete/airport-autocomplete.component';

import { AirportsService } from './services/airports.service';
import { FlightsService } from './services/flights.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListItemComponent,
    ListComponent,
    AirportAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AirportsService, FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
