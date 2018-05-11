import { Component, OnInit } from "@angular/core";
import { Collegue } from "../model";

@Component({
  selector: "app-liste-collegues-component",
  templateUrl: "./liste-collegues-component.component.html",
  styleUrls: ["./liste-collegues-component.component.scss"]
})
export class ListeColleguesComponentComponent implements OnInit {
  collegues: Collegue[];

  constructor() {}
  onClick() {}

  ngOnInit() {
    this.collegues = [
      new Collegue("Jean"),
      new Collegue("Paul"),

      new Collegue("Romain"),

      new Collegue("Alexandre"),

      new Collegue("Alexis"),

      new Collegue("Momo")
    ];
  }
}
