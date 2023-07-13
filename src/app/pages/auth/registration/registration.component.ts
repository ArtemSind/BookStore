import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import {UserDto} from "../../../models/dtos/user-dto";
import {AuthService} from "../../../services/auth.service";
import {IUser} from "../../../models/interfaces/user";
import {BasketService} from "../../../services/basket.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  password: string;
  passwordRepeat: string;
  email: string;
  name: string;
  surname: string;

  namePlaceholder:string = 'Имя';
  surnamePlaceholder:string = 'Фамилия';
  emailPlaceholder:string = 'Email';
  passwordPlaceholder:string = 'Пароль';
  passwordRepeatPlaceholder:string = 'Повторите пароль';

  constructor(private modalService: NgbModal,
              private authService: AuthService,
              private basketService: BasketService) { }

  ngOnInit(): void {
  }


  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {windowClass: 'modal-class'});
  }

  async registerUser() {
    const data : IUser = {email: this.email, name: this.name, password: this.password, surname: this.surname};
    const user: any = await firstValueFrom(this.authService.registerUser(data));

    console.log(user._id)

    this.basketService.createBasket(user._id).subscribe({next: () => this.openModal()});
    }


  protected readonly console = console;
}
