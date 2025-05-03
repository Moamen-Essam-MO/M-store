import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) { 
    // Check initial login state from localStorage
    this.loggedIn = !!localStorage.getItem('isLoggedIn');
  }

  login(username: string, password: string): boolean {
    // Replace with actual authentication logic (e.g., API call)
    if (username === 'user' && password === 'password') { 
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Persist login state
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Clear persisted state
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
