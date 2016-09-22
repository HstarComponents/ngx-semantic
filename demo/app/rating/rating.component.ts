import {Component} from "@angular/core";

@Component({
  template: require('./rating.html')
})

export class RatingComponent{
  private value: number = 1;
  constructor(){

  }
}