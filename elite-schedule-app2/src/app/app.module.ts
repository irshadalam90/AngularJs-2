import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TeamsDetailPage } from '../pages/teams-detail/teams-detail.page';
import { StandingsPage } from '../pages/standings/standings.page'; 
import { TeamHomePage } from '../pages/team-home/team-home.page';
import { GamePage } from '../pages/game/game.page';
import { EliteApi } from './shared/elite-api.service';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamsDetailPage,
    StandingsPage,
    TeamHomePage,
    GamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamsDetailPage,
    StandingsPage,
    TeamHomePage,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},EliteApi
  ]
})
export class AppModule {}
