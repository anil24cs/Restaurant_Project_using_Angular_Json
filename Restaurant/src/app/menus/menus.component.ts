import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { menul } from '../models/menul.';

@Component({
  selector: 'app-menusitem',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  num1:any;
  num2:any;

  an: menul = new menul();

  ml: any;
  quantitycoun:Customer={
    Quantity:2
  };
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/additem').subscribe(result => {
      this.ml = result;
      console.log(this.ml);
    }, error => {
      console.log(error);
    })
  }
    additems() {
      this._http.post('http://localhost:3000/price', this.an).subscribe(result => {
        alert(' Quantity Selected Successfully.')
      }, error => {
        console.log(error);
      })

  }
}
