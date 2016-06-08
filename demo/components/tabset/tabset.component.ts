import {Component} from "@angular/core";

import {TAB_DIRECTIVES} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/tabset/tabset.html',
  directives: [TAB_DIRECTIVES]
})

export class TabsetComponent {

  private tabs: Array<any>;

  constructor() {
    this.tabs = [{
      heading: 'aaa',
      removable: true
    }];
  }

  onTabSelected(tab): void {
    console.log('selected', tab);
  }
  onTabRemoved(tab): void {
    console.log('removed', tab);
  }
}