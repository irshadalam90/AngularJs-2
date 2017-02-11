import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage } from '../standings/standings.page';
import { TeamsDetailPage } from '../teams-detail/teams-detail.page';
import { MyTeamsPage } from '../my-teams/my-teams.page';
//import { UserSettings } from '../../app/shared/user-settings.service';


@Component({
    templateUrl: 'team-home.page.html'
})
export class TeamHomePage{
    team: any;

    standingsTab = StandingsPage;
    teamDetailTab = TeamsDetailPage;


    constructor(private nav: NavController, private navParams: NavParams ){
        this.team = this.navParams.data;
    }

    goHome(){
        //this.nav.push(MyTeamsPage);
        this.nav.popToRoot();
    }
}