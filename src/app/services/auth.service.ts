import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {IUser} from "../models/interfaces/user";
import {ICredentials} from "../models/interfaces/credentials";
import {Observable} from "rxjs";
import {IAuthResult} from "../models/interfaces/auth-result";
import {ChangePasswordDto} from "../models/dtos/change-password-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rest: RestService) { }


  registerUser(data: IUser) {
    return this.rest.registerUser(data)
  }

  authUser(data: ICredentials): Observable<IAuthResult> {
    return this.rest.authUser(data);
  }

  changePassword(data: ChangePasswordDto) {
    return this.rest.changePassword(data);
  }

  getCurrentUser(jwt:string) {
    return this.rest.getCurrentUser(jwt);
  }

  getUserByEmail(email: string) {
    return this.rest.getUserByEmail(email);
  }

}
