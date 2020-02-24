export class Commentaire {
  public id:number;
  public texte:String;
  public dateCommentaire:Date;


  constructor(id: number, texte: String, dateCommentaire: Date) {
    this.id = id;
    this.texte = texte;
    this.dateCommentaire = dateCommentaire;
  }
}
