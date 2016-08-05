import { Component, Input, Injectable } from '@angular/core';

import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'sm-tags[ngModel]',
  template: `
<div class="ui dropdown selection multiple small">
  <a class="ui label transition visible" style="display: inline-block !important;" *ngFor="let tag of tags, let index = index">
    {{tag}}<i class="delete icon" (click)="removeTag(index)"></i>
  </a>
  <input type="text" class="search" [(ngModel)]="inputModel" (keypress)="inputKeyPress($event)" (blur)="inputOnBlur()" placeholder="Press enter to input tag">
</div>`,
  styles: [
    'input.search{border: none !important; width: 100% !important;}',
    '.ui.selection.multiple{width: 100%; padding-right: 4px;}'
  ]
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
    if (evt.keyCode === 13) {
      this.tags.push(this.inputModel);
      this.inputModel = '';
      this.syncNgModel();
    }
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