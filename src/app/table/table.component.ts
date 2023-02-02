import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  // total = 0;
  // row = [
  //   {
  //     id: '',
  //     name: '',
  //     price: '',
  //     quantity: '',
  //     total: '',
  //   },
  //   {
  //     id: '',
  //     name: '',
  //     price: '',
  //     quantity: '',
  //   },
  //   {
  //     id: '',
  //     name: '',
  //     price: '',
  //     quantity: '',
  //   },
  // ];
  // constructor() {}
  // ngOnInit() {
  //   this.row[0].id = '1';
  //   this.row[1].id = '2';
  //   this.row[2].id = '3';
  // }
  // addTable() {
  //   console.log(this.row.length);
  //   const obj = {
  //     id: '',
  //     name: '',
  //     price: '',
  //     quantity: '',
  //   };
  //   this.row.push(obj);
  //   this.row[this.row.length - 1].id = this.row.length.toString();
  // }
  // deleteRow(x) {
  //   // var delBtn = confirm(' Do you want to delete ?');
  //   // if (delBtn == true) {
  //   //   this.row.splice(x, 1);
  //   // }
  //   this.row.splice(x, 1);
  // }
  row = [
    {
      id: '',
      name: '',
      email: '',
    },
    {
      id: '',
      name: '',
      email: '',
    },
    {
      id: '',
      name: '',
      email: '',
    },
  ];

  addTable() {
    const obj = {
      id: '',
      name: '',
      email: '',
    };
    this.row.push(obj);
  }

  deleteRow(x) {
    // var delBtn = confirm(' Do you want to delete ?');
    // if (delBtn == true) {
    //   this.row.splice(x, 1);
    // }
    this.row.splice(x, 1);
  }

  addrow(x) {
    this.row.splice(x + 1, 0, x);
  }
}
