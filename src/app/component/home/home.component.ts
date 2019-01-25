import { Component, OnInit, Inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ProductService } from "src/services/product.service";
import { Product } from "src/CustomDTO/Product";
import { MatDialogConfig, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { inject } from "@angular/core/testing";
import { Cart } from "src/CustomDTO/Cart";
import { LayoutComponent } from "src/layout/layout.component";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  productList: any;
  productID: number;
  constructor(
    private spinner: NgxSpinnerService,
    private productService: ProductService,
    public dilough: MatDialog,
    public layout: LayoutComponent,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.GetAllProduct();
  }
  GetAllProduct(): any {
    this.spinner.show();
    try {
      this.productService.GetAllProduct().subscribe(
        response => {
          if (response) {
            this.productList = response;
            for (let i = 0; i < this.productList.length; i++) {
              if (this.productList[i].ProductImage === "") {
                this.productList[i].ProductImage =
                  "data:image/png;base64,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";
              } else {
                this.productList[i].ProductImage =
                  "data:image/png;base64," + this.productList[i].ProductImage;
              }
            }
          }
          this.spinner.hide();
        },
        error => {
          console.log(error);
        }
      );
    } catch (error) {}
  }
  AddToCart(Prod: Product): void {
    this.productID = Prod.ProductID;
    const diloughConfirm = new MatDialogConfig();
    diloughConfirm.disableClose = true;
    diloughConfirm.autoFocus = true;
    diloughConfirm.data = { Prod };
    const dialogRef = this.dilough.open(DialogConfirmCart, diloughConfirm);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var current_user = JSON.parse(localStorage.getItem("access_token"));
        if (current_user) {
          const cartItem = new Cart();
          cartItem.ProductID = Prod.ProductID;
          cartItem.ProductQuantity = Prod.ProductQuantity;
          this.productService.AddCart(cartItem).subscribe(response => {
            if (response == "success") {
              this.toaster.success(
                Prod.ProductName + " added in cart",
                "Success"
              );
              this.layout.GetCartItemTotal();
            } else if (response == "already") {
              this.toaster.warning("Already available in cart", "Warning");
            } else {
              this.toaster.error("Opps some error", "Error");
            }
          });
        } else {
          this.router.navigate(["/login"]);
        }
      }
    });
  }
}

@Component({
  selector: "dialog-confirm-cart",
  templateUrl: "dialog-confirm-cart.html"
})
export class DialogConfirmCart {
  ProductTitle: string;
  image: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.ProductTitle = data.Prod.ProductName;
    this.image = data.Prod.ProductImage;
    console.log(data);
  }
}
