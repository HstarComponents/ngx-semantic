import { Component, DoCheck } from "@angular/core";

import { SmAlert } from './../../../';

@Component({
  template: require('./modal.html')
})

export class ModalComponent implements DoCheck {

  private showModal: boolean = false;

  private timeoutId: any;

  constructor(private smAlert: SmAlert) {
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