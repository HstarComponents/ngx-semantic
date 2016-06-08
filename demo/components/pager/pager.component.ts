import {Component} from "@angular/core";

import {Pager} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/pager/pager.html',
  directives: [Pager]
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