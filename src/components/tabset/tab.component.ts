import { Component, Input, Host, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Tabset } from './tabset.component';

@Component({
    selector: 'sm-tab',
    template: `
<div class="ui tab" [attr.data-tab]="tabId" [class.active] = "active">
  <ng-content></ng-content>
</div>
`
})
@Injectable()
export class Tab implements OnInit, OnDestroy {
    private tabId: string;
    private tabset: Tabset;

    @Input() public heading: string = '';

    @Input() public active: boolean = false;

    @Input() public removable: boolean = false;

    public constructor( @Host() tabset: Tabset) {
        this.tabset = tabset;
        this.setTabId();
        this.tabset.addTab(this);
    }

    ngOnInit(): void {
        this.removable = !!this.removable;
    }

    ngOnDestroy(): void {
        this.tabset.removeTab(this);
    }

    private setTabId(): void {
        let rndStr = `${Date.now()}_${Math.floor((Math.random() * 1000) + 1000)}`;
        this.tabId = `tab_${rndStr}`;
    }
}