import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  title = 'Contact';
  contactMail: string;

  ngOnInit() {
    console.log('contact Component is loaded');
  }

  saveEmail() {
    localStorage.setItem('contactEmail', this.contactMail);
    console.log(localStorage.getItem('contactEmail'));
  }
}
