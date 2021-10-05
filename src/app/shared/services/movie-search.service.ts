import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private searchLink = environment.apiSearch;

  constructor(private http: HttpClient) { }

  getSearch(value: string): Observable<any>{
    return this.http.get(`${this.searchLink}/${environment.apiKey}/${value}`, this.httpOptions)
  }
}
