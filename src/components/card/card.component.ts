import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-card',
  template: `
<div class="ui card">
  <ng-content></ng-content>
</div>`
})
export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}