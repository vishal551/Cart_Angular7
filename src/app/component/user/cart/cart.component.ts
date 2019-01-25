import { Component, OnInit } from "@angular/core";
import { CartService } from "src/services/cart.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = [
    "ProductImage",
    "ProductName",
    "ProductPrice",
    "ProductQuantity",
    "ProductTotal",
    "button"
  ];
  dataSource = ELEMENT_DATA;
  CartItemsCount = null;
  CartItems: any;
  SubTotal = 0;
  ShippingCharge = 0;
  GrantTotal = 0;
  constructor(
    private cartService: CartService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    var current_user = JSON.parse(localStorage.getItem("access_token"));
    if (current_user != undefined && current_user != null)
      this.GetAllCartItems();
    else this.router.navigate(["/home"]);
  }
  GetAllCartItems(): any {
    debugger;
    this.spinner.show();
    this.CartItemsCount = 0;
    this.SubTotal = 0;
    this.ShippingCharge = 0;
    this.GrantTotal = 0;
    try {
      this.cartService.GetCartItems().subscribe(
        response => {
          if (response != null) {
            this.CartItems = response;
            this.CartItemsCount = this.CartItems.length;
            if (this.CartItems.length == 1) this.ShippingCharge = 50;
            else if (this.CartItems.length == 2) this.ShippingCharge = 100;
            else if (this.CartItems.length == 3) this.ShippingCharge = 120;
            else if (this.CartItems.length > 3) this.ShippingCharge = 160;
            for (let i = 0; this.CartItems.length > i; i++) {
              this.SubTotal =
                this.SubTotal +
                this.CartItems[i].ProductPrice *
                  this.CartItems[i].ProductQuantity;
            }
            this.spinner.hide();
          }
        },
        error => {
          console.log(error);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
}
