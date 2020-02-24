import { Component, OnInit } from '@angular/core';
import {ListEmployeeDataService} from '../service/data/list-employee-data.service';
import {Router} from '@angular/router';

export class Employee {
  constructor( id: number,
              firstName: string,
              lastName: string,
              deteEmbauche: Date
              ){}

}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees: any;
  message:String
  constructor(private listEmployeeService:ListEmployeeDataService,
              private router:Router
              ) { }

  ngOnInit() {

    this.listEmployeeService.getListEmployees().subscribe(response=>{
      this.employees=response
    })
  }

  refreshEmployees() {
    this.listEmployeeService.getListEmployees().subscribe(response=>{
      this.employees=response
    })
  }
  deleteEmployee(id: any) {
    this.listEmployeeService.deleteEmployee(id).subscribe(response=>{
      console.log(response)
      this.message= `You are sucessfully detele employe ID ${id}`
      this.refreshEmployees()
    })

  }

  updateEmployee(id: any) {
    this.router.navigate(['employees',id])

  }

  employeeDetails(id:any) {
    this.router.navigate(['employee-detail/infos-generales',id ])
    //this.router.navigate(['comments'],id)
  }


  addEmployee() {
    this.router.navigate(['employees',-1])
  }
}
