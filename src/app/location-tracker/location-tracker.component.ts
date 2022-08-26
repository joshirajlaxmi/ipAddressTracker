import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Geo } from '../shared/geo.model';
import { LocationTrackerService } from './location-tracker.service';

@Component({
  selector: 'app-location-tracker',
  templateUrl: './location-tracker.component.html',
  styleUrls: ['./location-tracker.component.scss'],
})
export class LocationTrackerComponent implements OnInit {
  locationInfo: Geo;
  constructor(private locationService: LocationTrackerService) {}

  ngOnInit(): void {
    this.locationService.fetchGeoLocationData('8.8.8.8').subscribe(
      (locationData) => {
        this.locationInfo = locationData;
        console.log('Location info is:::: ', this.locationInfo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchLocationData(ipAddress: string) {
    this.locationService.fetchGeoLocationData(ipAddress).subscribe(
      (locationData) => {
        this.locationInfo = locationData;
        console.log('Location info is:::: ', this.locationInfo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(form: NgForm) {
    // if (!form.valid) {
    //   return;
    // }
    console.log('submit clicked');
    const ipAddress = form.value.ipAddress;
    this.fetchLocationData(String(ipAddress));
  }
}
