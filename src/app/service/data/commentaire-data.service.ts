import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireDataService {

  constructor(private http: HttpClient) {
  }

  getCommentaire(id) {
    return this.http.get(`http://localhost:8080/commentaires/${id}`)
  }

  getAllCommentaires(){
    return this.http.get('http://localhost:8080/commentaires')
  }
}
