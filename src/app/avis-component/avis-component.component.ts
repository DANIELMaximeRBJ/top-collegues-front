import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Avis } from "../model";
@Component({
  selector: "app-avis-component",
  templateUrl: "./avis-component.component.html",
  styleUrls: ["./avis-component.component.scss"]
})
export class AvisComponentComponent implements OnInit {
  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();
  constructor() {}
  onClickAimer() {
    this.avis.emit(Avis.AIMER);
  }
  onClickDetester() {
    this.avis.emit(Avis.DETESTER);
  }
  ngOnInit() {}
}
