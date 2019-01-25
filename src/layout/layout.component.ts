import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/services/product.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  Username = null;
  Role = null;
  CartItem = null;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {}
  LayOutLoad() {
    debugger;
    this.CartItem = 0;
    this.Username = null;
    this.Role = null;
    var CurrentUser = JSON.parse(localStorage.getItem("access_token"));
    if (CurrentUser) {
      this.Username = CurrentUser.userName;
      this.Role = CurrentUser.role;
      this.GetCartItemTotal();
    }
  }
  Logout() {
    localStorage.clear();
    debugger;
    this.LayOutLoad();
    this.router.navigate(["/home"]);
  }
  GetCartItemTotal() {
    try {
      this.productService.GetCartItemTotal().subscribe(
        result => {
          if (result) this.CartItem = result;
        },
        error => {
          console.log(error);
        }
      );
    } catch (error) {}
  }
}
