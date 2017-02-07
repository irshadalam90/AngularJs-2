import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi } from '../../app/shared/elite-api.service';


@Component({
    templateUrl: 'game.page.html'
})

export class GamePage{

    game:any;

    constructor(private navParams:NavParams,
                private nav: NavController,
                private eliteApi: EliteApi){}


    ngOnInit(){
        this.game = this.navParams.data;

    }

    teamTapped(teamId){
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHomePage, team);
    }
}