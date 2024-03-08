import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth:AuthService){}

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required, Validators.minLength(6)]);

  loginForm = new FormGroup({
    email:this.email,
    password: this.password
  })

  login(){
    console.log(this.loginForm.value);
    this.auth.loginUser(this.loginForm.value.email! , this.loginForm.value.password!)
  }

  reset(){
    this.loginForm.reset();
  }
}
