import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Register } from "src/CustomDTO/Register";
import { environment } from "../environments/environment";
import { rootRenderNodes } from "@angular/core/src/view";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  root = environment.URL_API;
  constructor(private http: HttpClient) {}

  RegisterEmployee(register: Register) {
    debugger;
    try {
      const url = this.root + "/Account/Register";
      const headers = new HttpHeaders().set("content-type", "application/json");
      return this.http.post(url, register, { headers });
    } catch (error) {
      console.log(error);
    }
  }
}
