import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  URL_API = environment.URL_API;
  constructor(private http: HttpClient) {}
  GetCartItems() {
    try {
      const url = this.URL_API + "/Cart/CartItems";
      return this.http.get(url);
    } catch (error) {
      console.log(error);
    }
  }
}
