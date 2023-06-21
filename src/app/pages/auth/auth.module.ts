import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import { RegistrationComponent } from './registration/registration.component';
import {TabViewModule} from "primeng/tabview";



@NgModule({
  declarations: [AuthComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabViewModule
  ]
})
export class AuthModule { }
