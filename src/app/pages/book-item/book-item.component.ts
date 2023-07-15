import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {IBook} from "../../models/interfaces/book";
import {BasketService} from "../../services/basket.service";
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {IUser} from "../../models/interfaces/user";
import {firstValueFrom} from "rxjs";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private bookService: BooksService,
              private basketService: BasketService,
              private authService: AuthService,
              private cookieService: CookieService,
              private messageService: MessageService,
              private router: Router) {
  }

  book: IBook | null;
  currentUser: IUser | null;

  ngOnInit(): void {
    const queryIdParam = this.route.snapshot.queryParamMap.get('id');

    if (queryIdParam == null)
      return;

    this.bookService.getBookById(queryIdParam).subscribe(
      {
        next: (value) => this.book = value
      })

    const key = this.cookieService.get('auth')

    if (!key)
      return;

    this.authService.getCurrentUser(key)
      .subscribe({
          next: (data) => this.currentUser = data
        }
      );

  }

  async addToBasket() {
    if (this.currentUser?._id == null || this.book == null)
    {
      this.router.navigateByUrl('/auth');
      return;
    }


    await firstValueFrom(this.basketService.addBookToBasket(this.currentUser._id, this.book))


    this.messageService.add({severity: "success", summary: "Товар добавлен в корзину"})
  }


}
