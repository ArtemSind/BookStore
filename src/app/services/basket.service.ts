import {Injectable} from '@angular/core';
import {IBook} from "../models/interfaces/book";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private rest: RestService) {
  }

  getBasket(userId: string) {
    return this.rest.getBasket(userId);
  }

  removeBookFromBasket(userId: string, bookId: string) {

    return this.rest.removeBookFromBasket(userId, bookId);
  }

  addBookToBasket(userId: string, book: IBook) {
    console.log('in basket service')
    return this.rest.addBookToBasket(userId, book);
  }

  createBasket(userId: string) {
    return this.rest.createBasket(userId)
  }
}
