export enum Avis {
  AIMER = "J'aime",
  DETESTER = "Je deteste"
}

export class Collegue {
  photo: String;
  pseudo: String;
  score: number;

  constructor(pseudo) {
    this.photo = "https://wamiz.com/chiens/berger-blanc-suisse-25";
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
