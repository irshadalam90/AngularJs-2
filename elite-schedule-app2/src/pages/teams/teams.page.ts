import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import * as _ from "lodash";


import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi } from '../../app/shared/elite-api.service';


@Component({
    templateUrl: 'teams.page.html'
})
export class TeamsPage{

    private allTeams: any;
    private allTeamDivisions: any;
    teams: any[];
    private myError;
    queryText: string;

    constructor(private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi,
        private loadingController: LoadingController ){

    }


ngOnInit(){
    let id = this.navParams.data.id;
    //console.log(id);
    this.getTournamentData(id);
}
getTournamentData(id: any){
    //let SelectedTourny = this.navParams.data;
    let loader = this.loadingController.create({
        content: 'Getting data...'
        //spinner: 'dots'
    });
    loader.present().then(() => {
        this.eliteApi.getTournamentData(id)
        .subscribe(data => {
            this.allTeams = data.teams;
            this.allTeamDivisions=
                _.chain(data.teams)
                 .groupBy('division')
                 .toPairs()
                 .map(item => _.zipObject(['divisionName','divisionTeams'],item))
                 .value();
                 this.teams = this.allTeamDivisions;
                 console.log(this.teams);
                 loader.dismiss();
            },
                error => {this.myError = <any> error
            });
     
    });
    
        
}

itemTapped($event,team){
    this.nav.push(TeamHomePage, team);

}

updateTeams(){
    let queryTextLower = this.queryText.toLowerCase();
    let filteredTeams = [];
    _.forEach(this.allTeamDivisions,td => {
    let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
    if(teams.length){
        filteredTeams.push({ divisionName: td.divisionName,divisionTeams: teams });
    }   
    });
    this.teams = filteredTeams;
}

}