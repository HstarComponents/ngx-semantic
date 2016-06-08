import {Component} from "@angular/core";

import {Rating} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/rating/rating.html',
  directives: [Rating]
})

export class RatingComponent{
  private value: number = 1;
  constructor(){

  }
}