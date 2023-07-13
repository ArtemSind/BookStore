import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/interfaces/user";
import {BasketService} from "../../services/basket.service";
import {IBasket} from "../../models/interfaces/basket";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private basketService: BasketService) {
  }

  currentUser: IUser | null
  basket: IBasket | null

  async ngOnInit() {
    const key = this.cookieService.get('auth')

    if (!key)
      return;

    const currentUser = await firstValueFrom(this.authService.getCurrentUser(key));
    console.log(currentUser);

    this.currentUser = currentUser;


    if (!currentUser._id)
      return;

    console.log(currentUser._id)

    this.basket = await firstValueFrom(this.basketService.getBasket(currentUser._id));

    console.log(this.basket);

  }


  getTotal() {
    let sum = 0;
    this.basket?.books.forEach(i => sum += parseInt(i.price));

    return sum;
  }

  async remove(bookId:string | undefined) {
    if (this.currentUser?._id != null && bookId != null)
    await firstValueFrom(this.basketService.removeBookFromBasket(this.currentUser?._id, bookId))
    window.location.reload();
  }
}
