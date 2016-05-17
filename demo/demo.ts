import {Component, provide, enableProdMode} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF} from '@angular/common';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

// import {HomeComponent} from './home/home.component';

@Component({
  selector: 'demo-app',
  moduleId: module.id,
  template: `
<div class="ui container">
  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: [],
  directives: [ROUTER_DIRECTIVES]
})

// @RouteConfig([
//   {path: '/demo/', name: 'Home', component: HomeComponent},
// ])

export class AppComponent{
  constructor() {
	}
} 

// enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]);