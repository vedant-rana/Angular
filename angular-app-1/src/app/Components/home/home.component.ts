import { Component } from '@angular/core';
import { DboperationsService } from '../../services/dboperations.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hinv-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private dbService :DboperationsService){}

allSnippets:any[] = []

ngOnInit(){
  this.dbService.getAllSnippet().then((data:any)=>{
    // console.log(data);
    this.allSnippets = data;
  })
  
}
}
