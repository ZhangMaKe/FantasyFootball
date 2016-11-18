import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Player } from './player';

@Injectable()
export class PlayerService {

    private playersUrl = "http://localhost:5000/api/Players/GetAllPlayers";

    private playersByTeamUrl = "http://localhost:5000/api/Players/GetPlayerByTeam";

    constructor(private http: Http) {

    }

    players: Player[] = [
        // { id: 1, name: "Mesut Ozil", team: "Arsenal", number: 11, position: "MID", value: 10 },
        // { id: 2, name: "Alexis Sanchez", team: "Arsenal" , number: 7, position: "ATT", value: 11.1 },
        // { id: 3, name: "Petr Cech", team: "Arsenal", number: 33 , position: "GK", value: 7 },
        // { id: 4, name: "Laurent Koscielny", team: "Arsenal", number: 4, position: "DEF", value: 7.5},
        // { id: 5, name: "Sergio Aguero", team:"Manchester City", number: 11, position: "ATT", value: 13},
        // { id: 6, name: "Philipe Coutinho", team:"Liverpool", number: 10, position: "MID", value: 9.5}
    ]

    getPlayers(): Observable<Player[]> {
        return this.http.get(this.playersUrl)
            .map(res => res.json())
            .catch(this.handleError)
        //return Promise.resolve(this.players);
    }

    getPlayerByTeam(team: string): Observable<Player[]> {
        return this.http.get(this.playersByTeamUrl)
            .map(res => res.json())
            .catch(this.handleError)
        
        // if (team == "All") {
        //     return this.getPlayers();
        // }
        // let teamPlayers = new Array<Player>();
        // for (let player of this.players) {
        //     if (player.team == team) {
        //         teamPlayers.push(player);
        //     }
        // }
        // return Promise.resolve(teamPlayers);
    }

    private extractData(res: Response) {
        let body = res.json()
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    
}