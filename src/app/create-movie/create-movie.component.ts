import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Movie } from '../models/Movie';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  constructor(private service: MovieServiceService) {}

  selectedMovie: Movie;

  //new Movie title
  title: string = '';
  genre: string;
  price: number;
  quantity: number;

  //new Movie that is going to be created
  newMovie: Movie;

  ngOnInit() {}

  onSubmit() {
    this.newMovie = new Movie(
      0,
      this.title,
      this.genre,
      this.price,
      this.quantity
    );

    this.service.createMovie(this.newMovie, (Movie: Movie) => {
      alert(`Movie ${this.newMovie.Title} has been created`);
    });
  }
}
