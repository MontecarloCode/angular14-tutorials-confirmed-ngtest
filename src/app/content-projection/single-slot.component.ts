import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-slot',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
})
export class SingleSlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
