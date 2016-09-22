import { Component } from "@angular/core";


@Component({
  template: require('./progress.html')
})

export class ProgressComponent {
  private value: number = 33;
  constructor() {

  }
}