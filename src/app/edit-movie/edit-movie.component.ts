import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  //paramaters that are grapped from the url to find the Movie to edit
  movieId: number
  

  //current values to be displayed as placeholders in the form
  price: number;
  title: string;

  //values that are replacing the current values
  newTitle: string = "";
  newPrice: number;

//value that gets passed to the updateMovie method
  newMovie: Movie;
  
  constructor(private service: MovieServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.movieId = parseInt(params.get('id'));
        
      });
    console.log(this.movieId)
    this.service.getMovie(this.movieId, (movie: Movie) => {
      this.newMovie = movie;
      console.log(this.newMovie);
      this.price = movie.Price;
      this.title = movie.Title;
    });

    
  }

  onSubmit() {
    this.newMovie.Title = this.newTitle;
    this.newMovie.Price = this.newPrice;
    this.service.updateMovie(this.newMovie, (movie: Movie) => {
      console.log(movie);
      alert("Movie has been updated")
    });
  }

}
