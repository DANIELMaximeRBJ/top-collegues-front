import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { error } from "selenium-webdriver";
import { Collegue, Avis, Vote } from "../model";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, ReplaySubject } from "rxjs";
import { tap } from "rxjs/operators";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService {
  private sub = new ReplaySubject<Vote>(3);

  get subjectAvisCollegueObs() {
    return this.sub.asObservable();
  }

  constructor(private _http: HttpClient) {}

  listerCollegues(): Observable<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/Collegues`);
    // récupérer la liste des collègues côté serveur
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http
      .patch<Collegue>(`${URL_BACKEND}/Collegues/${unCollegue.pseudo}`, {
        action: avis.valueOf()
      })
      .pipe(
        tap(col => {
          // émission événement nouvel avis
          this.sub.next(new Vote(col, avis));
        })
      );
  }

  colleguesParPseudo(pseudo: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/Collegues/${pseudo}`);
  }

  CreernouveauCollegue(collegueForm: any): Observable<Collegue> {
    return this._http.post<Collegue>(
      `${URL_BACKEND}/Collegues/Ajouter`,
      collegueForm
    );
  }
}
