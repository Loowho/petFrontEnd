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
var http_1 = require('@angular/common/http');
var AppController = (function () {
    function AppController(http) {
        this.http = http;
        this.name = 'Central Park';
        this.city = 'Somewhere';
        this.street = '123 Main St';
        this.state = 'NH';
        this.region = 'East';
        this.hideAddress = false;
    }
    AppController.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8080/api/v1/pet').subscribe(function (data) {
            _this.results = data;
        });
    };
    AppController = __decorate([
        core_1.Component({
            selector: 'pet-come-home-app',
            //  templateUrl: './app.location.html',  //not sure if needed. Taken from Tom's video2'
            template: "\n<!--  <h1>{{name}}</h1> -->\n\n<!-- <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p> -->\n\n  <br>\n\n  <fieldset>\n    <label>Location Name:\n     <input [(ngModel)]=\"name\" placeholder=\"Location Name\"> \n     </label>\n     </fieldset>\n  <br>\n\n<!--  <label><input type=\"checkbox\" [(ngModel)]=\"hideAddress\"> Hide Address</label> -->\n  \n  <!-- <pre>{{street | json}}</pre> --> \n\n  <div [hidden]=\"hideAddress\">\n\n    <fieldset>\n      <label>Address: \n      <input [(ngModel)]=\"street\" placeholder=\"Street\">\n      </label>\n    </fieldset>\n    <fieldset>\n      <label>City: \n      <input [(ngModel)]=\"city\" placeholder=\"City\">\n      </label>\n    </fieldset>\n    <fieldset>\n      <label>State: \n        <input [(ngModel)]=\"state\" placeholder=\"State\">\n      </label>\n    </fieldset>\n<!--    <fieldset> -->\n<!--      <label> -->\n<!--        Region: -->\n<!--        <!-- <select (change)=\"regionchange($event.target.value)\"> -->\n<!--        <select [(ngModel)]=\"region\"> -->\n<!--          <option>North</option> -->\n<!--          <option>South</option> -->\n<!--          <option>East</option> -->\n<!--          <option>West</option> -->\n<!--        </select> -->\n<!--      </label> --> \n<!--    </fieldset> -->\n\n<!-- <button (click)=\"locationClick()\">Add Location</button> -->\n<button type=\"submit\" class=\"btn\" ng-click=\"save()\" ng-disabled=\"myForm.$invalid\">Add Location</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object])
    ], AppController);
    return AppController;
    var _a;
}());
exports.AppController = AppController;
//# sourceMappingURL=app.component.js.map