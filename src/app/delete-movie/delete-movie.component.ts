import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieServiceService } from '../service/movie-service.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private service: MovieServiceService, private route: ActivatedRoute) { }

  movieId: number
  
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.movieId = parseInt(params.get('id'));
       
      });
    console.log(this.movieId)
    this.service.deleteMovie(this.movieId, console.log);
  }

}
