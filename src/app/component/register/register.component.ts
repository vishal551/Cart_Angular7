import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Register } from "src/CustomDTO/Register";
import { RegisterService } from "src/services/register.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  myControl = new FormControl();
  myform: FormGroup;
  register = new Register();
  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myform = new FormGroup({
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      ConfirmPassword: new FormControl("", Validators.required)
    });
  }
  Register(reg: Register): void {
    debugger;
    if (this.myform.invalid) {
      return;
    } else {
      this.service.RegisterEmployee(reg).subscribe(
        res => {
          if (res == "success") {
            this.router.navigate(["/login"]);
          }
        },
        error => {
          if (!error) {
          }
        }
      );
      console.log(reg);
    }
  }
}
