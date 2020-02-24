import { Component, OnInit } from '@angular/core';
import {CommentaireDataService} from '../service/data/commentaire-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Commentaire} from '../Commentaire';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment : Commentaire ;
  comments : Commentaire[] ;
  private commentaires: any;

  constructor(private commentDataService:CommentaireDataService,private activerouter:ActivatedRoute,
              private router: Router) {
    this.comment =new Commentaire(null,'',null);
    this.comments =[] ;

  }

  ngOnInit() {
    this.commentDataService.getAllComments().subscribe(response=>{
      this.commentaires=response
      console.log(response)
    })
  }

  ajoutComments() {
    this.comment.dateCommentaire=new Date();
    this.commentDataService.saveComment(this.comment).subscribe(data => {
       console.log(data);
       this.comment.texte=''
    });



    }


}
