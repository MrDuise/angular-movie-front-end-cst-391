import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';


const routes: Routes = [
  { path: 'create', component: CreateMovieComponent },
  { path: 'list-movies', component: ListMoviesComponent },
  { path: 'display/:id', component: DisplayMovieComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'delete/:id', component: DeleteMovieComponent },
];
RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
