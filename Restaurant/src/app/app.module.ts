import { RegisterService } from './services/register.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DessertComponent } from './dessert/dessert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAddComponent } from './register-add/register-add.component';
import { AdditemComponent } from './additem/additem.component';
import { AdditemAddComponent } from './additem-add/additem-add.component';
import { AdditemDetailComponent } from './additem-detail/additem-detail.component';
import { MenuComponent } from './menu/menu.component';
import { MenusComponent } from './menus/menus.component';
import { BillingComponent } from './billing/billing.component';
import { MenufinalComponent } from './menufinal/menufinal.component';
import { MenufinalDetailComponent } from './menufinal-detail/menufinal-detail.component';
import { AfterbillingComponent } from './afterbilling/afterbilling.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SandwichComponent,
    PizzaComponent,
    DessertComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAddComponent,
    AdditemComponent,
    AdditemAddComponent,
    AdditemDetailComponent,
    MenuComponent,
    MenusComponent,
    BillingComponent,
    MenufinalComponent,
    MenufinalDetailComponent,
    AfterbillingComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RegisterService],
  bootstrap: [MainComponent]
})
export class AppModule { }
