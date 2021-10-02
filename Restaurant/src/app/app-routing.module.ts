import { ContactComponent } from './contact/contact.component';
import { AfterbillingComponent } from './afterbilling/afterbilling.component';
import { MenufinalDetailComponent } from './menufinal-detail/menufinal-detail.component';
import { MenufinalComponent } from './menufinal/menufinal.component';
import { BillingComponent } from './billing/billing.component';
import { MenusComponent } from './menus/menus.component';
import { MenuComponent } from './menu/menu.component';
import { AdditemDetailComponent } from './additem-detail/additem-detail.component';
import { AdditemAddComponent } from './additem-add/additem-add.component';
import { AdditemComponent } from './additem/additem.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAddComponent } from './register-add/register-add.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DessertComponent } from './dessert/dessert.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { AuthService } from './services/auth.service';



const routes: Routes = [
  { path: 'additem', component: AdditemComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'afterbilling', component: AfterbillingComponent},
  { path: 'menufinaldetail/:id', component: MenufinalDetailComponent},
  { path: 'menufinall', component: MenufinalComponent},
  { path: 'billing', component: BillingComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'additem-add', component: AdditemAddComponent},
  { path: 'additem-detail/:id', component:AdditemDetailComponent},
  { path: 'home', component: HomeComponent},
  { path: 'pizza', component: PizzaComponent},
  { path: 'dessert', component: DessertComponent},
  { path: 'sandwich', component: SandwichComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register-add', component: RegisterAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
