import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";
import {BooksService} from "../../services/books.service";
import {IBook} from "../../models/interfaces/book";
import {firstValueFrom, from, groupBy, mergeMap, toArray} from "rxjs";
import * as _ from "lodash";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{

  constructor(private bookService: BooksService,
              private router: Router) {
  }


  authors: { name: string; books: IBook[]; showBooks: boolean }[]



  toggleBooks(author: any) {
    console.log(author)
    author.showBooks = !author.showBooks;
  }

  getHeight(bookCount: number): string {
    return (bookCount * 30) + 'px'; // Рассчитываем высоту списка с учетом высоты каждого элемента (21px)
  }

  async ngOnInit() {
    let books = await firstValueFrom(this.bookService.getAllBooks());

    this.authors =  this.getAuthorsWithBooks(books);

  }

  getAuthorsWithBooks(books: IBook[]): { name: string; books: IBook[]; showBooks: boolean }[] {
    const authorsMap: Map<string, IBook[]> = new Map();

    books.forEach((book) => {
      const { author, name } = book;
      if (authorsMap.has(author)) {
        authorsMap.get(author)!.push(book);
      } else {
        authorsMap.set(author, [book]);
      }
    });

    // Сортировка авторов по имени в алфавитном порядке
    const sortedAuthors = Array.from(authorsMap.keys()).sort();

    // Создание массива объектов авторов с отсортированными книгами и showBooks: false
    const sortedAuthorsWithBooks: { name: string; books: IBook[]; showBooks: boolean }[] = [];
    sortedAuthors.forEach((author) => {
      sortedAuthorsWithBooks.push({ name: author, books: authorsMap.get(author)!, showBooks: false });
    });

    return sortedAuthorsWithBooks;
  }

  goToBookInfoPage(book: IBook): void {
    this.router.navigate([`/books`], {queryParams: {id: book._id}});
  }

}
