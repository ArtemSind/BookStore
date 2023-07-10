import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalOfficeComponent} from "./personal-office.component";

const routes: Routes = [
  { path: '', component: PersonalOfficeComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
