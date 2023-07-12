import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {BookDto} from "../models/dtos/book-dto";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private rest: RestService) { }

  getAllBooks() {
    return this.rest.getAllBooks();
  }

  getBookById(id: string) {
    return this.rest.getBookById(id);
  }
}
