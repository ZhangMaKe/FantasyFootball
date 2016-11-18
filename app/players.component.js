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
var players_service_1 = require('./players.service');
var teams_service_1 = require('./teams.service');
var fantasy_team_1 = require('./fantasy-team');
require('./rxjs-operators');
var allowedValue = 100;
var PlayerComponent = (function () {
    function PlayerComponent(playerService, teamsService) {
        this.playerService = playerService;
        this.teamsService = teamsService;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (response) {
            _this.players = response;
        });
        this.teamsService.getTeams().then(function (t) { return _this.teams = t; });
        this.fantasyTeam = new fantasy_team_1.FantasyTeam();
    };
    PlayerComponent.prototype.teamSelected = function (team) {
        var _this = this;
        this.playerService.getPlayerByTeam(team.name)
            .subscribe(function (response) {
            //this.alertMe(players);
            _this.players = response;
        });
        // this.playerService.getPlayerByTeam(team.name).then(p => this.players = p);
    };
    PlayerComponent.prototype.alertMe = function (returnValue) {
        alert(returnValue.length);
        for (var player in returnValue) {
            alert(player);
        }
    };
    PlayerComponent.prototype.addPlayerToTeam = function (player) {
        if ((this.fantasyTeam.totalValue + player.value) > allowedValue) {
        }
        //check if team already contains player
        for (var _i = 0, _a = this.fantasyTeam.players; _i < _a.length; _i++) {
            var fantasyPlayer = _a[_i];
            if (fantasyPlayer == player) {
            }
        }
        this.fantasyTeam.players.push(player);
        this.fantasyTeam.totalValue += player.value;
    };
    PlayerComponent.prototype.removePlayer = function (player) {
        var playersWithoutDeletedPlayer = this.fantasyTeam.players.filter(function (p) { return p !== player; });
        this.fantasyTeam.players = playersWithoutDeletedPlayer;
    };
    PlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'players',
            templateUrl: 'players.component.html',
            providers: [players_service_1.PlayerService, teams_service_1.TeamsService]
        }), 
        __metadata('design:paramtypes', [players_service_1.PlayerService, teams_service_1.TeamsService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=players.component.js.map