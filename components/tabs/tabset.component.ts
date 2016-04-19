import {ContentChildren, Component, QueryList, Input, AfterContentInit, ElementRef, EventEmitter, Output, Inject} from "angular2/core";
import {Tab} from "./tab.component";

@Component({
  selector: "s-tabset",
  template: `
<div class="ui tabular menu">
  <div class="item" [attr.data-tab]="tab.tabId" *ngFor="#tab of tabs" [class.active]="tab.active" (click)="changeActiveTab(tab);">
    {{tab.heading}}
    <a class="float-right" *ngIf="tab.removable">*</a>
  </div>
</div>
<ng-content></ng-content>
`
})
export class Tabset implements AfterContentInit {
  
  private nativeElement;

  @ContentChildren(Tab)
  public tabs: QueryList<Tab>;

  @Output()
  public onSelect = new EventEmitter(false);

  public constructor( @Inject(ElementRef) templateRef: ElementRef) {
    this.nativeElement = templateRef.nativeElement;
  }

  changeActiveTab(tab: Tab) {
    const tabs = this.tabs.toArray();
    tabs.forEach(tab => tab.active = false);
    tab.active = true;
    this.onSelect.emit(tabs.indexOf(tab));
  }

  ngAfterContentInit() {
    //设置默认选中第一个
    const readTabs = this.tabs.toArray();
    const activeTab = readTabs.filter(tab => tab.active === true);
    if (activeTab.length === 0 && readTabs.length > 0)
      readTabs[0].active = true;
  }
}