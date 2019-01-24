import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginSelectComponent} from './login-select.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginSelectComponent
  ],
  exports: [
    LoginSelectComponent
  ]
})
export class LoginSelectModule {}
