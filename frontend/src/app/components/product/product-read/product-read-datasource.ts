// import { ProductInterface } from "./../product.model";
// import { DataSource } from "@angular/cdk/collections";
// import { map } from "rxjs/operators";
// import { Observable, of as observableOf, merge } from "rxjs";

// // const EXAMPLE_DATA: ProductInterface[] = [
// //   { id: 1, name: "Hydrogen", price: 9.99 },
// //   { id: 2, name: "Helium", price: 9.99 },
// //   { id: 3, name: "Lithium", price: 9.99 },
// //   { id: 4, name: "Beryllium", price: 9.99 },
// //   { id: 5, name: "Boron", price: 9.99 },
// //   { id: 6, name: "Carbon", price: 9.99 },
// //   { id: 7, name: "Nitrogen", price: 9.99 },
// //   { id: 8, name: "Oxygen", price: 9.99 },
// //   { id: 9, name: "Fluorine", price: 9.99 },
// //   { id: 10, name: "Neon", price: 9.99 },
// //   { id: 11, name: "Sodium", price: 9.99 },
// //   { id: 12, name: "Magnesium", price: 9.99 },
// //   { id: 13, name: "Aluminum", price: 9.99 },
// //   { id: 14, name: "Silicon", price: 9.99 },
// //   { id: 15, name: "Phosphorus", price: 9.99 },
// //   { id: 16, name: "Sulfur", price: 9.99 },
// //   { id: 17, name: "Chlorine", price: 9.99 },
// //   { id: 18, name: "Argon", price: 9.99 },
// //   { id: 19, name: "Potassium", price: 9.99 },
// //   { id: 20, name: "Calcium", price: 9.99 },
// // ];

// /**
//  * Data source for the ProductRead2 view. This class should
//  * encapsulate all logic for fetching and manipulating the displayed data
//  * (including sorting, pagination, and filtering).
//  */
// export class ProductReadDataSource extends DataSource<ProductInterface> {
//   data!: ProductInterface[];
//   constructor() {
//     super();
//   }

//   /**
//    * Connect this data source to the table. The table will only update when
//    * the returned stream emits new items.
//    * @returns A stream of the items to be rendered.
//    */
//   connect(): Observable<ProductInterface[]> {
//     return merge(observableOf(this.data)).pipe(
//       map(() => {
//         return this.data;
//       })
//     );
//   }

//   /**
//    *  Called when the table is being destroyed. Use this function, to clean up
//    * any open connections or free any held resources that were set up during connect.
//    */
//   disconnect(): void {}
// }
