import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  total = 0;

  row = [
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.row[0].id = '1';
    this.row[1].id = '2';
    this.row[2].id = '3';
  }

  addTable() {
    console.log(this.row.length);
    const obj = {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    };

    this.row.push(obj);
    this.row[this.row.length - 1].id = this.row.length.toString();
  }

  deleteRow(x) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }
}
