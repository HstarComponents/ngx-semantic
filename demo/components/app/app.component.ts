import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './../home/home.component';
import {RatingComponent} from './../rating/rating.component';
import {ProgressComponent} from './../progress/progress.component';
import {ModalComponent} from './../modal/modal.component';
import {PagerComponent} from './../pager/pager.component';
import {TabsetComponent} from './../tabset/tabset.component';
import {TagsComponent} from './../tags/tags.component';

import {AlertComponent} from './../../services/alert/alert.component';
import {MaskComponent} from './../../services/mask/mask.component';

@Component({
  selector: 'demo-app',
  templateUrl: './components/app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/components/modal', component: ModalComponent },
  { path: '/components/pager', component: PagerComponent },
  { path: '/components/progress', component: ProgressComponent },
  { path: '/components/rating', component: RatingComponent },
  { path: '/components/tabset', component: TabsetComponent },
  { path: '/components/tags', component: TagsComponent },

  { path: '/services/alert', component: AlertComponent },
  { path: '/services/mask', component: MaskComponent }
])

export class AppComponent {

  private menus: any = [];

  constructor() {
    this.menus = [{
      type: 'components',
      text: 'Basic Components',
      children: [
        { name: 'modal', text: 'modal' },
        { name: 'pager', text: 'pager' },
        { name: 'popup', text: 'popup' },
        { name: 'progress', text: 'progress' },
        { name: 'rating', text: 'rating' },
        { name: 'tabset', text: 'tabset' },
        { name: 'tags', text: 'tags' }
      ]
    }, {
        type: 'components',
        text: 'Form Components',
        children: [

        ]
      }, {
        type: 'services',
        text: 'Services',
        children: [
          { name: 'alert', text: 'smAlert' },
          { name: 'mask', text: 'smMask' }
        ]
      }];
  }
} 
