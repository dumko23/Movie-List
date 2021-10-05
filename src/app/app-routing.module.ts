import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MovieFullInfoComponent } from "./movie-full-info/movie-full-info.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'full-info/:id', component: MovieFullInfoComponent },
  { path: 'movies/:specified', component: MoviesComponent ,
    runGuardsAndResolvers: 'paramsChange',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
