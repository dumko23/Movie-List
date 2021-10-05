import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetLinksService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private externalLink = environment.apiLinks;

  constructor(private http: HttpClient) { }

  getLink(id: string): Observable<any>{
    return this.http.get(`${this.externalLink}/${environment.apiKey}/${id}`, this.httpOptions)
  }
}
