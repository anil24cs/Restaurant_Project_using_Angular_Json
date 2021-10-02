
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cont: Contact= new Contact();

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  addcontact() {
    this._http.post('http://localhost:3000/contactuss', this.cont).subscribe(result => {
      alert('Response sent Successfully')
    }, error => {
      console.log(error);
    })

}
}
