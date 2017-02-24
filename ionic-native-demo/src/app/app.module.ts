import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VibrationPage } from '../pages/vibration/vibration.page';
import { CameraPage } from '../pages/camera/camera.page';
import { BarcodePage } from '../pages/barcode/barcode.page';
import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
import { CallNumberPage } from '../pages/call-number/call-number.page';
import { SmsPage } from '../pages/sms/sms.page';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VibrationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage,
    CallNumberPage,
    SmsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VibrationPage,
    CameraPage,
    BarcodePage,
    DeviceMotionPage,
    CallNumberPage,
    SmsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
