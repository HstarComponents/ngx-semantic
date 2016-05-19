import {Component, Input, EventEmitter, Self, Output, Injectable, ElementRef} from "@angular/core";

@Component({
  selector: "s-modal",
  template: `
<div class="ui modal" [ngClass]="getModalClass()" [class.fullscreen]="fullScreen">
  <i class="close icon" *ngIf="showCloseBtn"></i>
  <ng-content></ng-content>
</div>`
})
@Injectable()
export class Modal {

  private nativeElement;
  
  private iElement;

  @Input()
  public set isShown(val: boolean) {
    if (this.iElement) {
      if (val === true) {
        this.iElement.modal('show');
      } else if (val === false) {
        this.iElement.modal('hide');
      }
    }
  }

  @Input()
  public showCloseBtn: boolean;

  @Input()
  public fullScreen: boolean;

  @Input()
  public type: string;

  @Input()
  public size: string;

  public constructor(templateRef: ElementRef) {
    this.nativeElement = templateRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    let self = this;
    this.iElement = window.jQuery(this.nativeElement).find('> .ui.modal');
    this.iElement.modal({
      detachable: false,
      allowMultiple: true,
      closable: false,
      onApprove: () => false,
      onDeny: () => false,
      onHidden: () => self.isShown = false 
    });
  }

  getModalClass() {
    return [this.type, this.size].join(' ');
  }
} 