import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AuthorizationComponent} from "./pages/auth/authorization/authorization.component";
import {RegistrationComponent} from "./pages/auth/registration/registration.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { ModalComponent } from './pages/auth/registration/modal/modal.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PersonalOfficeComponent } from './pages/personal-office/personal-office.component';
import {CookieService} from "ngx-cookie-service";
import { BookItemComponent } from './pages/book-item/book-item.component';
import { BasketComponent } from './pages/basket/basket.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ModalComponent,
    PersonalOfficeComponent,
    BookItemComponent,
    BasketComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
