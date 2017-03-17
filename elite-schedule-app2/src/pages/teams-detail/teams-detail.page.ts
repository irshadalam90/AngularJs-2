import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import * as _ from 'lodash';
//import * as _ from 'moment';

import { EliteApi } from '../../app/shared/elite-api.service';
//import { UserSettings } from '../../app/shared/user-settings.service';
import { MyTeamsPage } from '../my-teams/my-teams.page';
import { GamePage } from '../game/game.page';


@Component({
    templateUrl: 'teams-detail.page.html'
})
export class TeamsDetailPage{

    
    allGames: any[];
    team: any;
    dateFilter: string;
    private games: any;
    private tournyData: any;
    teamStanding: any;
    useDateFilter = false;
    isFollowing = false;

    constructor(private nav:NavController,
     private navParams: NavParams,
     private eliteApi: EliteApi,
     private alert: AlertController,
     private toastController: ToastController){
         
     }

    ngOnInit(){
        this.team = this.navParams.data;
        console.log(this.team);
        this.tournyData = this.eliteApi.getCurrentTourney();
        this.games = _.chain(this.tournyData.games)
                      .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                      .map(g => {
                          let isTeam1 = (g.team1Id == this.team.id);
                          let opponentName = isTeam1 ? g.team2 : g.team1;
                          let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
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

        this.allGames = this.games;
        this.teamStanding = _.find(this.tournyData.standings, { 'teamId': this.team.id });

        //this.userSettings.isFavoriteTeam(this.team.id).then(value => this.isFollowing = value);
    }

    getScoreDisplay(isTeam1, team1Score, team2Score){
        if(team1Score && team2Score){
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? 'W: ': 'L: ';
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

getScoreWorL(game){
    return game.scoreDisplay ? game.scoreDisplay[0] : '';
}

/*getScoreDisplayBadgeClass(game){
    game.scoreDisplay.indexOf('w:') === 0 ? 'badge-primary' : 'badge-danger';
}*/

/*dateChanged(){
    this.games = _.filter(this.allGames, g => moment(g.time).)
}*/

    toggleFollow(){
        if(this.isFollowing){
            let confirm = this.alert.create({
                title: "Unfollow",
                message: "Are you sure you want to Unfollow?",
                buttons: [
                    {
                        text: "Yes",
                        handler: () => {
                            this.isFollowing = false;
                            //TODO persist data
                            //this.userSettings.unfavourateTeam(this.team);
                            let toast = this.toastController.create({
                                message: 'You have unfollowed this team',
                                duration: 2000,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    {text: 'No'}
                ]
            });
            confirm.present();
        }
        else{
            this.isFollowing = true;
            //TODO persist data
            /*this.userSettings.favoriteTeam(
                this.team,
                this.tournyData.tournament.id,
                this.tournyData.tournament.name
            );*/
        }
    }
    refreshAll(refresher){
        this.eliteApi.refreshCurrentTourney()
        .subscribe(() => {
            refresher.complete();
            this.ngOnInit();
        });
    }

     
}