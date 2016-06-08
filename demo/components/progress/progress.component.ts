import {Component} from "@angular/core";

import {Progress} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/progress/progress.html',
  directives: [Progress]
})

export class ProgressComponent{
  private value: number = 33;
  constructor(){

  }
}