import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/interfaces/user";
import {Observable} from "rxjs";
import {ICredentials} from "../models/interfaces/credentials";
import {IAuthResult} from "../models/interfaces/auth-result";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  registerUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/auth/register', data);
  }

  authUser(data: ICredentials) {
    return this.http.post<IAuthResult>('http://localhost:3000/auth/authorize', data);
  }
}
