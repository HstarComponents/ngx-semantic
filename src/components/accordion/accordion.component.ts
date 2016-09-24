import { Component, Input, OnInit } from '@angular/core';

// 约定数据格式
interface AccordionData {
  title: string,
  content?: string,
  children?: AccordionData[]
}

@Component({
  selector: 'sm-accordion',
  template: require('./accordion.html')
})
export class AccordionComponent implements OnInit {

  @Input()
  private data: AccordionData[] = [];

  constructor() { }

  ngOnChanges() {
    console.log(this.data); 
  }

  ngOnInit() {

  }
}