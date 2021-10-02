import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string = "";
  registerList: Array<Register> = [];

  constructor(private _registerService: RegisterService) { }

  ngOnInit(): void {
    this.message = this._registerService.getWelcomeMessage();
    this._registerService.getDepartments().subscribe(result => {
      this.registerList = result;
    }, (error) => {
      console.log(error);
    })
  }

}
