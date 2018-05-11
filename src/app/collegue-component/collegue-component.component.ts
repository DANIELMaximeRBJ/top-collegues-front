import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../model";

import { Avis } from "../model";

@Component({
  selector: "app-collegue-component",
  templateUrl: "./collegue-component.component.html",
  styleUrls: ["./collegue-component.component.scss"]
})
export class CollegueComponentComponent implements OnInit {
  constructor() {}
  @Input() collegue: Collegue;

  messageAvis = "";
  traiter(unAvis: Avis) {
    if (unAvis == Avis.AIMER) {
      this.collegue.score = this.collegue.score + 50;
    }
    if (unAvis == Avis.DETESTER) {
      this.collegue.score = this.collegue.score - 50;
    }
    this.messageAvis = "Vous avez voté " + unAvis;
  }
  ngOnInit() {}
}
