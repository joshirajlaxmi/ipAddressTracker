import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationTrackerComponent } from './location-tracker/location-tracker.component';
import { GeoMapComponent } from './geo-map/geo-map.component';

@NgModule({
  declarations: [AppComponent, LocationTrackerComponent, GeoMapComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
