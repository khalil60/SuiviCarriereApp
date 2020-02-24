import { Component, OnInit } from '@angular/core';
import {ListEmployeeDataService} from '../service/data/list-employee-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../Employee';
//import {Employee} from '../employee-list/employee-list.component';

@Component({
  selector: 'app-infos-generales',
  templateUrl: './infos-generales.component.html',
  styleUrls: ['./infos-generales.component.css']
})
export class InfosGeneralesComponent implements OnInit {

  employee:any;
  id: number;

  constructor(private listEmployeeService:ListEmployeeDataService,private router:Router,
              private  route:ActivatedRoute) { }

  ngOnInit() {
    //this.employee=new Employee();
    this.id = this.route.snapshot.params['id'];
   // this.listEmployeeService.getListEmployees()
    this.listEmployeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  //list(){
   // this.router.navigate(['employees']);
  //}
}
