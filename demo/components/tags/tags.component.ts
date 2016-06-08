import {Component} from "@angular/core";

import {Tags} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/tags/tags.html',
  directives: [Tags]
})

export class TagsComponent {

  private tags: Array<string> = [];

  constructor() {
  }
}