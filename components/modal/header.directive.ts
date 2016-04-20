import {Directive, ElementRef, Injectable} from "angular2/core";

@Directive({
  selector: "[modalHeader]",
})
@Injectable()
export class ModalHeader {

  private nativeElement;

  public constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.nativeElement.setAttribute('class', 'header');
  }
} 