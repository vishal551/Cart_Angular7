import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
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
}
