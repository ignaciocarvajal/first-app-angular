import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { observable } from 'rxjs/symbol/observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  register(user) {
   let params = JSON.stringify(user);
   let headers = new Headers({'Content-Type' : 'application/json'});

   return this._http.post(this.url + 'save-user', params, {headers : headers})
     .map(res => res.json());
  }
  singUp(user, getToken = null) {
    if (getToken != null) {
      user.getToken = getToken;
    }
    let params = JSON.stringify(user);
    let headers = new Headers({'Content-Type' : 'application/json'});

    return this._http.post(this.url + 'login', params, {headers : headers})
      .map(res => res.json());
  }
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undifined') {
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }
  getToken() {
    let token = localStorage.getItem('token');
    if (token !== 'undifined') {
      this.token = token;
    }else {
      this.token = null;
    }
    return this.token;
  }

  updateUser(user) {
    let params = JSON.stringify(user);
    let headers = new Headers(
      {
        'Content-Type' : 'application/json',
        'Authorization' : this.getToken()
      }
      );

    return this._http.put(this.url + 'update-user/' + user._id, params, {headers : headers})
      .map(res => res.json());
  }
}
