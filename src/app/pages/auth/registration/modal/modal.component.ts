import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {



  constructor(public activeModal: NgbActiveModal,
              private router: Router) {}

  closeModal() {
    this.activeModal.close();
    this.router.navigateByUrl("/auth")
  }

}
