import { Component, OnInit } from '@angular/core';
import {CommentaireDataService} from '../service/data/commentaire-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
   id: number;
  private commentaire: any;

  constructor(private commentaireService:CommentaireDataService,private route: ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params['id'];
    //this.commentaireService.getCommentaire(this.id).subscribe(data=>{
      //this.commentaire=data
      //console.log(this.commentaire)})

  }

}
