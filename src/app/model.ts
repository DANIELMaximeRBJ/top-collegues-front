export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  photo: String;
  pseudo: String;
  score: number;

  constructor(pseudo) {
    this.photo =
      "https://static.wamiz.fr/images/animaux/chiens/large/berger-blanc-suisse.jpg";
    this.pseudo = pseudo;
    this.score = 0;
  }
}

export class Vote {
  collegue: Collegue;
  avis: Avis;
  constructor(collegue: Collegue, avis: Avis) {
    this.collegue = collegue;
    this.avis = avis;
  }
}
