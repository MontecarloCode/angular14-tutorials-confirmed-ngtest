import { Component, ContentChild, Directive, TemplateRef } from "@angular/core";

@Component({
  selector: 'app-conditional',
  template: `
    <p>conditional content exam</p>
  `,
})

export class ConditionalComponent {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

// @Directive({
//   selector: '[appConditionalContent]'
// })

// export class ConditionalContentDirective {
//   constructor(public templateRef: TemplateRef<unknown>) {}
// }

// @ContentChild(ConditionalContentDirective) content!: ConditionalContentDirective;
