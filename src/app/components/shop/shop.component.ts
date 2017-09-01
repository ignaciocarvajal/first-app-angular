import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})

export class ShopComponent implements OnInit {
  public titulo;

  constructor() {
    this.titulo = 'SHOP';
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
