import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetMovieService } from "../shared/services/get-movie.service";
import { GetLinksService } from "../shared/services/get-links.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-full-info',
  templateUrl: './movie-full-info.component.html',
  styleUrls: ['./movie-full-info.component.scss']
})
export class MovieFullInfoComponent implements OnInit, OnDestroy {
  movie: any = [];
  link: any = [];
  movieStream$: any;
  linkStream$: any;

  constructor(private route: ActivatedRoute,
              private fullMovie: GetMovieService,
              private location: Location,
              private links: GetLinksService) {
  }

  ngOnInit(): void {
    this.getMovieInfoOnClick();
  }

  ngOnDestroy(): void {
    this.movieStream$.unsubscribe();
    this.linkStream$.unsubscribe();
  }

  getMovieInfoOnClick(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.movieStream$ = this.fullMovie.getMovie(id)
      .subscribe(movie => {
        this.movie = JSON.parse(JSON.stringify(movie))
      });
    this.linkStream$ = this.links.getLink(id)
      .subscribe(link => {
        this.link = JSON.parse(JSON.stringify(link))
      });
  }

  goBack(): void {
    this.location.back();
  }
}
