import {Component, Injectable, Inject } from "@angular/core";

import {SmMask} from './../../../';

@Component({
  template: require('./mask.html')
})

@Injectable()
export class MaskComponent {
  constructor(
    private smMask: SmMask
  ) {
  }
  private hideMask(): void {
    this.smMask.show();
    setTimeout(() => {
      this.smMask.hide();
    }, 2000);
  }
}