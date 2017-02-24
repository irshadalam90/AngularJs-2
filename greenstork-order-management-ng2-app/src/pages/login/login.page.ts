import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ModalPage,  } from '../modal/modal.page';  
import { OrderPage } from '../order/order.page';
import { UserService } from '../../app/shared/userService.page';


@Component({
  templateUrl: 'login.page.html'
})
export class LoginPage {
    
    userLoginInfo: any = {};
    public user: any;
    userForm: FormGroup;
    //submitAttempt: boolean = false;
    

  constructor(public modalCtrl: ModalController,
            public userService: UserService,
            public nav: NavController,
            public storage: Storage,
            public formBuilder: FormBuilder) {

            this.userForm = formBuilder.group({
            email: ['',  Validators.required ],
            password: ['', Validators.required ]
    });

 }

    

    openModal() {
        let createModal = this.modalCtrl.create(ModalPage);
        createModal.present();
    }

    

    login(){
        if(!this.userForm.valid){
            console.log("please enter all fields")
        }
        else{
            console.log("successfull");
            console.log(this.userForm.value);

        this.userService.login(this.userForm.value)
        .subscribe(data =>{
            this.user = data.user.data;
            this.storage.set('user',this.user);
            //console.log(this.user);
            this.nav.push(OrderPage);
        });

        }
    }
    
    
     
}





