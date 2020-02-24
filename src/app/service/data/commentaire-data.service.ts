import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commentaire} from '../../Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireDataService {

  constructor(private http: HttpClient) {
  }

  getCommentaire(id) {
    return this.http.get(`http://localhost:8080/commentaires/${id}`)
  }

  getAllComments(){
    return this.http.get('http://localhost:8080/commentaires')
  }

  saveComment(comment:Commentaire){
    return this.http.post('http://localhost:8080/commentaires',comment)
  }
}
