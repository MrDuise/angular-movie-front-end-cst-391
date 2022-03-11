import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music Collection';
  message = 'Michael Duisenberg';
  version = '1.0';

  constructor(private router: Router) { }
  displayVersion() {
    alert(`${this.version}`);
  }
  public displayMovieList() {
    console.log("In app component");
    this.router.navigate(['list-movies'], {queryParams: {data: new Date()}})
    
  }


  
  
 
}
