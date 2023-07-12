import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "./models/interfaces/user";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'BookStore';
  currentUser: IUser | null;

  constructor(private cookieService: CookieService,
              private authService: AuthService)
  {}

  ngOnInit(): void {
    const key = this.cookieService.get('auth')

    if (!key)
      return;

    this.authService.getCurrentUser(key)
      .subscribe({
        next: (data) => this.currentUser = data}
      );
  }

  exit() {
    this.cookieService.delete('auth');
  }

  ngOnDestroy(): void {
    this.currentUser = null;
  }
}
