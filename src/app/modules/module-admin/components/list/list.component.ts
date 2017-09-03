import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = 'List'
  /*lengthTable = [0,1,2,3,4,5];*/
  lengthTable = new Array(15);
  constructor() { }

  ngOnInit() {
  }

}
