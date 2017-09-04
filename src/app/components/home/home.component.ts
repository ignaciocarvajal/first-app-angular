import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation/animation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ fadeIn ]
})
export class HomeComponent implements OnInit {
  title = 'welcome to NG ZOO';

  ngOnInit() {
    console.log('HomeComponent is loaded');
  }
}
