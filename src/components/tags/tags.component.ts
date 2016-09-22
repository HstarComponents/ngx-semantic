import { Component, Input, Injectable } from '@angular/core';

import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'sm-tags[ngModel]',
  template: require('./tags.html'),
  styles: [require('./tags.css')]
})
@Injectable()
export class Tags implements ControlValueAccessor {
  private ngModel: NgModel;
  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;

  private tags: Array<string> = [];
  private inputModel: string;

  public constructor(ngModel: NgModel) {
    this.ngModel = ngModel;
    ngModel.valueAccessor = this;
  }

  private syncNgModel() {
    this.ngModel.viewToModelUpdate(this.tags);
  }

  private removeTag(idx: number): void {
    this.tags.splice(idx, 1);
    this.syncNgModel();
  }

  private inputKeyPress(evt): void {
    if (!this.inputModel) {
      return;
    }
    this.tags.push(this.inputModel);
    this.inputModel = '';
    this.syncNgModel();
    evt.stopPropagation();
  }

  private inputOnBlur(): void {
    if (!this.inputModel) {
      return;
    }
    this.tags.push(this.inputModel);
    this.inputModel = '';
  }

  //region 以下三个方法是实现ControlValueAccessor
  public writeValue(value: Array<string>): void {
    this.tags = value || [];
  }
  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  //endregion


} 