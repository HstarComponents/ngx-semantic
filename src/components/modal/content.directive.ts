import {Directive, ElementRef, Input, Injectable} from "@angular/core";

@Directive({
  selector: "[modalContent]",
})
@Injectable()
export class ModalContent {

  private nativeElement;
  
  @Input()
  public type: string;

  public constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.nativeElement.setAttribute('class', 'content');
    if(this.type === 'image'){
      this.nativeElement.setAttribute('class', 'content image');
    }
  }
} 