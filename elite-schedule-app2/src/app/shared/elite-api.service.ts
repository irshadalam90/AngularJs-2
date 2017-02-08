import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class EliteApi{

    private baseUrl = 'https://elite-schedule-app-i2-718ce.firebaseio.com'

    currentTourny: any={};
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

    getTournamentData(tournyId): Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tournyId}.json`)
        .map((response: Response) => {
        this.currentTourny = response.json()
        return this.currentTourny;
        });
    }

    /*getTournamentData(tournyId, forceRefresh: boolean = false): Observable<any>{
        if(!forceRefresh && this.tourneyData[tournyId]){
            this.currentTourny = this.tourneyData[tournyId];
            console.log("** no need to make http call, just return the data");
            return Observable.of(this.currentTourny);
        }

        return this.http.get(`${this.baseUrl}/tournaments-data/${tournyId}.json`)
        .map((response: Response) => {
            this.tourneyData[tournyId]=response.json();
            this.currentTourny = this.tourneyData[tournyId];
            return this.currentTourny;
        });
    }*/

    /*refreshCurrentTourney(){
        return this.getTournamentData(this.currentTourny.tournament.id,true);
    }*/

    getCurrentTourney(){
        return this.currentTourny;
    }


    

    
}