import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi } from '../../app/shared/elite-api.service';


@Component({
    templateUrl: 'teams.page.html'
})
export class TeamsPage{

    teams: any[];
    myError: any;
    constructor(private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi ){

    }


    /*teams = [
        { id:1, name: 'HC Elite'},
        { id:2, name: 'Team Takeover'},
        { id:3, name: 'DC Thunder'}
    ];*/



ngOnInit(){
    let SelectedTourny = this.navParams.data;
    this.eliteApi.getTournamentData(SelectedTourny.id)
    .subscribe(data => this.teams = data.teams,
        error => this.myError = <any> error )
        console.log(this.teams);
}

itemTapped($event,team){
    this.nav.push(TeamHomePage, team);

}

}