import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id =this.route.snapshot.params['id']
  }

}
