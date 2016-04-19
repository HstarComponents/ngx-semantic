"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var home_component_1 = require('./home/home.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            moduleId: module.id,
            template: "\n<div class=\"ui container\">\n  <router-outlet></router-outlet>\n</div>\n  ",
            styleUrls: [],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/demo/', name: 'Home', component: home_component_1.HomeComponent },
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// enableProdMode();
browser_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
