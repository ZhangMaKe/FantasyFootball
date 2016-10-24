import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Player } from './player';

@Injectable()
export class PlayerService {

    constructor(http: Http) {}

    players: Player[] = [
        { id: 1, name: "Mesut Ozil", team: "Arsenal" },
        { id: 2, name: "Alexis Sanchez", team: "Arsenal" },
        { id: 3, name: "Petr Cech", team: "Arsenal"}
    ]

    //getPlayers(): Promise<Player[]> {
       // return this.players;
    //}

    getPlayers(): Promise<Player[]> {
        return Promise.resolve(this.players);
    }
}