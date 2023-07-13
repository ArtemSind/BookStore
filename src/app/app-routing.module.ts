import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./pages/auth/registration/registration.component";
import {AuthorizationComponent} from "./pages/auth/authorization/authorization.component";
import {PersonalOfficeComponent} from "./pages/personal-office/personal-office.component";
import {BookItemComponent} from "./pages/book-item/book-item.component";
import {BasketComponent} from "./pages/basket/basket.component";


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    component: AuthorizationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'personal-office',
    component: PersonalOfficeComponent
  },
  {
    path: 'books',
    component: BookItemComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
