import { Component, OnInit,  } from '@angular/core';
import { fadeIn} from '../animation/animation.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [ fadeIn ]
})
export class ContactComponent implements OnInit {
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
