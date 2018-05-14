import { Component, OnInit } from "@angular/core";
import { Collegue, Avis } from "../model";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-liste-collegues-component",
  templateUrl: "./liste-collegues-component.component.html",
  styleUrls: ["./liste-collegues-component.component.scss"]
})
export class ListeColleguesComponentComponent implements OnInit {
  //collegues: Collegue[];

  collegues: Collegue[];
  constructor(private CService: CollegueService) {}
  onClick() {}

  ngOnInit() {
    this.CService.listerCollegues()
      .then(cols => (this.collegues = cols))
      .catch(console.log);
  }
}
