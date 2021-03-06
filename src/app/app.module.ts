import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { DemoComponent } from "./demo/demo.component";
import { BandeauComponentComponent } from "./bandeau-component/bandeau-component.component";
import { AvisComponentComponent } from "./avis-component/avis-component.component";
import { CollegueComponentComponent } from "./collegue-component/collegue-component.component";
import { ListeColleguesComponentComponent } from "./liste-collegues-component/liste-collegues-component.component";
import { HistoriqueVotesComponent } from "./historique-votes/historique-votes.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { HttpClientModule } from "@angular/common/http";
import { CollegueService } from "./services/collegue.service";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailCollegueComponent } from "./detail-collegue/detail-collegue.component";
import { ScorePipe } from "./pipes/score.pipe";
import { FiltrerColleguePipe } from "./pipes/filtrer-collegue.pipe";
import { AjouterUnCollegueComponent } from "./ajouter-un-collegue/ajouter-un-collegue.component";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },

  { path: "collegue/:pseudo", component: DetailCollegueComponent },

  { path: "Ajouter", component: AjouterUnCollegueComponent },

  { path: "", redirectTo: "/accueil", pathMatch: "full" },

  { path: "**", redirectTo: "/accueil", pathMatch: "full" } // page non trouvée
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    DetailCollegueComponent,
    ScorePipe,
    FiltrerColleguePipe,
    AjouterUnCollegueComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: `reload` }),
    HttpClientModule,
    FormsModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
