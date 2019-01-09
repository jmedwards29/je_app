import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherLocation } from '../../interfaces/weather-location';
import { LocationsServiceProvider } from '../../providers/locations-service/locations-service';

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
  locs: Array<WeatherLocation>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public locationsService: LocationsServiceProvider) {
    locationsService.getLocations().then(res => {
      this.locs = res;
    });
  }

  addLocation(loc) {
    console.log('addLocation');
  }

  deleteLocation(loc) {
    console.log('deleteLocation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

}
