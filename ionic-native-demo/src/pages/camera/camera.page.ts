import { Component } from '@angular/core';
import { Camera, CameraOptions } from 'ionic-native' 

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'camera.page.html'
})
export class CameraPage {
    
    imgSrc: any;

  constructor(public navCtrl: NavController) {
    
  }


  camera(){
     let options: CameraOptions = {
         destinationType: Camera.DestinationType.FILE_URI,
         sourceType: Camera.PictureSourceType.CAMERA,
         encodingType: Camera.EncodingType.PNG,
         targetHeight: 500,
         targetWidth: 500,
         saveToPhotoAlbum: false
     };

     Camera.getPicture(options).then((imageUri)=>{
         this.imgSrc =  imageUri;
     });
  }

  
}
