import { Component, OnInit } from "@angular/core";
import { Collegue } from "../model";
import { Vote } from "../model";
import { Avis } from "../model";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-historique-votes",
  templateUrl: "./historique-votes.component.html",
  styleUrls: ["./historique-votes.component.scss"]
})
export class HistoriqueVotesComponent implements OnInit {
  listevotes: Vote[] = [];
  constructor(private CService: CollegueService) {}
  onClick($event) {
    let suppr = this.listevotes.lastIndexOf($event);
    this.listevotes.splice(suppr, 1);
  }

  ngOnInit() {
    this.CService.subjectAvisCollegueObs.subscribe(vote =>
      this.listevotes.push(vote)
    );
  }
}
