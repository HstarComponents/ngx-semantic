import { Component } from "@angular/core";

@Component({
  template: require('./tags.html')
})

export class TagsComponent {

  private tags: Array<string> = [];

  constructor() {
  }
}