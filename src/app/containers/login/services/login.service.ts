import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const url: string = 'https://www.google.com.ua/';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {}

  postData(user: any): Observable<any> {
    return this._http
      .post(url, user);
  }
}
