declare var $;

import {Component, DynamicComponentLoader} from '@angular/core';

let smAlertMarkDivHtml = `
<div id="sm_alert_mask_div" style="position:fixed; left: 0; right: 0; top:0; bottom: 0; background: rgba(0, 0, 0, 0.45); z-index: 10000; display:none;"></div>
<div id="sm_alert_container_div"></div> 
`;

let smAlertDivHtml = `
<div id="{{id}}" style="width: 40%; position: fixed; left: 30%; top: 10%; z-index: 10001; display: none;">
    <div class="ui {{type}} icon message">
        <i class="close icon"></i>
        <i class="{{type}} circle icon"></i>
        <div class="content">   
          <div class="header">
           {{title}}
          </div>
          <p>{{msg}}</p>
        </div>
    </div>
</div>
`;

const DEFAULT_SECOND = 3;

export class SmAlert {

  private $maskDiv;

  private $containerDiv;

  constructor() {
    let self = this;
    $('body').append($(smAlertMarkDivHtml));
    this.$maskDiv = $('#sm_alert_mask_div');
    this.$containerDiv = $('#sm_alert_container_div');
    this.$containerDiv.on('click', '.icon.close', function () {
      let $alert = $(this).parent().parent();
      self._removeAlert($alert);
    });
  }

  private _setMaskDivShown(isShown: boolean): void {
    if (isShown) {
      this.$maskDiv.show();
    } else {
      this.$maskDiv.hide();
    }
  }

  private _removeAlert($alert) {
    $alert.slideUp('fast', () => {
      $alert.remove();
      this._setMaskDivShown(false);
    });
  }

  private _getAlertDivElement(msg, options) {
    let html = smAlertDivHtml
      .replace(/{{id}}/, `sm_alert_${Date.now()}`)
      .replace(/{{type}}/g, options.type)
      .replace(/{{title}}/g, options.title || '')
      .replace(/{{msg}}/g, msg);
    return $(html);
  }
  
  private _show(msg: string, options?: any){
    this._setMaskDivShown(true);
    let $alert = this._getAlertDivElement(msg, { type: options.type });
    this.$containerDiv.append($alert);
    $alert.slideDown('fast');
    setTimeout(() => {
      this._removeAlert($alert);
    }, 1000 * (options.showSecond || DEFAULT_SECOND));
  }

  public info(msg: string, showSecond?: number, options?: any): void {
    this._show(msg, {
      type: 'info',
      showSecond: showSecond
    });
  }
  
  public success(msg: string, showSecond?: number, options?: any): void {
    this._show(msg, {
      type: 'success',
      showSecond: showSecond
    });
  }
  
  public warning(msg: string, showSecond?: number, options?: any): void {
    this._show(msg, {
      type: 'warning',
      showSecond: showSecond
    });
  }
  
  public error (msg: string, showSecond?: number, options?: any): void {
    this._show(msg, {
      type: 'error',
      showSecond: showSecond
    });
  }
}
