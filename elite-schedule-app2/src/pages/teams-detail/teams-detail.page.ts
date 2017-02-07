import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { EliteApi } from '../../app/shared/elite-api.service';
import { MyTeamsPage } from '../my-teams/my-teams.page';
import { GamePage } from '../game/game.page';


@Component({
    templateUrl: 'teams-detail.page.html'
})
export class TeamsDetailPage{

    team: any;
    dateFilter: string;
    private games: any;
    private tournyData: any;
    teamStanding: any;

    constructor(private nav:NavController,
     private navParams: NavParams,
     private eliteApi: EliteApi){}

    ngOnInit(){
        this.team = this.navParams.data;
        this.tournyData = this.eliteApi.getCurrentTourney();
        this.games = _.chain(this.tournyData.games)
                      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                      .map(g => {
                          let isTeam1 = (g.team1Id == this.team.id);
                          let opponentName = isTeam1 ? g.team2 : g.team1;
                          let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2.score);
                          return{
                              gameId: g.id,
                              opponent: opponentName,
                              time: Date.parse(g.time),
                              location: g.location,
                              locationUrl: g.locationUrl,
                              scoreDisplay: scoreDisplay,
                              homeAway: (isTeam1 ? 'vs.' : 'at')
                            }
                      }) 
                      .value();

        this.teamStanding = _.find(this.tournyData.standings, { 'teamId': this.team.id });
    }

    getScoreDisplay(isTeam1, team1Score, team2Score){
        if(team1Score && team2Score){
            var teamScore = (isTeam1 ? teamScore : team1Score);
            var opponentScore = (isTeam1 ? teamScore : team1Score);
            var winIndicator = teamScore > opponentScore ? 'w: ': 'L: ';
            return winIndicator + teamScore + "-" + opponentScore ; 
        }
        else{
         return "";
        }
    }

/*goHome(){
    //this.nav.push(MyTeamsPage);
    //this.nav.popToRoot();
    this.nav.parent.parent.popToRoot();
}*/

gameClicked($event, game){
    let sourceGame = this.tournyData.games.find(g => g.id === game.gameId);
    this.nav.parent.parent.push(GamePage, sourceGame);
}
}