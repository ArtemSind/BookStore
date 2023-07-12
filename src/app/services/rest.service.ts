import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/interfaces/user";
import {Observable} from "rxjs";
import {ICredentials} from "../models/interfaces/credentials";
import {IAuthResult} from "../models/interfaces/auth-result";
import {IBook} from "../models/interfaces/book";

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

  getCurrentUser(jwt: string) {
    return this.http.post<IUser>('http://localhost:3000/auth/current-user', {jwt: jwt})
  }

  getAllBooks() {
    return this.http.get<IBook[]>('http://localhost:3000/books')
  }

  getBookById(id: string) {
    return this.http.get<IBook>(`http://localhost:3000/books/${id}`)
  }
}
