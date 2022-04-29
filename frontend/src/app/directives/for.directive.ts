import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

// diretiva estrutural
@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input("myForOf") numbers!: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      console.log(number);
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}

// exemplo de uso no HTML
// <ul>
//   <li *myFor="let number of [1, 2, 3]">{{ number }}</li>
// </ul>
