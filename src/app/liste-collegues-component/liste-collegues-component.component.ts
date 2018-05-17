import { Component, OnInit } from "@angular/core";
import { Collegue, Avis } from "../model";
import { CollegueService } from "../services/collegue.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-liste-collegues-component",
  templateUrl: "./liste-collegues-component.component.html",
  styleUrls: ["./liste-collegues-component.component.scss"]
})
export class ListeColleguesComponentComponent implements OnInit {
  collegues: Collegue[];
  recherchePseudo: string;
  constructor(private CService: CollegueService, private router: Router) {
    this.recherchePseudo = "";
  }
  onClick() {}
  onClickNewCollegue() {
    this.router.navigate(["/Ajouter"]);
  }
  ngOnInit() {
    this.CService.listerCollegues()
      .then(cols => (this.collegues = cols))
      .catch(console.log);
  }
}
