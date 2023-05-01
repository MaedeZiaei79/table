import { Component } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  LastName: string;
  Gender: string;
  Email: string;
  password:number;
  Birth:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Name: 'جواد', LastName: 'عارف',  Gender: 'مرد', Email: 'javadAref28@gmail.com' ,password:2569,Birth:13712},
  { Name: 'علی', LastName: 'حسینی',  Gender: 'مرد', Email: 'javadAref28@gmail.com',password:2589,Birth:138556},
  { Name: 'فاطمه',LastName: 'محمدی', Gender: 'زن', Email: 'javadAref28@gmail.com',password:1269,Birth:13723},
  { Name: 'رضا', LastName: 'شریفیان',Gender: 'مرد', Email: 'javadAref28@gmail.com',password:4569,Birth:13916/1},
  { Name: 'زهرا', LastName: 'نظری',  Gender: 'زن', Email: 'javadAref28@gmail.com',password:29632,Birth:1365/4/2},
  { Name: 'نسیم', LastName: 'قربانی',Gender: 'زن', Email: 'javadAref28@gmail.com',password:25896,Birth:1395/1/14},
  { Name: 'رها', LastName: 'جزی',    Gender:  'زن' , Email: 'javadAref28@gmail.com',password:2859,Birth:1345/7/23},
  { Name: 'مجید', LastName: 'ریاحی', Gender: 'مرد', Email: 'javadAref28@gmail.com',password:14569,Birth:1355/3/8},
  { Name: 'حسین', LastName: 'حسینی', Gender: 'مرد', Email: 'javadAref28@gmail.com',password:26879,Birth:1398/4/25},
  { Name: 'علی', LastName: 'عارف',   Gender: 'مرد' , Email: 'javadAref28@gmail.com',password:8596,Birth:1383/9/6},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['Name', 'LastName', 'Gender', 'Email','password','Birth'];
  dataSource = ELEMENT_DATA;
}
