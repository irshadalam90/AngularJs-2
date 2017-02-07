import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi } from '../../app/shared/elite-api.service';


@Component({
    templateUrl: 'teams.page.html'
})
export class TeamsPage{

    teams: any[];
    private myError;
    constructor(private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi,
        private loadingController: LoadingController ){

    }


ngOnInit(){
    let id = this.navParams.data.id;
    console.log(id);
    this.getTournamentData(id);
}
getTournamentData(id: any){
    //let SelectedTourny = this.navParams.data;
    let loader = this.loadingController.create({
        content: 'Getting teams...'
        //spinner: 'dots'
    });
    loader.present().then(() => {
        this.eliteApi.getTournamentData(id)
        .subscribe(data => {
            this.teams = data.teams;
            loader.dismiss();
            },
                error => {this.myError = <any> error
            });
     
    });
    
        
}

itemTapped($event,team){
    this.nav.push(TeamHomePage, team);

}

}