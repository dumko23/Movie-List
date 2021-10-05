import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestTopService } from "../shared/services/request-top.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { ViewportScroller } from "@angular/common";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit, OnDestroy {
  movieTop: any = [];
  moviesStream$: any;
  year1?: any;
  year2?: any;
  specified!: string;
  navigationSubscription?: Subscription;
  activeFilter!: string;
  faUp = faArrowAltCircleUp;

  constructor(private route: ActivatedRoute,
              private movieRequest: RequestTopService,
              private router: Router,
              private scroller: ViewportScroller
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.specified = this.route.snapshot.params['specified'];
        this.getTopMovieList(this.specified);
        this.year1 = '';
        this.year2 = '';
      }
    });
  }

  ngOnInit(): void {
    this.year1 = '';
    this.year2 = '';
    this.activeFilter = '';
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getTopMovieList(specified: any): void {
    this.moviesStream$ = this.movieRequest.getMovieList(specified)
      .subscribe(json => {
        this.movieTop = JSON.parse(JSON.stringify(json.items))
      })
  }

  activateFilter(year1: string, year2: string, active: string): void {
    this.year1 = year1;
    this.year2 = year2;
    this.activeFilter = active;
  }

  goTop() {
    this.scroller.scrollToAnchor("top")/*Position([0, 0])*/;
  }
}
