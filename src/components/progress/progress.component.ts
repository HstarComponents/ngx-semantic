import {Component, Input, EventEmitter, Self, Output, Injectable, ElementRef} from "@angular/core";

import {ControlValueAccessor, NgModel} from '@angular/common';

@Component({
  selector: "sm-progress[ngModel]",
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

  public vm: NgModel;
  
  private nativeElement: any;
  
  private onChange: Function;
  
  private onTouched: Function;

  private value: number;

  @Input()
  public label: string;
  
  @Input()
  public text: string;
  
  @Input()
  public state: string;
  
  @Input()
  public type: string;

  @Input()
  public size: string;
  
  @Input()
  public color: string;
  
  public constructor(vm: NgModel, templateRef: ElementRef) {
    this.vm = vm;
    vm.valueAccessor = this;
    this.nativeElement = templateRef.nativeElement;
  }

  //region 以下三个方法是实现ControlValueAccessor
  public writeValue(value: number): void {
    this.value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
  //endregion

  public ngOnInit(): void {
  }
  
  public getWidth(): string{
    if(this.value >= 0 && this.value <= 100){
      return this.value + '%';
    }else{
      return 'auto';
    }
  }
  public getClass(): string{
    return [this.state, this.type, this.size, this.color].join(' ');
  }
} 