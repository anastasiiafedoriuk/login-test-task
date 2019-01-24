import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-select',
  templateUrl: './login-select.component.html',
  styleUrls: ['./login-select.component.scss']
})
export class LoginSelectComponent {

  id: number;

  userCredentials = [
    {
      id: 0,
      login: 'firstLogin',
      password: '1234wer'
    },
    {
      id: 1,
      login: 'secondLogin',
      password: '1234sdkjfh'
    }
  ];

  @Output()
  user: EventEmitter<any> = new EventEmitter<any>();

  handleSelect(id: number) {
    let user = this.userCredentials.find(value => value.id === +id);
    this.user.emit(user);
  }
}
