import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DboperationsService } from '../../services/dboperations.service';
import { snippet } from '../../models/Snippet';

@Component({
  selector: 'hinv-codesbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './codesbin.component.html',
  styleUrl: './codesbin.component.scss'
})
export class CodesbinComponent {

  constructor(private dbService: DboperationsService){}

  title = new FormControl("", [Validators.required]);
  code = new FormControl("", [Validators.required]);

  codesForm = new FormGroup({
    title:this.title,
    code: this.code
  })

  create(){
    this.dbService.createSnippet(this.codesForm.value as snippet);
  }

  reset(){
    this.codesForm.reset();
  }
}

