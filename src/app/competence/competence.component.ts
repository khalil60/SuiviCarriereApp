import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  tribu : String [] = ['Business Inteligence/Big Data',"Developpement",'fonctionnel']

  id:number;
  constructor(private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id =this.activedRoute.snapshot.params['id']
  }

  AddSkils() {

    //this.router.

  }
}
