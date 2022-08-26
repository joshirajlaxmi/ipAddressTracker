import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ip-address-tracker-app';
  //https://geo.ipify.org/api/v2/country,city?apiKey=at_f78HKpfCgfT5ZgxpoVLU7mQROHiYi&ipAddress=8.8.8.8
  //at_f78HKpfCgfT5ZgxpoVLU7mQROHiYi
  // {
  //   "ip": "8.8.8.8",
  //   "location": {
  //     "country": "US",
  //     "region": "California",
  //     "city": "Mountain View",
  //     "lat": 37.38605,
  //     "lng": -122.08385,
  //     "postalCode": "94035",
  //     "timezone": "-07:00",
  //     "geonameId": 5375480
  //   },
  //   "domains": [
  //     "bang-seeds.cz",
  //     "blackrose.cf",
  //     "devoteamcs.com",
  //     "dns.google.com",
  //     "filmplnetcdn03.xyz"
  //   ],
  //   "as": {
  //     "asn": 15169,
  //     "name": "GOOGLE",
  //     "route": "8.8.8.0/24",
  //     "domain": "https://about.google/intl/en/",
  //     "type": "Content"
  //   },
  //   "isp": "Google LLC"
  // }
}
