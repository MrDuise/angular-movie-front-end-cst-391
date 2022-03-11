import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  
  ngOnInit(): void {
    
  }
  selectedMovie: Movie = null;

  public onSelectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

}
