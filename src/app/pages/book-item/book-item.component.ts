import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {IBook} from "../../models/interfaces/book";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit{

  constructor(private route: ActivatedRoute,
              private bookService: BooksService) {
  }

  book: IBook;

  ngOnInit(): void {
    const queryIdParam = this.route.snapshot.queryParamMap.get('id');

    if (queryIdParam == null)
      return;

    this.bookService.getBookById(queryIdParam).subscribe(
      {
      next: (value) =>  this.book = value
      })
  }


}
