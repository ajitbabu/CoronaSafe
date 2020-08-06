import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyErrorDirective} from './app.myerrordirective'

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    DoctorsComponent,
    ParentComponent,
    ChildComponent,
    MyErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
