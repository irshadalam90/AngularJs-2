import { Component } from '@angular/core';
import { CallNumber } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'call-number.page.html'
})
export class CallNumberPage {

  constructor(public navCtrl: NavController) {
    
  }


    callToNumber(){
        CallNumber.callNumber('7290887646', true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }

  
}
