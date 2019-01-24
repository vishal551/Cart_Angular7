import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Register } from "src/CustomDTO/Register";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  register: Register;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      ConfirmPassword: new FormControl("", Validators.required)
    });
  }
}
