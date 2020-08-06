import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientList: Patient[]=[];
  constructor(private httpClient: HttpClient) { }

  addPatient(patient:Patient){
    this.patientList.push(patient);
    localStorage.setItem('patientList',JSON.stringify(this.patientList));
  }

  getPatients():Observable<Patient[]>{
    if(localStorage.getItem('patientList')===null){
      this.patientList = [];
    }else{
      this.patientList = JSON.parse(localStorage.getItem('patientList'));
    }
    console.log(this.patientList);
    return of(this.patientList);
   }

   getPatient(id:number):Observable<Patient>{
    return of(this.patientList.find(patient=>patient.id===id))
   }

   getUsers():Observable<any>{
     const url = "https://api.github.com/users";
     return this.httpClient.get<any>(url);
   }
  }



