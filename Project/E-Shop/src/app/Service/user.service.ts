import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_KEY = 'user';
  private users: User[] = [];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  // Observable indicating user authentication status
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() {
    const storedUsers = localStorage.getItem(this.USER_KEY);
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = []; // Initialize as an empty array if no users are stored yet
    }
  }
  
  // User Registration
  register(user: User): void {
    this.users.push(user); // Add the new user to the array
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.users));
  }

  login(email: string, password: string): boolean {
    if (this.users.length === 0) {
      return false; // No users stored yet
    }

    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return true;
    }
    return false;
  }

  logout(): void {
    return localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  getUser(): User | null {
    const userData = localStorage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }
}