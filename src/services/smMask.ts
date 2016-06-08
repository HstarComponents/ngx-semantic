declare var $;

import {Injectable} from '@angular/core';

let maskHtml = `
<div id="sm_mask" class="ui dimmer modals page"></div>
`;

let maskClass = 'transition visible active';
//

//style="display: block !important;"

@Injectable()
export class SmMask {

  private $mask;

  private $containerDiv;

  constructor() {
    let self = this;
    $('body').append($(maskHtml));
    this.$mask = $('#sm_mask');
  }

  public show(): void {
    this.$mask.addClass(maskClass);
  }

  public hide(): void {
    this.$mask.removeClass(maskClass);
  }
}
