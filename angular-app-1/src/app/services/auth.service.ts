import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId?: string;

  constructor(private router: Router) {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userId = user.uid
        console.log(user.email);
      } else {
        this.userId = undefined;
        console.log("user logged out");

      }
    })
  }

  isAuthenticated() {
    return this.userId ? true : false;
  }

  getUserId(){
    return this.userId;
  }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      this.router.navigate(['/']);
    }).catch((error) => {
      console.log(error.message);
      alert("Something went wrong")
    })
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      this.router.navigate(['/']);

    }).catch((err) => {
      console.log(err);
      alert("Something went wrong")
    })
  }

  logOut() {
    const auth = getAuth();
    signOut(auth).catch((err) => {
      console.log(err);
      alert("LogOut failed");
    })
  }
}
