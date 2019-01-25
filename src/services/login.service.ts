import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "src/CustomDTO/Login";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  userLogin(login: Login) {
    try {
      let url = "http://localhost:54064/Token";
      var userData =
        "username=" +
        login.username +
        "&password=" +
        login.password +
        "&grant_type=password";
      var reqHeader = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return this.http.post(url, userData, { headers: reqHeader });
    } catch (error) {
      console.log(error);
    }
  }
}
