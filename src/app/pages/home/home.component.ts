import {Component, OnInit} from '@angular/core';
import {IBook} from "../../models/interfaces/book";
import {Router} from "@angular/router";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private bookService: BooksService) {
  }

  books: IBook[];

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({next: (data) =>
      {
        this.books = data;
        console.log(data);
      }
    });
  }

  goToBookInfoPage(item: IBook): void {
    this.router.navigate([`/books`], {queryParams: {id: item._id}});
  }
}
