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
var PlayerService = (function () {
    function PlayerService(http) {
        this.players = [
            { id: 1, name: "Mesut Ozil", team: "Arsenal", number: 11, position: "MID", value: 10 },
            { id: 2, name: "Alexis Sanchez", team: "Arsenal", number: 7, position: "ATT", value: 11.1 },
            { id: 3, name: "Petr Cech", team: "Arsenal", number: 33, position: "GK", value: 7 },
            { id: 4, name: "Laurent Koscielny", team: "Arsenal", number: 4, position: "DEF", value: 7.5 }
        ];
    }
    PlayerService.prototype.getPlayers = function () {
        return Promise.resolve(this.players);
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=players.service.js.map