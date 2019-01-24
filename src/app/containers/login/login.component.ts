import {Component} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _loginService: LoginService) {}

  login: string;

  password: string;

  handleInput(user: any) {
    this.login = user.login;
    this.password = user.password;
    this._loginService.postData(user)
      .subscribe();
  }
}
