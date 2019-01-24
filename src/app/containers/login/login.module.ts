import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRouting} from './login.routing';
import {LoginSelectModule} from './modules/login-select/login-select.module';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    LoginSelectModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {}
