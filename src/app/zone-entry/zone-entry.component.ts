import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-zone-entry',
  templateUrl: './zone-entry.component.html',
  styleUrls: ['./zone-entry.component.css']
})
export class ZoneEntryComponent implements OnInit {

  jsonData: any;
  data: any;

  constructor(private router: Router, private dataService: DataService) {
  }

  dd() {
    this.setData(this.jsonData);
  }

  ngOnInit(): void {
    this.setJsonData();
  }

  async getJsonData() {
    const myurl: string = "http://localhost:3000/zone/get/all";
    const response = await fetch(myurl, { headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  }

  async setJsonData() {
    this.jsonData = await this.getJsonData();
  }

  setData(newJsonData: any) {
    this.data = Object.entries(newJsonData);
  }

  navigateToDisplayList(){
    this.router.navigateByUrl('display-list');
  }

  newMessage() {
    this.dataService.changeMessage(this.jsonData);
    this.navigateToDisplayList();
  }

}
