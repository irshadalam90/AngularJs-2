import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core'; 

import { EliteApi } from '../../app/shared/elite-api.service';
import { TeamsPage } from '../teams/teams.page';



@Component({
    templateUrl: 'tournaments.page.html'
})
export class TournamentsPage{

    tournaments: any;
    errorMessage: any;

    constructor(private nav: NavController, private eliteApi: EliteApi){

    }
      
     itemTapped($event, item){
         this.nav.push(TeamsPage,item);
     }

     ngOnInit(){
        this.eliteApi.getTournaments()
        .subscribe(data => this.tournaments = data,
        error => this.errorMessage = <any> error );
        //this.eliteApi.getTournaments().then(data => this.tournaments = data);
        console.log(this.tournaments);
    }

}