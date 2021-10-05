import { Component, OnInit } from '@angular/core';
import { RequestTopService } from "../shared/services/request-top.service";
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  movies: any = [];
  private top250Url = environment.apiUrl250;

  constructor(public movieRequest: RequestTopService) {
  }

  ngOnInit(): void {
    this.getMovieList250();
  }

  getMovieList250(): void {
    this.movieRequest.getMovieList(this.top250Url)
      .subscribe(json => {
        this.movies = JSON.parse(JSON.stringify(json.items))
      })
  }
}
