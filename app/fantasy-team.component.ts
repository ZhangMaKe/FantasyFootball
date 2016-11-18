import { Component } from '@angular/core';

import { Player } from './player';

@Component({
    moduleId: module.id,
    selector: 'fantasy-team',
    templateUrl: 'fantasy-team.component.html'
})

export class FantasyTeamComponent {  

    fantasyTeam: Player[];

    totalValue: number;

//    addPlayer(player: Player): void {
//        if((this.totalValue + player.value) > allowedValue) {
//             //can't add player, inform user
//         }

//         //check if team already contains player
//         for(let fantasyPlayer of this.fantasyTeam) {
//             if(fantasyPlayer == player) {
//                 //can't add existing player
//             }
//         }

//         this.fantasyTeam.push(player);
//         this.totalValue += player.value;
//     }

//     removePlayer(player: Player): void {
//         let playersWithoutDeletedPlayer = this.fantasyTeam.filter(p => p !== player);
//     }

}