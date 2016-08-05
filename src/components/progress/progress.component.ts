import { Component, Input, Injectable, ElementRef } from '@angular/core';

import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'sm-progress[ngModel]',
  template: `
<div class="ui progress" [ngClass]="getClass()" [ngClass]="state" [attr.data-percent]="value">
  <div class="bar" style="transition-duration: 300ms; width: 100%;" [style.width]="getWidth()">
    <div class="progress">{{text}}</div>
  </div>
  <div class="label" *ngIf="label">{{label}}</div>
</div>`
})
@Injectable()
export class Progress implements ControlValueAccessor {
  private ngModel: NgModel;
  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;

  private value: number;

  @Input() public label: string;

  @Input() public text: string;

  @Input() public state: string;

  @Input() public type: string;

  @Input() public size: string;

  @Input() public color: string;

  public constructor(ngModel: NgModel, templateRef: ElementRef) {
    this.ngModel = ngModel;
    ngModel.valueAccessor = this;
  }

  //region 以下三个方法是实现ControlValueAccessor
  public writeValue(value: number): void {
    this.value = value;
  }
  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  //endregion

  public ngOnInit(): void {
  }

  private getWidth(): string {
    if (this.value >= 0 && this.value <= 100) {
      return this.value + '%';
    } else {
      return 'auto';
    }
  }

  private getClass(): string {
    return [this.state, this.type, this.size, this.color].join(' ');
  }
} 