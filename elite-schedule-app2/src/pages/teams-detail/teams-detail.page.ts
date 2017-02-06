import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams.page';


@Component({
    templateUrl: 'teams-detail.page.html'
})
export class TeamsDetailPage{

    team: any;

    constructor(private nav:NavController, private navParams: NavParams){
        this.team = this.navParams.data;
        console.log("**nav params",this.navParams);
    }

goHome(){
    //this.nav.push(MyTeamsPage);
    //this.nav.popToRoot();
    this.nav.parent.parent.popToRoot();
}
}