import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListEmployeeDataService {

  constructor(private http:HttpClient) { }


  getListEmployees(){
    return this.http.get(`http://localhost:8080/employees`)
  }

  retrieveEmployee(id){
    return this.http.get(`http://localhost:8080/employees/${id}`)
  }


  deleteEmployee(id){

    return this.http.delete(`http://localhost:8080/employees/${id}`)

  }
  updateEmployee(id, employee){
    return this.http.put(`http://localhost:8080/employees/${id}`,employee)
  }

  createEmployee(employee){
    return this.http.post(`http://localhost:8080/employees`,employee)
  }

   getEmployee(id){
    return this.http.get(`http://localhost:8080/employees/${id}`)
   }
}
