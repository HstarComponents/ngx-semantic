import {Directive, ElementRef, Injectable} from "angular2/core";

@Directive({
  selector: "[modalActions]",
})
@Injectable()
export class ModalActions {

  private nativeElement;

  public constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.nativeElement.setAttribute('class', 'actions');
  }
} 