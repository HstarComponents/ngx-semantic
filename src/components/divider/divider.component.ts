import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'sm-divider',
  template: `
 <div class="ui vertical divider" [ngClass]="getClassObj()">
    {{content}}
    <ng-content></ng-content>    
 </div>
  `
})
export class DividerComponent implements OnInit, AfterViewInit {

  /**
   * 方向
   */
  @Input() private direction: string;

  /**
   * 特点
   */
  @Input() private variation: string;

  /**
   * 是否是标题
   */
  @Input() private isHeader: boolean;

  /**
   * 内容
   */
  @Input() private content?: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.el.nativeElement.parentNode.style.position = 'relative';
  }

  private getClassObj() {
    return {
      vertical: this.direction === 'vertical',
      horizontal: this.direction === 'horizontal',
      inverted: this.variation === 'inverted',
      fitted: this.variation === 'fitted',
      hidden: this.variation === 'hidden',
      section: this.variation === 'section',
      clearing: this.variation === 'clearing',
      header: this.isHeader
    }
  }
}