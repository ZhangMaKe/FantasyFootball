import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from './players.service';

@Component ({
    moduleId: module.id,
    selector: 'players',
    templateUrl: 'players.html'
})

export class PlayerComponent implements OnInit {
    
    constructor(playerService: PlayerService) {}

    ngOnInit(): void {

    }

    addPlayerToTeam(): void {
        
    }
}