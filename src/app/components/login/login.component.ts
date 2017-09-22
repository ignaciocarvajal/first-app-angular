import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from '../../models/user';
import { GLOBAL} from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public status: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Login';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }
  ngOnInit() {
  }
  onSubmit() {
    this._userService.singUp(this.user).subscribe(
      response => {
        this.identity = response.user;
        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se a logeado');
        }else {
          this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this._userService.singUp(this.user, true).subscribe(
            response => {
              this.token = response.token;
              if ( this.token.length <= 0 ) {
                alert('the token is invalid');
              }else {
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this._router.navigate(['/']);
              }
            },
            error => {
              console.log(<any>error);
            }
          );
        }
      },
      error => {
       var errorMessage = <any>error;
       if (errorMessage != null ) {
         var body = JSON.parse(error._body);
         this.status = 'error';
       }
      }
    );
  }

}
