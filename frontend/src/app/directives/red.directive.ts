import { Directive, ElementRef } from "@angular/core";

// diretiva de atributo
@Directive({
  selector: "[appRed]",
})
export class RedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#e35e6b";
  }
}

// Exemplo de uso no HTML - atrubuto appRed
// <span
//   >Desenvolvido com
//   <i class="material-icons v-middle" appRed> favorite </i> por
//   <strong>Cod<span class="red">3</span>r</strong>
// </span>
