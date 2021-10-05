import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from "@angular/common/http";
import { MovieFullInfoComponent } from './movie-full-info/movie-full-info.component';
import { HttpCacheInterceptorModule } from "@ngneat/cashew";
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    MoviesComponent,
    MovieFullInfoComponent,
    FilterPipe
  ],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      HttpClientModule,
      HttpCacheInterceptorModule.forRoot(),
      BrowserAnimationsModule,
      FormsModule,
      FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
