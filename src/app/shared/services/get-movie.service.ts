import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private movieUrl = environment.apiMovie;

  constructor(private http: HttpClient) { }

  getMovie(id: string): Observable<any>{
    return this.http.get(`${this.movieUrl}/${environment.apiKey}/${id}`, this.httpOptions)
  }
}
