import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native' 

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'barcode.page.html'
})
export class BarcodePage {
    
  results: any;  
   
  constructor(public navCtrl: NavController) {
    
  }


  scan(){
      BarcodeScanner.scan().then((barcodeData) => {
          this.results = barcodeData;
      });
     
  }

  lookup(){
      window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }
  
}
