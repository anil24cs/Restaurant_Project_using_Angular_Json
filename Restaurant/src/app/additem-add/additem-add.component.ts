import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Additem } from './../models/additem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem-add',
  templateUrl: './additem-add.component.html',
  styleUrls: ['./additem-add.component.css']
})
export class AdditemAddComponent implements OnInit {

  additem: Additem = new Additem();

  constructor(private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
  }
  additems() {
    this._http.post('http://localhost:3000/additem', this.additem).subscribe(result => {
      alert('Item Added Successfully.')
      this._router.navigate(['/additem']);
    }, error => {
      console.log(error);
    })

  }
}
