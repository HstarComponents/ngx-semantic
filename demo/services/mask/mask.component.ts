import {Component, Injectable, Inject } from "@angular/core";

import {SmMask} from './../../../src/ng2-semantic';

@Component({
  templateUrl: '/services/mask/mask.html',
  providers: [SmMask]
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