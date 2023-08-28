import { Component } from '@angular/core';
import { UserService } from './Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Shop';
  isLoggedIn: boolean = false;

  constructor(public userService: UserService, private router: Router) {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout(); 
    this.router.navigate(['/login']); 
  }
}
