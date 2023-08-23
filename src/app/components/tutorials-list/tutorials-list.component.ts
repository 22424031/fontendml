import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent {
  movies?: Movie[];
  //currentMovie: Movie = {};
  currentIndex = -1;
  title = '';
  userId?: number;
  constructor(private tutorialService: TutorialService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    var userStore = localStorage.getItem("userId");
    this.userId = 1;
    if(userStore != null){
      this.userId = Number.parseInt(userStore);
    }
    this.movieService.getByUser(this.userId).subscribe({
      next: (data) => {
        this.movies = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

   refreshList(): void {
  //   this.retrieveTutorials();
  //   this.currentMovie = {};
  //   this.currentIndex = -1;
   }

   setActiveTutorial(movie: Movie, index: number): void {
  //   this.currentMovie = tutorial;
  //   this.currentIndex = index;
   }

   removeAllTutorials(): void {
  //   this.tutorialService.deleteAll().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.refreshList();
  //     },
  //     error: (e) => console.error(e)
  //   });
   }

  searchTitle(): void {
    // this.currentMovie = {};
    // this.currentIndex = -1;
    let postData = {userId : 1,keyWord : this.title};
    this.movieService.getByUser(postData).subscribe({
      next: (data) => {
        this.movies = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
