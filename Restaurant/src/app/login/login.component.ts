import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  userList: Array<User> = [];

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void { }

  login() {
    this._userService.getAllUsers().subscribe(result => {
      this.userList = result;
      if (this.checkLogin()) {
        localStorage.setItem('isLoggedIn', 'true');
        this._router.navigate(['/home'])
      } else {
        alert('Invalid Credentials');
        this.clearFields();
      }
    }, error => {
      console.log(error);
    })
  }

  checkLogin() {
    for (const user of this.userList) {
      if (user.name == this.user.name && user.password == this.user.password) {
        alert('Loggedin Successfully');
        return true;
      }
    }
    return false;
  }

  clearFields() {
    this.user = new User();
  }

}
