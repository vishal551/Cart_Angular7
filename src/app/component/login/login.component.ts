import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Login } from "src/CustomDTO/Login";
// import { RegisterService } from "src/services/register.service";
import { Router } from "@angular/router";
import { LoginService } from "src/services/login.service";
import { first } from "rxjs/operators";
import { Response } from "selenium-webdriver/http";
import { LayoutComponent } from "src/layout/layout.component";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myControl = new FormControl();
  myform: FormGroup;
  loginForm = new Login();
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router,
    private layoutComponent: LayoutComponent
  ) {}

  ngOnInit() {
    this.myform = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  loginUser(login: Login) {
    debugger;
    try {
      this.loginService
        .userLogin(login)
        .pipe(first())
        .subscribe(
          result => {
            if (result) {
              localStorage.setItem("access_token", JSON.stringify(result));
              this.route.navigate(["/home"]);
              this.layoutComponent.LayOutLoad();
            }
          },
          error => {
            if (error != undefined) {
              console.log(error);
            }
          }
        );
    } catch (error) {
      console.log(error);
    }
  }
}
