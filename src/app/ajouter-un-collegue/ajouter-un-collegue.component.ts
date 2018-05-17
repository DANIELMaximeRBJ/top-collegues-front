import { Component, OnInit } from "@angular/core";

import { CollegueService } from "../services/collegue.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-ajouter-un-collegue",
  styleUrls: ["./ajouter-un-collegue.component.scss"],
  templateUrl: `./ajouter-un-collegue.component.html`
})
export class AjouterUnCollegueComponent implements OnInit {
  collegueForm: any = {};
  error: string = " ";

  constructor(private cService: CollegueService, private router: Router) {}

  submit() {
    this.cService
      .CreernouveauCollegue(this.collegueForm)
      .subscribe((data: any) => {
        this.router.navigate(["/Accueil"]);
      }, err => (this.error = err.error));
  }
  ngOnInit() {}
}
