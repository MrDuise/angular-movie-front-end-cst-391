import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  selectedMovie: Movie = null;
  movies: Movie[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: MovieServiceService
  ) {}

  public onSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.service.getMovies((movies: Movie[]) => {
        this.movies = movies;
        this.selectedMovie = null;
      });
    });
  }
}
