import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { 

  }

  getJoke(){
    return this.http.get('https://v2.jokeapi.dev/joke/any');
  }
}
