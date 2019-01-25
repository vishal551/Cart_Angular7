import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { RegisterComponent } from "./component/register/register.component";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "home", component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
