import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';

import { Player } from './player';
import { PlayerService } from './players.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <ul>
    <li *ngFor="let player of players">
      <span class="badge">{{player.name}}</span> {{player.team}}
    </li>
   </ul> `,
   providers: [ PlayerService ]
})
export class AppComponent implements OnInit { 
    title = 'Fantasy Football';

    players: Player[];

    constructor(private playerService: PlayerService) {}

    ngOnInit(): void {
      this.playerService.getPlayers().then(p => this.players = p);
    }
}
