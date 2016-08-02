import { Directive, ElementRef, Input, Injectable } from '@angular/core';

@Directive({
  selector: '[s-popup]',
})
@Injectable()
export class Popup {

  private nativeElement;

  @Input('popup')
  public popupOption: any;

  public constructor(private elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    // $(this.nativeElement).popup();
  }
} 