import { Component, Injectable, Inject } from "@angular/core";

import { SmAlert } from './../../../';

@Component({
  template: require('./alert.html')
})

@Injectable()
export class AlertComponent {
  constructor(
    private smAlert: SmAlert
  ) {
  }
  private showInfo(): void {
    this.smAlert.info('Info Message');
  }

  private showWarning(): void {
    this.smAlert.warning('Warning Message');
  }

  private showSuccess(): void {
    this.smAlert.success('Sucess Message');
  }

  private showError(): void {
    this.smAlert.error('Error Message');
  }
}