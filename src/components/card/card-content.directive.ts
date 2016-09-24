import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[sm-card-content]',
  template: `
<ng-content></ng-content>
  `
})
export class CardContentComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}