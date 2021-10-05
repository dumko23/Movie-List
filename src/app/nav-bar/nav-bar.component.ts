import { Component, OnInit } from '@angular/core';
import { faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { environment } from "../../environments/environment";
import { MovieSearchService } from "../shared/services/movie-search.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  top250 = environment.apiUrl250;
  top200 = environment.apiUrl200;
  value!: string;
  faSearch = faSearch;
  faClose = faWindowClose;
  searchResult: any = [];
  results$: any;
  searchTrigger!: boolean;

  constructor(private search: MovieSearchService) {
  }

  ngOnInit(): void {
    this.value = '';
    this.searchTrigger = false;
  }

  searchMovie(value: string): void {
    if (value) {
      this.results$ = this.search.getSearch(value)
        .subscribe(searchResult => {
          this.searchResult = JSON.parse(JSON.stringify(searchResult.results))
        });
      this.searchTrigger = true;
    }
  }

  clearSearchResult(): void {
    this.value = '';
    this.searchResult = [];
    this.results$.unsubscribe();
    this.searchTrigger = false;
  }
}
