import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Team } from './team';

@Injectable()
export class TeamsService {

    teams: Team[] = [
        { name: 'Arsenal' },
        { name: 'Manchester City' },
        { name: 'Liverpool' }
    ]

    getTeams(): Promise<Team[]> {
        return Promise.resolve(this.teams);
    } 
}