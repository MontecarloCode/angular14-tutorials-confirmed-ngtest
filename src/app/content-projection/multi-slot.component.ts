import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot',
  template: `
    <h2>Multi-slot content projection</h2>

    Question:
    <ng-content select="[question]"></ng-content>

    Complex:
    <ng-content select="[complex]"></ng-content>

    Default:
    <ng-content></ng-content>
  `
})
export class MultiSlotComponent {}