import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/interfaces/user";
import {firstValueFrom} from "rxjs";
import {ModalComponent} from "../auth/registration/modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OfficeModalComponent} from "./office-modal/office-modal.component";

@Component({
  selector: 'app-personal-office',
  templateUrl: './personal-office.component.html',
  styleUrls: ['./personal-office.component.scss']
})
export class PersonalOfficeComponent implements OnInit{

  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private modalService: NgbModal) {
  }

  currentUser: IUser | null;


  async ngOnInit() {
    const key = this.cookieService.get('auth')

    if (!key)
      return;

    const currentUser = await firstValueFrom(this.authService.getCurrentUser(key));
    console.log(currentUser);

    this.currentUser = currentUser;
  }

  openModal() {
    const modalRef = this.modalService.open(OfficeModalComponent, {windowClass: 'modal-class'});
  }

}
