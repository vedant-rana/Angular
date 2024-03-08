import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'hinv-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
constructor(private auth:AuthService ){}

  
  signup(form: NgForm){
    console.log(form.value);
    this.auth.registerUser(form.value.email, form.value.password);
  }

  reset(form:NgForm){
    form.reset();
  }
}
