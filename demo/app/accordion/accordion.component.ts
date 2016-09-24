import { Component, OnInit } from '@angular/core';

@Component({
  template: require('./accordion.html')
})
export class AccordionComponent implements OnInit {

  private data: any = [];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        title: 'xxx', content: 'Good byd', children: [
          { title: 'Level2', content: 'Welcome to Level 2' }
        ]
      },

    ]
  }
}