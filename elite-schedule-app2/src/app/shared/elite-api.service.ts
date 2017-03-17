import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class EliteApi{

    private baseUrl = 'https://elite-schedule-app-i2-718ce.firebaseio.com'

    currentTourney: any={};
    private tourneyData = {};
    constructor(private http: Http){

    }

    getTournaments(){
    return this.http.get(`${this.baseUrl}/tournaments.json`)
        .map((response: Response) => response.json())
        //.catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    /*getTournamentData(tournyId): Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tournyId}.json`)
        .map((response: Response) => {
        this.currentTourny = response.json()
        return this.currentTourny;
        });
    }*/

    getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log('**no need to make HTTP call, just return the data'); 
            return this.currentTourney;
        }

        // don't have data yet
        console.log('**about to make HTTP call');
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
            .map(response => {
                this.tourneyData[tourneyId] = response.json();
                this.currentTourney = this.tourneyData[tourneyId];
                return this.currentTourney;
            });
    }

    refreshCurrentTourney(){
        return this.getTournamentData(this.currentTourney.tournament.id,true);
    }

    getCurrentTourney(){
        return this.currentTourney;
    }


    

    
}