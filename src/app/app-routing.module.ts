import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent} from './doctors/doctors.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'patients', component: PatientsComponent },
  { path:'doctors', component: DoctorsComponent },
  { path:'parent', component: ParentComponent },
  { path:'child/:id', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
