import { Directive, ElementRef, Injectable } from '@angular/core';

@Directive({
  selector: '[modalActions]',
})
@Injectable()
export class ModalActions {

  private nativeElement;

  public constructor(private elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.nativeElement.setAttribute('class', 'actions');
  }
} 