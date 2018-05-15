import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Collegue, Avis, Vote } from "../model";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-detail-collegue",
  templateUrl: "./detail-collegue.component.html",
  styleUrls: ["./detail-collegue.component.scss"]
})
export class DetailCollegueComponent implements OnInit {
  collegue: Collegue = new Collegue("Cowboy", "gil", "jean");
  aimable: boolean;
  detestable: boolean;
  messageAvis = "";

  constructor(
    private _route: ActivatedRoute,
    private cService: CollegueService
  ) {}

  ngOnInit() {
    this.cService
      .colleguesParPseudo(this._route.snapshot.paramMap.get("pseudo"))
      .then((col: Collegue) => {
        this.collegue = col;
      })
      .catch(err => console.log(err));
  }

  traiter(unAvis: Avis) {
    this.cService
      .donnerUnAvis(this.collegue, unAvis)
      .then(nCol => {
        this.collegue = nCol;
        this.messageAvis = "Vous avez voté " + unAvis;
        this.aimable = this.collegue.score >= 1000;
        this.detestable = this.collegue.score <= -1000;
      })
      .catch(err => console.log(err));
  }
}
