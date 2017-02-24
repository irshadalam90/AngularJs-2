import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
//import { ControlMessagesComponent } from './control-message.component';

import { LoginPage } from '../pages/login/login.page';
import { OrderPage } from '../pages/order/order.page'; 
import { ModalPage, } from '../pages/modal/modal.page';
import { OrderDetailPage } from '../pages/order-detail/order-detail.page';

import { UserService } from '../app/shared/userService.page';
//import { ValidationService} from '../app/shared/validation.service';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ModalPage,
    OrderPage,
    OrderDetailPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ModalPage,
    OrderPage,
    OrderDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},UserService, Storage]
})
export class AppModule {}
