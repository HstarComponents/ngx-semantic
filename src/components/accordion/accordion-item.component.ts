import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-accordion-item',
  template: require('./accordion-item.html')
})
export class AccordionItemComponent implements OnInit {

  private isActive: boolean = false;

  @Input()
  private title: string;

  @Input()
  private content: string;

  @Input('active') set _active(value) {
    this.isActive = value;
  }

  constructor() { }

  ngOnInit() {

  }
}