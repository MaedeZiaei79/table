import { Component, Inject } from '@angular/core';
import{FormControl,Validators}from'@angular/forms'; 
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


export interface DialogData {
 animal: string;
 name: string;
 
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
  
})

export class TestComponent {
title='formm';
hide=true;
item={name:'',LastName:'',Gender:'',Email:'',password:'',Birth:'', State:'',city:'',PhonNumber:''}



email=new FormControl('',[Validators.required,Validators.email]);

getErrorMessage(){
  if(this.email.hasError('required')){
  return'You must enter a value';
  }
  
  return this.email.hasError('email')?'Not a valid email':'';
  } 

  constructor(
    public dialogRef: MatDialogRef<TestComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close()
  }
}