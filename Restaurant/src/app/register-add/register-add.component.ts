import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from './../register/register.component';
import { Register } from './../models/register';
import { RegisterService } from './../services/register.service';

@Component({
  selector: 'app-register-add',
  templateUrl: './register-add.component.html',
  styleUrls: ['./register-add.component.css']
})
export class RegisterAddComponent implements OnInit {

  register: Register = new Register();
  id:any;

  constructor(private _registerService: RegisterService,
    private _rotuer: Router) { }

  ngOnInit(): void { }

  addDepartment() {
    this._registerService.addDepartment(this.register).subscribe(result => {
      alert('Registeration done Successfully.');
      this._rotuer.navigate(['/home']);
    }, error => {
      console.log(error);
    })
  }

  deleteDepartment() {
    this._registerService.deleteDepartment(this.id).subscribe(result => {
      alert('Deletion done Successfully.');
      this._rotuer.navigate(['/home']);
    }, error => {
      console.log(error);
    })
  }
  

}

