// import { Component } from '@angular/core';
// @Component({
//     selector: 'app-root',
//     templateUrl: './form.page.html',
//     styleUrls: ['./form.page.scss']
//   })
//   export class AppComponent {}

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TestComponent } from '../test/test.component';

export interface PeriodicElement {
  
  Name: string;
  LastName: string;
  Gender: string;
  Email: string;
  password:number;
  Birth:string;
  State:string;
  city:string;
}

@Component({
  selector: 'app-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage {
  displayedColumns: string[] = ['Name', 'LastName', 'Gender', 'Email','password','Birth','State','city',];
  animal='';
  name='';
  data : any[] = [
    { Name: 'جواد', LastName: 'عارف',  Gender: 'مرد',Email: 'javadAref28@gmail.com' ,password:2569,Birth:'1365/4/2',State:'اصفهان',city:'شاهین شهر',},
    { Name: 'احسان', LastName: 'حسینی',  Gender: 'مرد',Email: 'javadAref28@gmail.com',password:2589,Birth:'1375/4/17',State:'تهران',city:'ری',},
    { Name: 'فاطمه',LastName: 'محمدی', Gender: 'زن', Email: 'javadAref28@gmail.com',password:1269,Birth:'1365/4/21',State:'تبریز',city:'مرند',},
    { Name: 'رضا', LastName: 'شریفیان',Gender: 'مرد',Email: 'javadAref28@gmail.com',password:4569,Birth:'1391/6/1',State:'شیراز',city:'جهرم',},
    { Name: 'زهرا', LastName: 'نظری',  Gender: 'زن', Email: 'javadAref28@gmail.com',password:29632,Birth:'1365/4/2',State:'اصفهان',city:'شاهین شهر',},
    { Name: 'نسیم', LastName: 'قربانی',Gender: 'زن', Email: 'javadAref28@gmail.com',password:25896,Birth:'1395/1/14',State:'یزد',city:'میبد',},
    { Name: 'رها', LastName: 'جزی',    Gender:  'زن' ,Email: 'javadAref28@gmail.com',password:2859,Birth:'1345/7/23',State:'اصفهان',city:'شاهین شهر',},
    { Name: 'مجید', LastName: 'ریاحی', Gender: 'مرد', Email: 'javadAref28@gmail.com',password:14569,Birth:'1355/3/8',State:'شیراز',city:'جهرم',},
    { Name: 'حسین', LastName: 'حسینی', Gender: 'مرد', Email: 'javadAref28@gmail.com',password:26879,Birth:'1398/4/25',State:'یزد',city:'میبد',},
  ]
  constructor(public dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(TestComponent,)
    dialogRef.afterClosed().subscribe(result => {
      debugger
      this.data.push(result)
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
}



  