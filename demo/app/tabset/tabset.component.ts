import {Component} from "@angular/core";

@Component({
  template: require('./tabset.html')
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