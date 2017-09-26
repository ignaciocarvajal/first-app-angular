import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation/animation.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [ fadeIn ]
})
export class AnimalsComponent implements OnInit{
  title = 'Animals';
  public month: string;
  public  year: string;

  ngOnInit() {
    console.log('animals Component is loaded');
  }

  verDate(event) {
    console.log(event);
  }
}
