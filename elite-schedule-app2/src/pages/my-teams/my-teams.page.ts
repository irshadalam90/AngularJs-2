import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home.page';
import { TournamentsPage } from '../tournaments/tournaments.page';
import { EliteApi } from '../../app/shared/elite-api.service';

@Component({
    templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage{

    team: any;

    favourates = [
        {
            team: {id: '6149', name: 'Cyclones  3rd', coach: 'Glenn Nelson'},
            tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: {id: '795', name: 'DC Assault', coach: 'Bartlett'},
            tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
            tournamentName: 'Holiday Hoops Challenge'
        }

    ];

    constructor(private nav: NavController,
                private loadingController: LoadingController,
                private eliteApi: EliteApi ){}
    goToTournaments(){
        this.nav.push(TournamentsPage);
    }

    favourateTapped($event,favourite){
        let loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favourite.tournamentId)
        .subscribe(t => this.nav.push(TeamHomePage, favourite.team));
    }
}