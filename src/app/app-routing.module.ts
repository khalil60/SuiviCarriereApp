import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {LoginComponent} from './login/login.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {SuiviComponent} from './suivi/suivi.component';
import {CompetenceComponent} from './competence/competence.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'employees/:id',component:EmployeeComponent},
  {path:'employee-detail/:id',component:EmployeeDetailsComponent},
  {path:'suivi',component:SuiviComponent},
  {path:'competence',component:CompetenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
