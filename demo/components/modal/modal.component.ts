import {Component, DoCheck} from "@angular/core";

import {MODAL_DIRECTIVES, SmMask} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/components/modal/modal.html',
  directives: [MODAL_DIRECTIVES],
  providers: [SmMask]
})

export class ModalComponent implements DoCheck {

  private showModal: boolean = false;

  private timeoutId: any;

  constructor(
    private smMask: SmMask
  ) {
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