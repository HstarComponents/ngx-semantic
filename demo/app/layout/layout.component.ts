import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: require('./layout.html')
})
export class LayoutComponent {

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
        { name: 'tags', text: 'tags' },
        { name: 'accordion', text: 'accordion' },
        { name: 'divider', text: 'divider' }
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
