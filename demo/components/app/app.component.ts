import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './../home/home.component';
import {RatingComponent} from './../rating/rating.component';

import {AlertComponent} from './../../services/alert/alert.component';

@Component({
  selector: 'demo-app',
  templateUrl: './components/app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/components/rating', component: RatingComponent },
  { path: '/services/alert', component: AlertComponent }
])

export class AppComponent {
  constructor() {

  }
} 
