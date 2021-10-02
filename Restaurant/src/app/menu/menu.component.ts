import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList: any;
  quantitycount:Customer={
    Quantity:0
  };
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/additem').subscribe(result => {
      this.menuList = result;
      console.log(this.menuList);
    }, error => {
      console.log(error);
    })
  }

  

}
