import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { SQLite } from 'ionic-native';

@Injectable()
export class UserSettings{
    //storage = new Storage(LocalStorage);

    constructor(public storage: Storage){}

    favoriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName};
        this.storage.set(team.id,JSON.stringify(item));
    }

    unfavourateTeam(team){
        this.storage.remove(team.id);
    }

    isFavoriteTeam(teamId){
        return this.storage.get(teamId).then(value => value ? true : false);
    }

 
}