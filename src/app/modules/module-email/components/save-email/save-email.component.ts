import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-email',
  templateUrl: './save-email.component.html',
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent implements OnInit {

  title = 'Save email';
  contactMail: string;
  constructor() { }

  saveEmail() {
    localStorage.setItem('emailContact', this.contactMail);
  }

  ngOnInit() { }

}
