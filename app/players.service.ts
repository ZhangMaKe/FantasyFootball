import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Player } from './player';

@Injectable()
export class PlayerService {

    constructor(http: Http) {}

    players: Player[] = [
        { id: 1, name: "Mesut Ozil", team: "Arsenal", number: 11, position: "MID", value: 10 },
        { id: 2, name: "Alexis Sanchez", team: "Arsenal" , number: 7, position: "ATT", value: 11.1 },
        { id: 3, name: "Petr Cech", team: "Arsenal", number: 33 , position: "GK", value: 7 },
        { id: 4, name: "Laurent Koscielny", team: "Arsenal", number: 4, position: "DEF", value: 7.5}
    ]

    getPlayers(): Promise<Player[]> {
        return Promise.resolve(this.players);
    }
}