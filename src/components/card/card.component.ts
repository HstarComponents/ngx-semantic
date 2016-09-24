import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-card',
  template: `
<div class="ui card" [ngClass]="getClasses()">
  <ng-content></ng-content>
</div>`
})
export class CardComponent implements OnInit {

  @Input()
  private variation: string;

  constructor() { }

  ngOnInit() {

  }

  private getClasses() {
    return `${this.variation}`;
  }
}