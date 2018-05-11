import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Avis } from "../model";
@Component({
  selector: "app-avis-component",
  templateUrl: "./avis-component.component.html",
  styleUrls: ["./avis-component.component.scss"]
})
export class AvisComponentComponent implements OnInit {
  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() aimable: boolean;
  @Input() detestable: boolean;
  constructor() {}
  onClickAimer() {
    this.avis.emit(Avis.AIMER);
  }
  onClickDetester() {
    this.avis.emit(Avis.DETESTER);
  }
  ngOnInit() {}
}
