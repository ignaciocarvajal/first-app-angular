import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Months} from '../../models/month';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public months: Array<any>;
  public years: Array<any>;
  public  selectedMonth: Months;
  public selectedYear: number;
  @Output() pasaleFecha = new EventEmitter();

  constructor() {
   this.months = [
     {id: 1 , name: 'enero' },
     {id: 2 , name: 'febrero' },
     {id: 3 , name: 'marzo' },
     {id: 4 , name: 'abril' },
   ];

   this.years = [
     '2017',
     '2018',
     '2019'
   ];
  }

  ngOnInit() {
    this.selectedMonth = {id: 1 , name: 'enero' };
    this.selectedYear = 2017;
  }

  callApi() {
    this.pasaleFecha.emit({
      'month': this.selectedMonth.id,
      'year': this.selectedYear
    });
  }

}
