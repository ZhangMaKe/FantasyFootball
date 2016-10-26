import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { PlayerComponent } from './players.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PlayerComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
