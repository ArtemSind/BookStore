import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import {UserDto} from "../../../models/dtos/user-dto";
import {AuthService} from "../../../services/auth.service";

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
              private authService: AuthService) { }

  ngOnInit(): void {
  }


  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {windowClass: 'modal-class'});
    modalRef.componentInstance.name = 'John'; // Optional: Pass data to the modal
  }

  registerUser() {
    const data = new UserDto(this.email, this.name, this.password, this.surname);
    this.authService.registerUser(data).subscribe({next: () => this.openModal()});
  }

  protected readonly console = console;
}
