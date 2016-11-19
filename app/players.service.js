"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        this.playersUrl = "http://localhost:5000/api/Players/GetAllPlayers";
        this.playersByTeamUrl = "http://localhost:5000/api/Players/GetPlayerByTeam";
        this.players = [];
    }
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(this.playersUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        //return Promise.resolve(this.players);
    };
    PlayerService.prototype.getPlayerByTeam = function (team) {
        return this.http.get(this.playersByTeamUrl + "?team=" + team)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        // if (team == "All") {
        //     return this.getPlayers();
        // }
        // let teamPlayers = new Array<Player>();
        // for (let player of this.players) {
        //     if (player.team == team) {
        //         teamPlayers.push(player);
        //     }
        // }
        // return Promise.resolve(teamPlayers);
    };
    PlayerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PlayerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=players.service.js.map