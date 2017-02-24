import { Component } from '@angular/core';
import { SMS } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'sms.page.html'
})
export class SmsPage {

  constructor(public navCtrl: NavController) {
    
  }


    smsToNumber(){
       SMS.send('7290887646', 'Hello world!');
    }

  
}
