import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DboperationsService } from '../../services/dboperations.service';

@Component({
  selector: 'hinv-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.scss'
})
export class ViewSnippetComponent {
  
  snippet:any = {}

  constructor(private route:ActivatedRoute, private dbService:DboperationsService){}

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetById(docId!).then((data)=>{
      this.snippet =  data;
    })
  }
}
