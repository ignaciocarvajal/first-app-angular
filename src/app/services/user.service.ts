import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { observable } from 'rxjs/symbol/observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  register(user) {
   let params = JSON.stringify(user);
   let headers = new Headers({'Content-Type' : 'application/json'});

   return this._http.post(this.url + 'save-user', params, {headers})
     .map(res => res.json());
  }
}
