import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../app/shared/elite-api.service';

declare var window: any;
@Component({
    templateUrl: 'map.page.html'
})
export class MapPage{

    map: any = {};
    //lat: number = 51.678418;
     //lng: number = 7.809007;
  
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public eliteApi: EliteApi) {
    
  }

  ionViewDidLoad(){
    let games = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    let location = tourneyData.locations[games.locationId];

    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location 
    };

  }

  getDirections(){
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;  
  }

}