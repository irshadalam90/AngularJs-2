import { Component } from '@angular/core';
import { DeviceMotionAccelerationData, DeviceMotion, DeviceMotionAccelerometerOptions } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'device-motion.page.html'
})
export class DeviceMotionPage {

    data: any;
    subscription: any;

  constructor(public navCtrl: NavController) {
    
  }

  startWatching(){
      var options: DeviceMotionAccelerometerOptions = {
          frequency: 500
      };
      this.subscription = DeviceMotion.watchAcceleration(options).subscribe((accelaration:DeviceMotionAccelerationData) => {
          this.data = accelaration;
      });
  }
  stopWatching(){
      this.subscription.unsubscribe();
  }


  
}
