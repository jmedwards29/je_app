import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeocodeServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeocodeServiceProvider Provider');
  }

}
