import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy  {
  loginText: string = 'Логин';
  pswText: string = 'Пароль';

  psw: string;
  login: string;

  isFormSubmitted: boolean = false;
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  protected readonly console = console;
}
