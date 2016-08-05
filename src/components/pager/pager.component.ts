import { Component, Input, EventEmitter, Output, Injectable, ElementRef } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

const defaults = {
  alwaysShow: true,
  firstPageText: 'First',
  prevPageText: 'Prev',
  nextPageText: 'Next',
  lastPageText: 'Last',
  showFirstLast: true,
  showPrevNext: true
};

@Component({
  selector: 'sm-pager[ngModel]',
  template: `
<div class="ui small icon buttons" *ngIf="totalCount > 0">
  <button class="ui button" *ngIf="options.showFirstLast" [class.disabled]="page === 1" (click)="goPage('first')">{{options.firstPageText}}</button>
  <button class="ui button" *ngIf="options.showPrevNext" [class.disabled]="page <= 1" (click)="goPage('prev')">{{options.prevPageText}}</button>
  <button class="ui button" [class.red]="p === page" *ngFor="let p of pages" (click)="goPage(p)">{{p}}</button>
  <button class="ui button" *ngIf="options.showPrevNext" [class.disabled]="page >= pageCount" (click)="goPage('next')">{{options.nextPageText}}</button>
  <button class="ui button" *ngIf="options.showFirstLast" [class.disabled]="page === pageCount" (click)="goPage('last')">{{options.lastPageText}}</button>
</div>`
})
@Injectable()
export class Pager implements ControlValueAccessor {
  private ngModel: NgModel;
  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;

  private page: number;
  private pageCount: number;
  private pages: Array<number> = [];
  private pageSize: number = 20;
  private totalCount: number;
  private options: any = defaults;

  @Input('pageSize') private set setPageSize(v: number) {
    this.pageSize = v;
    this._reCalcData();
  }

  @Input('totalCount') private set setTotalCount(v: number) {
    this.totalCount = v;
    this._reCalcData();
  }

  @Input('options') private set setOptions(v: any) {
    this.options = this._merge({}, defaults, v);
  }

  @Output() private onPageChaned: EventEmitter<any> = new EventEmitter();

  public constructor(ngModel: NgModel) {
    this.ngModel = ngModel;
    ngModel.valueAccessor = this;
  }

  private _merge(...objs) {
    if (objs.length === 0) {
      return null;
    }
    if (objs.length === 1) {
      return objs[0];
    }
    let result = objs[0];
    for (let i = 1, len = objs.length; i < len; i++) {
      Object.keys(objs[i]).forEach((v) => {
        result[v] = objs[i][v];
      });
    }
    return result;
  }

  private _reCalcData() {
    this.pages.length = 0;
    this.pageCount = Math.floor((this.totalCount - 1) / this.pageSize) + 1;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
  }

  private goPage(page) {
    if (page === 'first') {
      if (this.page === 1) {
        return;
      }
      page = 1;
    } else if (page === 'prev') {
      if (this.page <= 1) {
        return;
      }
      page = this.page - 1;

    } else if (page === 'next') {
      if (this.page >= this.pageCount) {
        return;
      }
      page = this.page + 1;
    } else if (page === 'last') {
      if (this.page === this.pageCount) {
        return;
      }
      page = this.pageCount;
    }

    this.page = page;
    this.ngModel.viewToModelUpdate(page);
    this.onPageChaned.emit(page);
  }

  //region 以下三个方法是实现ControlValueAccessor
  public writeValue(value: number): void {
    this.page = value;
  }
  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; }
  //endregion
} 