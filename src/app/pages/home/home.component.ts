import {Component, OnInit} from '@angular/core';
import {IBook} from "../../models/interfaces/book";
import {BookDto} from "../../models/dtos/book-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: IBook[];

  ngOnInit(): void {
    this.books = [new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69'),
      new BookDto('John Dou', 'img', 'Super book', '69.69')]
  }
}
