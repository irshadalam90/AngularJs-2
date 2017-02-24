import { Component } from '@angular/core';
import { NavParams, LoadingController, NavController } from 'ionic-angular';

import { UserService } from '../../app/shared/userService.page';
import { OrderDetailPage } from '../order-detail/order-detail.page';

@Component({
  templateUrl: 'order.page.html'
})
export class OrderPage {

  auth_token: string;
  orders: any;
  stores: any[];
  order_date: any[];
  statuses: any[];
  type: any[];
  selectedstore: string;
  selectedODate: string;
  selectedstatus: string;
  selectedtype: string;
  pageOrder: string;
  ordersData: any;
  id: any;
  
  constructor(private NavParams: NavParams,
              private userService: UserService,
              private loadingController: LoadingController,
              private nav: NavController) {
                this.pageOrder = "1";
    
  }

  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'loading...'
    });
    loader.present().then(() => {
    this.userService.getOrder()
    .subscribe(data => {
      this.orders = data.orders.data;
      
      this.stores = data.stores;
      //console.log(this.stores);
			//vm.id = data.stores[2].id;
			this.selectedstore = this.stores[0];
      
      this.order_date = data.order_date;
			this.selectedODate = this.order_date[1];

			this.statuses=data.statuses;
			this.selectedstatus = this.statuses[0];

			this.type=data.type;
			this.selectedtype = this.type[2];
      loader.dismiss();
    });
    });
  }

  change(){
    this.userService.SelectChange(this.pageOrder,this.selectedstore, this.selectedODate, this.selectedstatus, this.selectedtype)
    .subscribe(data => {
      this.orders = data.orders.data;
      
    });
 }

 orderDetail($event,order){
   this.nav.push(OrderDetailPage, order);
 }
  
  
}
