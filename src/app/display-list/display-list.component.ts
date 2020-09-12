import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  data: any;
  array: any[] = [];
  array1: any[] = [];

  j: object[] = [];

  a: any;
  arr = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let result = this.dataService.currentMessage.subscribe(message => this.data = message);

  }


  dd() {
    console.log('data');

    console.log(this.data);
    console.log('json');
    console.log(JSON.stringify(this.data));

    console.log('convert');

    console.log(JSON.parse(JSON.stringify(this.data)));

    this.j = JSON.parse(JSON.stringify(this.data));

    console.log('save');
    console.log(this.j);

    console.log('loop');

    let colidx = 0;
    for (let x of this.j) {
      console.log('col index: ' + colidx);
      for (let y of Object.values(x)) {
        console.log('here is it : ' + y);
        // this.a[newArrLength].push(y.toString());
        // this.a[colidx].push('hi');
      }
      colidx = colidx + 1;
    }


    console.log('array new');
    // this.a = ;
    console.log(Array.from(this.j));

    this.a = Array.from(this.j);

    console.log('array new one');


    this.data.forEach(item => this.arr.push(Object.values(item).map(v => v.toString())));

    console.log(this.arr);







    // try {
    //   var obj = eval("(" + this.data + ')');
    //   console.log(obj);

    // }
    // catch(e) {
    //   console.log(e.message);
    // }

    // for (let s in this.data) {
    //   this.array.push([this.data[s]]);
    // }
    // console.log(this.array);
    // document.body.innerText = this.data.toString();
  }
}
