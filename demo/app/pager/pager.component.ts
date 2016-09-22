import { Component } from "@angular/core";

@Component({
  template: require('./pager.html')
})
export class PagerComponent {
  private value: number = 1;
  constructor() {

  }

  changePage(page) {
    console.log(page);
    alert(this.value);
  }
}