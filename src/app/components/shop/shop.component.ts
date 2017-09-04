import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { fadeIn} from '../animation/animation.component';



declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [
    trigger('mark', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('3s linear')),
      transition('active => inactive', animate('3s linear'))
    ]),
    fadeIn
  ]
})

export class ShopComponent implements OnInit {
  public titulo;
  public status;

  constructor() {
    this.titulo = 'SHOP';
    this.status = 'inactive';
  }

  changeState (status) {
    if (status === 'inactive') {
      this.status = 'active';
    }else{
      this.status = 'inactive';
    }
  }

  textBoxEditor(content) {
    console.log(content);
  }
  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      $('#textojq').slideToggle();
    });


  }
}
