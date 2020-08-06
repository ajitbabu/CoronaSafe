import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {

  patientList:Patient[]=[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    //this.getPatients;
    this.patientService.getPatients()
    .subscribe(patients => this.patientList = patients);
  }



  addPatient(form){
    var patient: Patient;
    patient = form.value;
    this.patientService.addPatient(patient);
    /*

    this.patientList.push(patient);
    localStorage.setItem('patientList',JSON.stringify(this.patientList));
    console.log(form.value);*/
  }

  getPatients(): void {
    this.patientService.getPatients()
    .subscribe(patients => this.patientList = patients);
  }

  getUsers(){
    this.patientService.getUsers().subscribe((data)=>{
      console.log(data);
      this.patientList=data;
    })
  }

}
