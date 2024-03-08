import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'hinv-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
joke = "Loading";

  constructor(private jokeService: JokeService) { }
  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke(){
    this.jokeService.getJoke().subscribe((data:any) =>{
      this.joke = data.delivery;
      
  })
  }
}
