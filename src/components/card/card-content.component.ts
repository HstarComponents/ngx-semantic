import { Component, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: '[sm-card-content]',
  template: `
  <ng-content></ng-content>
  `
})
export class CardContentComponent implements OnInit, AfterViewInit {

  @Input()
  private isExtra: boolean = false

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.elRef.nativeElement.className = 'content' + (this.isExtra ? ' extra' : '');
  }
}