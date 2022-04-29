import { ProductInterface } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: ProductInterface = {
    name: "",
    price: null as any,
  };

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}

// explicação
// export class ProductCreateComponent implements OnInit {
//   //attribute binding
//   mudaValor = "novo-id";
//   // uso no HTML
//   // <p [id]="mudaValor">product-create works!</p>

//   constructor() {}

//   ngOnInit(): void {}

//   // Event binding - ligação de evento
//   fazerAlgo(): void {
//     console.log("fazendo algo!");
//   }
//   // uso no HTML
//   // <button (click)="fazerAlgo()">Fazer Algo!</button>
// }
