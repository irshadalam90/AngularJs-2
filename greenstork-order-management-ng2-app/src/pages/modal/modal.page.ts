import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { UserService } from '../../app/shared/userService.page';

@Component({
  templateUrl: 'modal.page.html'
})
export class ModalPage {

  showResetPassword: number = 1;
  forgotPassword: any = {};
  
  user: string;
  

  constructor(public navCtrl: NavController,
            private viewCtrl: ViewController,
            private userService: UserService,
            private navParams: NavParams) {

              
               
  }
  close(){
    this.viewCtrl.dismiss();
  }

  //modelHide(){
    //this.showResetPassword = 1;
  //}

    resetPasswordInstructions(){
      //this.viewCtrl.dismiss();
      //this.modelHide();
      this.showResetPassword = 2;
      this.userService.resetPasswordInstructions(this.forgotPassword.email)
      .subscribe(data =>{
        this.forgotPassword.id = data.user.data.id;
        this.showResetPassword = 2;
     });
  } 

  codeConfirm(){
    
    this.userService.codeConfirm(this.forgotPassword.id, this.forgotPassword.code)
    .subscribe(data => {
      this.user = data.user;
      console.log(this.user);
      this.showResetPassword = 3;
    });
  }

  resetPassword(){
    this.userService.resetPassword(this.forgotPassword.id, this.forgotPassword.password)
    .subscribe(data => {
      this.viewCtrl.dismiss();
    })
  }
}
