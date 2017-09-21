import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from '../../models/user';
import { GLOBAL} from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: String;
  public user: User;
  public status: String;

  constructor(
    private _route: ActivatedRoute,
    private _touter: Router,
    private _userService: UserService
  ) {
    this.title = 'Register';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

  onSubmit(registerForm) {
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'Success';
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
          registerForm.reset();
        }else {
          this.status = 'Error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
