import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { OnInit } from '@angular/core'; 

import { EliteApi } from '../../app/shared/elite-api.service';
import { TeamsPage } from '../teams/teams.page';



@Component({
    templateUrl: 'tournaments.page.html'
})
export class TournamentsPage{

    tournaments: any;
    errorMessage: any;

    constructor(private nav: NavController, 
    private eliteApi: EliteApi,
    private loadingController: LoadingController){

    }
      
     itemTapped($event, item){
         this.nav.push(TeamsPage,item);
     }

     ngOnInit(){
         let loader = this.loadingController.create({
             content: 'Getting tournaments...'
             //spinner: 'dots'
         });

         loader.present().then(() => {
             this.eliteApi.getTournaments()
            .subscribe(data => {
                this.tournaments = data;
                loader.dismiss();
            },
                error => {
                this.errorMessage = <any> error
            });
            
            //this.eliteApi.getTournaments().then(data => this.tournaments = data);
        });
        
    }

}