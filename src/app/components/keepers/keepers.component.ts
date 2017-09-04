import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation/animation.component';


@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  animations: [ fadeIn ]
})
export class KeepersComponent implements OnInit{
  title = 'Keeper';

  ngOnInit() {
    console.log('Keeper Component is loaded');
  }
}
