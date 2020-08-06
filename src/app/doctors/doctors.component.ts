import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, Input } from '@angular/core';
import { Doctor } from '../doctor';
import {Observable, of} from 'rxjs'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() patientName:string;
  doctorList :Doctor[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");

    console.log("ngOnChanges - Doctor" + this.patientName);
  }
  ngDoCheck(): void {
   // throw new Error("Method not implemented.");
    console.log("ngDoCheck - Doctor");
  }
  ngAfterContentInit(): void {
   // throw new Error("Method not implemented.");
    console.log("ngAfterContentInit - Doctor");
  }
  ngAfterContentChecked(): void {
    //throw new Error("Method not implemented.");
    console.log("ngAfterContentChecked - Doctor");
  }
  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
    console.log("ngAfterViewInit - Doctor");
  }
  ngAfterViewChecked(): void {
   // throw new Error("Method not implemented.");
    console.log("ngAfterViewChecked - Doctor");
  }

  ngOnInit(): void {
    this.getDoctors();
    console.log("ngOnInit - Doctor");
  }


  addDoctor(form){
    var doctor:Doctor;
    doctor = form.value;
    this.doctorList.push(doctor);
    localStorage.setItem('doctorList',JSON.stringify(this.doctorList));
    console.log(localStorage.value);
  }

  getDoctors():void{
    if(localStorage.getItem('doctorList')===null){
      this.doctorList = [];
    }else{
      this.doctorList = JSON.parse(localStorage.getItem('doctorList'));
    }
   }

}
