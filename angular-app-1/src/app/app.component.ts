import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp1Component } from './Components/cmp-1/cmp-1.component';
import { JokeComponent } from './Components/joke/joke.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet,Cmp1Component, JokeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(){
    initializeApp(firebaseConfig);
  }
}
