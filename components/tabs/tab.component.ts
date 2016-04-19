import {Component, Input, TemplateRef} from "angular2/core";

@Component({
    selector: "s-tab",
    template: `
<div class="ui tab" [attr.data-tab]="tabId" [class.active] = "active">
  <ng-content></ng-content>
</div>

    `
})
export class Tab {

    private tabId: string;

    @Input()
    public heading: string = '';

    @Input()
    public active: boolean = false;
    
    @Input() 
    public removable: boolean = false;

    public constructor() {
        this.tabId = 'tab_' + Date.now() + Math.floor((Math.random() * 10000))
    }
}