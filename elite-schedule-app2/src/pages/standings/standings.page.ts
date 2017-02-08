import{ Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import * as _ from 'lodash';

import { EliteApi } from '../../app/shared/elite-api.service';
@Component({
    templateUrl: 'standings.page.html'
})
export class StandingsPage{

    allStandings: any;
    standings: any[];
    team: any;
    divisionFilter = "division";

    constructor(private navParams: NavParams,
        private nav: NavController,
        private eliteApi: EliteApi){}


        ngOnInit(){
            this.team = this.navParams.data;
            //console.log(this.team);
            let tourneyData = this.eliteApi.getCurrentTourney();
            this.standings = tourneyData.standings;
            /*this.allStandings = 
                _.chain(this.standings)
                .groupBy('division')
                .toPairs()
                .map(item => _.zipObject(['divisionName','divisionStandings'],item))
                .value();*/

                this.allStandings = tourneyData.standings;
                this.filterDivision();
                
        }

        filterDivision(){
            if(this.divisionFilter === 'all'){
                this.standings = this.allStandings;
            }
            else{
                this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
            }
        }


        getHeader(record, recordIndex, records){
            if(recordIndex === 0 || record.division != records[recordIndex-1].division){
                return record.division;
            }
            return null;
        }

            

}