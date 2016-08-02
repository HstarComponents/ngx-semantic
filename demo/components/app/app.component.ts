import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: './components/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})

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
