import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../model";

import { CollegueService } from "../services/collegue.service";

import { Avis } from "../model";

@Component({
  selector: "app-collegue-component",
  templateUrl: "./collegue-component.component.html",
  styleUrls: ["./collegue-component.component.scss"]
})
export class CollegueComponentComponent implements OnInit {
  constructor(private CService: CollegueService) {}
  @Input() collegue: Collegue;
  aimable: boolean;
  detestable: boolean;

  messageAvis = "";
  traiter(unAvis: Avis) {
    this.CService.donnerUnAvis(this.collegue, unAvis)
      .then(cols => {
        this.collegue = cols;
        this.messageAvis = "Vous avez voté " + unAvis;
        this.aimable = this.collegue.score >= 1000;
        this.detestable = this.collegue.score <= -1000;
      })
      .catch(err => console.log(err));
  }
  ngOnInit() {
    this.aimable = this.collegue.score >= 1000;
    this.detestable = this.collegue.score <= -1000;
  }
}
