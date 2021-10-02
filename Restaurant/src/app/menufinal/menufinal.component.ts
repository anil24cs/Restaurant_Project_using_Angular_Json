import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menufinal',
  templateUrl: './menufinal.component.html',
  styleUrls: ['./menufinal.component.css']
})
export class MenufinalComponent implements OnInit {

  aL: any;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/additem').subscribe(result => {
      this.aL = result;
      console.log(this.aL);
    }, error => {
      console.log(error);
    })
  }

}
