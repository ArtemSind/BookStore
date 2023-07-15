import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket-modal',
  templateUrl: './basket-modal.component.html',
  styleUrls: ['./basket-modal.component.scss']
})
export class BasketModalComponent {

  constructor(private activeModal: NgbActiveModal,
              private router: Router) {
  }

  closeModal() {
    this.activeModal.close();
    this.router.navigateByUrl("/basket")
  }

}
