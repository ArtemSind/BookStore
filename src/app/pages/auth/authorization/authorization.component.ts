import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CredentialsDto} from "../../../models/dtos/credentials-dto";
import {Observable} from "rxjs";
import {IAuthResult} from "../../../models/interfaces/auth-result";

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

  constructor(private authService: AuthService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  authUser(): Observable<IAuthResult> {
    const data = new CredentialsDto(this.email, this.password);
    return this.authService.authUser(data);
  }

  protected readonly console = console;
}
