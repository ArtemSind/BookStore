import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../services/auth.service";
import {ChangePasswordDto} from "../../../models/dtos/change-password-dto";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-office-modal',
  templateUrl: './office-modal.component.html',
  styleUrls: ['./office-modal.component.scss']
})
export class OfficeModalComponent {

  constructor(private activeModal: NgbActiveModal,
              private router: Router,
              private messageService: MessageService,
              private authService: AuthService) {}

  email: string;
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;

  emailPlaceholder = 'Email';
  oldPasswordPlaceholder = 'Текущий пароль';
  passwordPlaceholder = 'Новый пароль';
  passwordRepeatPlaceholder = 'Повторите пароль';

  closeModal() {
    this.activeModal.close();
    this.router.navigateByUrl("/personal-office")
  }

  async changePassword() {
    if (this.newPassword != this.newPasswordRepeat)
    {
      this.messageService.add({severity:"warn", summary: "Пароли не совпадают"})
      return;
    }

    const currentUser = await firstValueFrom(this.authService.getUserByEmail(this.email));

    if (!currentUser || currentUser.password != this.oldPassword)
    {
      this.messageService.add({severity:"warn", summary: "Неверный email или пароль"})
      return;
    }

    const data: ChangePasswordDto = {email: this.email, oldPassword: this.oldPassword, newPassword: this.newPassword}

    console.log(data)

    await firstValueFrom(this.authService.changePassword(data));

    this.messageService.add({severity: "success", summary: "Пароль успешно изменён"});

    setTimeout(() => this.closeModal(), 1000);

  }

}
