import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { PlayerComponent } from './players.component';
import { FantasyTeamComponent } from './fantasy-team.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, PlayerComponent, FantasyTeamComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
