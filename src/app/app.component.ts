import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck, OnInit {
  public title: string;
  public identity;

  constructor(
    private _userService: UserService,
  private _router: Router
  ) {
    this.title = 'NG ZOO';
  }
  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
