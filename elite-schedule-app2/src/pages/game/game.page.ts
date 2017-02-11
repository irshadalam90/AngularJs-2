import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home.page';
import { MapPage } from '../map/map.page';

import { EliteApi } from '../../app/shared/elite-api.service';

declare var window: any;

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
        this.game.gameTime = Date.parse(this.game.time); 

    }

    teamTapped(teamId){
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHomePage, team);
    }

    isWinner(score1,score2){
        return Number(score1) > Number(score2);
    }

    goToMap(){
        this.nav.push(MapPage, this.game);
    }

   goToDirections(){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let location = tourneyData.locations[this.game.locationId];
    window.location = `geo:${location.latitude},${location.longitude};u=35;`;
  }
}