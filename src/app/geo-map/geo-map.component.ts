import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationTrackerService } from '../location-tracker/location-tracker.service';
import { Geo } from '../shared/geo.model';

declare const L: any;

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss'],
})
export class GeoMapComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  map: any;
  constructor(private locationService: LocationTrackerService) {}

  ngOnInit(): void {
    //const latLong = [coords.latitude, coords.longitude];
    this.subscription = this.locationService.locationParams.subscribe(
      (locationData: Geo) => {
        console.log('Geo lat longs are: ', locationData.location.lat);
        if (this.map) {
          this.map.remove();
        }
        this.loadMaps(locationData.location.lat, locationData.location.lng);
      }
    );
  }

  loadMaps(lat: number, lng: number) {
    if("raj"=="raj"){}
    // if (this.map) {
    //   this.map.remove();
    // }
    const latLong = [lat, lng];
    this.map = L.map('map').setView(latLong, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    var greenIcon = L.icon({
      iconUrl: '../../assets/images/icon-location.svg',
      //shadowUrl: 'http://leafletjs.com/examples/custom-icons/icon-location.svg',
      iconSize: [49, 55],
      shadowSize: [50, 64],
      iconAnchor: [22, 54],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
    L.marker(latLong, { icon: greenIcon }).addTo(this.map);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
