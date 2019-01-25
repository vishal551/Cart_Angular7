import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Cart } from "src/CustomDTO/Cart";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  root = environment.URL_API;
  constructor(private http: HttpClient) {}

  GetCartItemTotal() {
    try {
      const url = this.root + "/Cart/CartItemTolal";
      return this.http.get(url);
    } catch (e) {
      console.log(e);
    }
  }
  GetAllProduct() {
    try {
      const url = this.root + "/Product/ProductList";
      return this.http.get(url);
    } catch (e) {
      console.log(e);
    }
  }
  AddCart(C: Cart) {
    try {
      const url = this.root + "/Cart/AddToCart";
      return this.http.post(url, C);
    } catch (e) {
      console.log(e);
    }
  }
}
