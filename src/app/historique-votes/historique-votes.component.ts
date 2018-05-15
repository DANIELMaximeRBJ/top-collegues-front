import { Component, OnInit } from "@angular/core";
import { Collegue } from "../model";
import { Vote } from "../model";
import { Avis } from "../model";

@Component({
  selector: "app-historique-votes",
  templateUrl: "./historique-votes.component.html",
  styleUrls: ["./historique-votes.component.scss"]
})
export class HistoriqueVotesComponent implements OnInit {
  listevotes: Vote[];
  constructor() {}
  onClick($event) {
    let suppr = this.listevotes.lastIndexOf($event);
    this.listevotes.splice(suppr, 1);
  }

  ngOnInit() {
    this.listevotes = [
      new Vote(new Collegue("Cowboy", "gil", "jean"), Avis.AIMER),
      new Vote(new Collegue("pape", "JEAN", "paul"), Avis.DETESTER),
      new Vote(new Collegue("Cowboy", "gil", "jean"), Avis.AIMER),
      new Vote(new Collegue("Cowboy", "gil", "jean"), Avis.DETESTER)
    ];
  }
}
