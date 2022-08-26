import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, throwError } from 'rxjs';
import { Geo } from '../shared/geo.model';

@Injectable({ providedIn: 'root' })
export class LocationTrackerService {
  //params
  locationParams = new Subject<Geo>();

  //
  constructor(private http: HttpClient) {}
  //
  fetchGeoLocationData(ipAddress: string) {
    console.log('fetching location data for: ', ipAddress);
    let searchParams = new HttpParams();
    searchParams = searchParams.append(
      'apiKey',
      'at_f78HKpfCgfT5ZgxpoVLU7mQROHiYi'
    );
    searchParams = searchParams.append('ipAddress', ipAddress);
    return this.http
      .get<Geo>('https://geo.ipify.org/api/v2/country,city', {
        params: searchParams,
        responseType: 'json',
      })
      .pipe(
        map((responseData) => {
          // let geoData: Geo;
          // geoData = responseData;
          console.log('response is::: ', responseData);
          this.locationParams.next(responseData);
          return responseData;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}
