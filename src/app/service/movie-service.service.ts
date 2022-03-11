import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class MovieServiceService {
  movies: Movie[] = [];

  hostName = 'http://localhost:5000/api/v1/movies';
  constructor(private http: HttpClient) {}

  public getMovies(callback: any) {
    this.http.get<Movie[]>(this.hostName).subscribe((data: any) => {
      let movies: Movie[] = [];
      for (let x = 0; x < data.length; ++x) {
        movies.push(
          new Movie(
            data[x]['id'],
            data[x]['title'],
            data[x]['genre'],
            data[x]['price'],
            data[x]['quantity']
          )
        );
      }
      callback(movies);
    });
  }

  public getMovie(id: number, callback: any) {
    this.http.get<Movie>(this.hostName + '/' + id).subscribe((data) => {
      let movie: Movie = new Movie(
        data['id'],
        data['title'],
        data['genre'],
        data['price'],
        data['quantity']
      );
      callback(movie);
    });
  }
 

  public updateMovie(movie: Movie, callback: any) {
    this.http.patch<Movie>(this.hostName , movie).subscribe((data) => {
      callback(data);
    });
  }

 
  public deleteMovie(id: number, callback: any) {
    this.http
      .delete(this.hostName + "/" +id)
      .subscribe((data) => {
        callback(data);
      });
  }

  
  public createMovie(movie: Movie, callback: any) {
    this.http
      .post<Movie>(this.hostName, movie)
      .subscribe((data) => {
        callback(data);
      });
  }

  
}
