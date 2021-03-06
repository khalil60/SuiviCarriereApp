import { Component, OnInit } from '@angular/core';
import {ListEmployeeDataService} from '../service/data/list-employee-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // employee: any;
   //id: number;

  constructor(private listEmployeeService:ListEmployeeDataService,private router:Router,
              private  route:ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params['id'];
    //this.listEmployeeService.getEmployee(this.id)
    //  .subscribe(data => {
      ///  console.log(data)
      //  this.employee = data;
   // }, error => console.log(error));
  //}

  //list(){
    //this.router.navigate(['employees']);
    }

}

