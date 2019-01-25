import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger;
    let currentUser = JSON.parse(localStorage.getItem("access_token"));
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${currentUser.access_token}`
        }
      });
    }
    return next.handle(request);
  }
}
