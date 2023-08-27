import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Shop';
  isAuthenticated$: Observable<boolean>; 

  constructor(private userService: UserService, private router: Router) {
    this.isAuthenticated$ = this.userService.isAuthenticated$;
  }

  logout(): void {
    // Perform logout logic here
    this.userService.logout(); // Simulated logout
    this.router.navigate(['/login']); 
  }
}
