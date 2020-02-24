import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {LoginComponent} from './login/login.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {SuiviComponent} from './suivi/suivi.component';
import {CompetenceComponent} from './competence/competence.component';
import {InfosGeneralesComponent} from './infos-generales/infos-generales.component';
import {CommentsComponent} from './comments/comments.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'employees/:id',component:EmployeeComponent},
  {path:'employee-detail',component:EmployeeDetailsComponent, children:[
      //{path:'',component:InfosGeneralesComponent},
     // {path:'',component:InfosGeneralesComponent},
      {path:'infos-generales/:id',component:InfosGeneralesComponent},
      {path:'competence',component:CompetenceComponent},
      {path:'comments',component:CommentsComponent}

    ]},


  {path:'suivi',component:SuiviComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
