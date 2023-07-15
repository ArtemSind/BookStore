import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/interfaces/user";
import {Observable} from "rxjs";
import {ICredentials} from "../models/interfaces/credentials";
import {IAuthResult} from "../models/interfaces/auth-result";
import {IBook} from "../models/interfaces/book";
import {IBasket} from "../models/interfaces/basket";
import {RemoveBookDto} from "../models/dtos/remove-book-dto";
import {ChangePasswordDto} from "../models/dtos/change-password-dto";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  registerUser(data: IUser) {
    return this.http.post('http://localhost:3000/auth/register', data);
  }

  authUser(data: ICredentials) {
    return this.http.post<IAuthResult>('http://localhost:3000/auth/authorize', data);
  }

  getUserByEmail(email: string) {
    return this.http.get<IUser>(`http://localhost:3000/auth/${email}`)
  }

  changePassword(body: ChangePasswordDto) {
    return this.http.post(`http://localhost:3000/auth/change-password`, body)
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

  getBasket(userId: string) {
    return this.http.get<IBasket>(`http://localhost:3000/baskets/${userId}`)
  }

  removeBookFromBasket(userId: string, bookId: string) {
    console.log('inside rest')

    const data: RemoveBookDto = {userId: userId, bookId: bookId};

    return this.http.delete(`http://localhost:3000/baskets`, {body: data})
  }

  addBookToBasket(userId: string, book: IBook) {
    console.log("userId, book:", userId, book)
    return this.http.post(`http://localhost:3000/baskets`, {userId: userId, book: book})
  }

  createBasket(userId: string) {
    return this.http.post(`http://localhost:3000/baskets/${userId}`, {})
  }
}
