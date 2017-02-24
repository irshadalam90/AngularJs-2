import { Component } from '@angular/core';
import {Vibration} from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'vibration.page.html'
})
export class VibrationPage {

  constructor(public navCtrl: NavController) {
    
  }


  vibrate(){
      Vibration.vibrate(2000);
  }

  vibratePattern(){
      Vibration.vibrate([2000,1000,500]);
  }
}
