import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  // Observable indicating user authentication status
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // ...
    this.isAuthenticated$ = this.currentUser$.pipe(map(user => !!user));
  }
  
  // User Registration
  register(email: string, password: string): void {
    // In a real app, you would typically make an API request to register the user
    // For now, let's just simulate it by creating a user object
    const newUser: User = {
      email,
      password,
      cart: { products: [], totalPrice: 0 }
      // orderHistory: []
    };
    this.currentUserSubject.next(newUser);
  }

  login(email: string, password: string): boolean {
    // Simulated login logic
    const user = this.findUserByEmailAndPassword(email, password);

    if (user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  private findUserByEmailAndPassword(email: string, password: string): User | null {

    const hardcodedUsers: User[] = [
      {
        email: 'user@example.com',
        password: 'password',
        cart: { products: [], totalPrice: 0 }
        // orderHistory: []
      }
    ];
    return hardcodedUsers.find(user => user.email === email && user.password === password) || null;
  }
}