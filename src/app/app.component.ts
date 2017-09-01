import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'NG ZOO';
  emailContact: string;

  ngOnInit() {
    this.emailContact = localStorage.getItem('contactEmail');
  }
  ngDoCheck() {
    this.emailContact = localStorage.getItem('contactEmail');
  }

  deleteEmail() {
    localStorage.removeItem('contactEmail');
  }
}
