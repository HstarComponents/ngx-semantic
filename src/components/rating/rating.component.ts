import { Component, Input, Output, Injectable, OnInit } from '@angular/core';

import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'sm-rating[ngModel]',
  template: `
<div class="ui rating" [class.star]="type === 'star'" [class.heart]="type === 'heart'" [ngClass]="size">
  <i class="icon" *ngFor="let item of rates, let index=index" [class.active]="index < value" (click)="rate(index + 1)"></i>
</div>`
})
@Injectable()
export class Rating implements ControlValueAccessor, OnInit {
  private ngModel: NgModel;
  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;

  private value: number = 1;
  private rates: Array<any>;

  @Input() public readonly: boolean;

  @Input() public max: number = 5;

  @Input() public type: string;

  @Input() public size: string;

  public constructor(ngModel: NgModel) {
    this.ngModel = ngModel;
    ngModel.valueAccessor = this;
  }

  ngOnInit(): void {
    this.rates = [];
    for (let i = 0; i < this.max; i++) {
      let item: { active: boolean } = { active: false };
      if (i <= this.value) {
        item.active = true;
      }
      this.rates.push(item);
    }
  }

  private rate(val: number): void {
    if (!this.readonly && val > 0 && val <= this.max) {
      this.rates.forEach((item, i) => {
        item.active = (i < val);
      });
      this.writeValue(val);
      this.ngModel.viewToModelUpdate(val);
    }
  }

  //region 以下三个方法是实现ControlValueAccessor
  public writeValue(value: number): void {
    this.value = value;
  }
  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  //endregion
} 