import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Additem } from '../models/additem';

@Component({
  selector: 'app-additem-detail',
  templateUrl: './additem-detail.component.html',
  styleUrls: ['./additem-detail.component.css']
})
export class AdditemDetailComponent implements OnInit {

  id: any;
  additem: Additem = new Additem();

  constructor(private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Additem>(`http://localhost:3000/additem/${this.id}`).subscribe(result => {
      this.additem = result;
    }, error => {
      console.log(error);
    })
  }
  deleteitem() {
    this._http.delete(`http://localhost:3000/additem/${this.id}`).subscribe(result => {
      alert('Item Deleted Successfully.')
      this._router.navigate(['/additem']);
    }, error => {
      console.log(error);
    })
  }

}
