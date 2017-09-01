import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit, DoCheck {

  title = 'show email';
  emailContact: string;
  constructor() { }

  ngOnInit() {
    this.emailContact = localStorage.getItem('emailContact');
  }

  ngDoCheck() {
    this.emailContact = localStorage.getItem('emailContact');
  }

  deleteEmail() {
    localStorage.removeItem('emailContact');
  }
}
