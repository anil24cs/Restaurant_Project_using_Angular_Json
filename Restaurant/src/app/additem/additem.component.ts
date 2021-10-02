import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  additemList: any;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/additem').subscribe(result => {
      this.additemList = result;
      console.log(this.additemList);
    }, error => {
      console.log(error);
    })
  }

}
