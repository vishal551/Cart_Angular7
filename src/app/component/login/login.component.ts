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
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myControl = new FormControl();
  myform: FormGroup;
  loginForm = new Login();
  constructor() {}

  ngOnInit() {
    this.myform = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  loginUser(login: Login) {
    console.log(login);
  }
}
