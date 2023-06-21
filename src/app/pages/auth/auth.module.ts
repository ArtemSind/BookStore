import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import { RegistrationComponent } from './registration/registration.component';
import {TabViewModule} from "primeng/tabview";
import { AuthorizationComponent } from './authorization/authorization.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [AuthComponent, RegistrationComponent, AuthorizationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabViewModule,
    FormsModule,
    InputTextModule
  ]
})
export class AuthModule { }
