import {Component, provide, enableProdMode} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { Rating } from './../src/ng2-semantic';

// import {HomeComponent} from './home/home.component';

@Component({
  selector: 'demo-app',
  moduleId: module.id,
  template: `
<div class="ui container">
  <h1>Home</h1>
  <s-rating [(ngModel)]="v" [max]="5" [type]="'heart'" [size]="'huge'"></s-rating>
  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: [],
  directives: [ROUTER_DIRECTIVES, Rating]
})

// @RouteConfig([
//   {path: '/demo/', name: 'Home', component: HomeComponent},
// ])

export class AppComponent{
  private v: number = 5;
  constructor() {
    
	}
} 

// enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy, {useClass: PathLocationStrategy})
]);