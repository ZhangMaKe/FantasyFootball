import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from './players.service';
import { TeamsService } from './teams.service';
import { Player } from './player';
import { Team } from './team';
import { FantasyTeam } from './fantasy-team';

import './rxjs-operators';

const allowedValue: number = 100;

@Component ({
    moduleId: module.id,
    selector: 'players',
    templateUrl: 'players.component.html',
    providers: [ PlayerService, TeamsService ]
})

export class PlayerComponent implements OnInit {
    
    players: Player[];

    teams: Team[];

    fantasyTeam: FantasyTeam;
    

    constructor(private playerService: PlayerService, private teamsService: TeamsService) {}

    ngOnInit(): void {
      this.playerService.getPlayers()
                        .subscribe(
                            response => {
                                this.players = response
                            });

      this.teamsService.getTeams().then(t => this.teams = t);
      this.fantasyTeam = new FantasyTeam();
    }

    teamSelected(team: Team): void {
        this.playerService.getPlayerByTeam(team.name)
                            .subscribe(
                                response => {
                                    //this.alertMe(players);
                                    this.players = response;
                                
                                });
        
        // this.playerService.getPlayerByTeam(team.name).then(p => this.players = p);
    }

    alertMe(returnValue: Player[]): void {
        alert(returnValue.length);
        for(let player in returnValue)
        {
            alert(player);
        }
        
    }
    
    addPlayerToTeam(player: Player): void {
        if((this.fantasyTeam.totalValue + player.value) > allowedValue) {
            //can't add player, inform user
        }

        //check if team already contains player
        for(let fantasyPlayer of this.fantasyTeam.players) {
            if(fantasyPlayer == player) {
                //can't add existing player
            }
        }

        this.fantasyTeam.players.push(player);
        this.fantasyTeam.totalValue += player.value;
    }

    removePlayer(player: Player): void {
        let playersWithoutDeletedPlayer = this.fantasyTeam.players.filter(p => p !== player);
        this.fantasyTeam.players = playersWithoutDeletedPlayer;
    }
}