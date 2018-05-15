export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  photo: String;
  pseudo: String;
  score: number;
  email: string;
  adresse: string;
  nom: string;
  prenom: string;

  constructor(pseudo, nom, prenom) {
    this.photo =
      "https://static.wamiz.fr/images/animaux/chiens/large/berger-blanc-suisse.jpg";
    this.pseudo = pseudo;
    this.score = 0;
    this.nom = nom;
    this.prenom = prenom;
    this.email = this.nom + "." + this.prenom + "@hotmail.fr";
    this.adresse = "pas d'addresse";
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
