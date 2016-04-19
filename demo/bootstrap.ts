import {Component, provide, enableProdMode} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';

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

@RouteConfig([
  {path: '/demo/', name: 'Home', component: HomeComponent},
])

export class AppComponent{
  constructor() {
	}
} 

// enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]);