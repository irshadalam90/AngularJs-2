import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class EliteApi{

    private baseUrl = 'https://elite-schedule-app-i2-718ce.firebaseio.com'

    crrentTurny: any;
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
        this.crrentTurny = response.json()
        });

        }


    

    
}