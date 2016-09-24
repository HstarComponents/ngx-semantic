import { Component, Input, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: '[sm-card-image]',
  template: `
<ng-content></ng-content>
  `
})
export class CardImageComponent implements OnInit, AfterViewInit {
  constructor(private elRef: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    let el = this.elRef.nativeElement;
    let classes = 'ui image';
    if (el.children.length > 1) {
      classes += ' slide masked reveal';
    }
    el.className = classes;
  }
}