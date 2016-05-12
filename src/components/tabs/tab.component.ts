import {Component, Input, Host, TemplateRef, OnInit, OnDestroy } from "angular2/core";
import {Tabset} from './tabset.component';

@Component({
    selector: "s-tab",
    template: `
<div class="ui tab" [attr.data-tab]="tabId" [class.active] = "active">
  <ng-content></ng-content>
</div>
`
})
export class Tab implements OnInit, OnDestroy{

    private tabId: string;

    private tabset: Tabset;

    @Input()
    public heading: string = '';

    @Input()
    public active: boolean = false;

    @Input()
    public removable: boolean = false;

    public constructor( @Host() tabset: Tabset) {
        this.tabset = tabset;
        this.setTabId();
        this.tabset.addTab(this);
    }

    private setTabId(): void {
        var rndStr = `${Date.now()}_${Math.floor((Math.random() * 1000) + 1000)}`;
        this.tabId = `tab_${rndStr}`;
    }

    public ngOnInit(): void {
       this.removable = !!this.removable;
    }

    public ngOnDestroy(): void {
        this.tabset.removeTab(this);
    }
}