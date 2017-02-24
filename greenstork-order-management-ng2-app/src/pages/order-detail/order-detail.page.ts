import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { UserService } from '../../app/shared/userService.page';

@Component({
    templateUrl: 'order-detail.page.html'
})
export class OrderDetailPage{

     order: any = {};
     attributes: any = {};
     items: any = [];
    id: any;
    constructor(private navParams:NavParams,
         private userService: UserService ){}


    ionViewDidLoad(){
        this.order = this.navParams.data;
        //this.id = this.order.attributes.time;
        this.attributes = this.order.attributes;
        this.items = this.attributes.items;
        console.log(this.items);
    }

}