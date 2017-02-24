import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { VibrationPage } from '../pages/vibration/vibration.page';
import { CameraPage } from '../pages/camera/camera.page';
import { BarcodePage } from '../pages/barcode/barcode.page';
import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
import { CallNumberPage } from '../pages/call-number/call-number.page';
import { SmsPage } from '../pages/sms/sms.page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  goToHome(){
    this.nav.push(HomePage);
  }

  vibration(){
    this.nav.push(VibrationPage);
  }

  goToCamera(){
    this.nav.push(CameraPage);
  }

  goToBarcode(){
    this.nav.push(BarcodePage);
  }

  goToDeviceMotion(){
    this.nav.push(DeviceMotionPage);
  }

  goToCall(){
    this.nav.push(CallNumberPage);
  }

  goToSms(){
    this.nav.push(SmsPage);
  }
}
