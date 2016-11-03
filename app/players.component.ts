import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from './players.service';
import { TeamsService } from './teams.service';
import { Player } from './player';
import { Team } from './team';

@Component ({
    moduleId: module.id,
    selector: 'players',
    templateUrl: 'players.component.html',
    providers: [ PlayerService, TeamsService ]
})

export class PlayerComponent implements OnInit {
    
    players: Player[];

    teams: Team[];

    constructor(private playerService: PlayerService, private teamsService: TeamsService) {}

    ngOnInit(): void {
      this.playerService.getPlayers().then(p => this.players = p);
      this.teamsService.getTeams().then(t => this.teams = t);
    }

    teamSelected(team: Team): void {
        this.playerService.getPlayerByTeam(team.name).then(p => this.players = p);
    }


    addPlayerToTeam(): void {
        
    }
}