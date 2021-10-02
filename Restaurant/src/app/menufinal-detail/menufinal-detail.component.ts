import { Customer } from './../models/customer';
import { MenuFinal } from './../models/menufinal';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Additem } from '../models/additem';

@Component({
  selector: 'app-menufinal-detail',
  templateUrl: './menufinal-detail.component.html',
  styleUrls: ['./menufinal-detail.component.css']
})
export class MenufinalDetailComponent implements OnInit {

  id: any;
  additt: MenuFinal = new MenuFinal();
  quantitycount:Customer={
    Quantity:0
  };

  constructor(private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Additem>(`http://localhost:3000/additem/${this.id}`).subscribe(result => {
      this.additt = result;
    }, error => {
      console.log(error);
    })
  }
}