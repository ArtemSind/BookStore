import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CredentialsDto} from "../../../models/dtos/credentials-dto";
import {firstValueFrom, Observable} from "rxjs";
import {IAuthResult} from "../../../models/interfaces/auth-result";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {IUser} from "../../../models/interfaces/user";
import {UserDto} from "../../../models/dtos/user-dto";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy  {
  emailPlaceholder: string = 'Логин';
  passwordPlaceholder: string = 'Пароль';

  password: string;
  email: string;

  @Output() currentUser = new EventEmitter<IUser>();

  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  async authUser() {
    const data = new CredentialsDto(this.email, this.password);

    this.authService.authUser({email: this.email, password: this.password}).subscribe(
      {
        next: (data) => {
          this.cookieService.set('auth', data.access_token);
          this.router.navigateByUrl("/home").then(() => {window.location.reload()});
        }
      })


  }

  protected readonly console = console;
}
