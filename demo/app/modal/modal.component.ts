import { Component, DoCheck } from "@angular/core";

@Component({
  template: require('./modal.html')
})

export class ModalComponent implements DoCheck {

  private showModal: boolean = false;

  private timeoutId: any;

  constructor() {
  }

  ngDoCheck() {
    if (this.showModal) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.showModal = false;
      }, 2000);
    }
  }
}