import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { FantasyTeam } from './fantasy-team';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
   providers: [  ]
})
export class AppComponent  {
    title = 'Fantasy Football';
}
