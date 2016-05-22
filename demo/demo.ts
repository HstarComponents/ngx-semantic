import {Component, provide, enableProdMode} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeComponent} from './components/home/home.component';
import {RatingComponent} from './components/rating/rating.component';

@Component({
  selector: 'demo-app',
  template: `
<div class="ui container">
  <h1>Framework</h1>
  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: [],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent},
  {path: '/demo/rating', component: RatingComponent}
])

export class AppComponent{
  constructor() {
    
	}
} 

// enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy, {useClass: PathLocationStrategy})
]);