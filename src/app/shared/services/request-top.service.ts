import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { withCache } from "@ngneat/cashew";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestTopService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    context: withCache()
  };

  constructor(private http: HttpClient) {
  }

  getMovieList(specified: string): Observable<any>  {
    return this.http.get(`https://imdb-api.com/en/API/${specified}/${environment.apiKey}`, this.httpOptions)
      .pipe(
        catchError(RequestTopService.handleError)
      )
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
