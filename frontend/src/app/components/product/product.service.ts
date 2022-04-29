import { map } from "rxjs/operators";
import { ProductInterface } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, Observable } from "rxjs";
import { ThisReceiver } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.baseUrl, product).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.baseUrl).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string | null): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ProductInterface>(url).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: ProductInterface): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<ProductInterface>(url, product).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number | undefined): Observable<ProductInterface> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ProductInterface>(url).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    // console.log(`ERROR: ${e.message}`);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
