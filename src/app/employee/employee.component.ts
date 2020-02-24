import { Component, OnInit } from '@angular/core';
import {ListEmployeeDataService} from '../service/data/list-employee-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../employee-list/employee-list.component';
import {HttpResponse} from '@angular/common/http';
//import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id: number;
  employee: any;
  selectedFiles: FileList;
  //admincheck: boolean;
  //status: boolean;
  //filemodel: any;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //selectedFile = null;
 // changeImage = false;
  constructor(private listEmployeeService: ListEmployeeDataService,
              private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id']
    this.employee = new Employee(this.id, '', '', new Date());
    if (this.id!= -1) {
      this.listEmployeeService.retrieveEmployee(this.id).subscribe(response =>
        this.employee = response
      )
    }
  }

  saveEmployee() {
    if (this.id == -1) {
      this.listEmployeeService.createEmployee(this.employee).subscribe(response =>{
        console.log(response)
        this.router.navigate(['employees'])
    })

    }else {
    this.listEmployeeService.updateEmployee(this.id, this.employee).subscribe(response => {
      console.log(response)
      this.router.navigate(['employees'])
    })

    }
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  upload() {
    //this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    //this.listEmployeeService.uploadCV(this.filemodel).subscribe(data=>{
      //console.log(data)
      this.listEmployeeService.uploadCV(this.currentFileUpload).subscribe(data=>{
        console.log(data)
        if (data instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
    });
    this.selectedFiles = undefined;

  }

  downloadFile() {

  }
}

