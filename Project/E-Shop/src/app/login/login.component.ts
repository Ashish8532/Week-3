import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  isAuthenticated$: Observable<boolean>; 

  constructor(private userService: UserService, private router: Router) {
    this.isAuthenticated$ = this.userService.isAuthenticated$;
  }

  login(): void {
    const success = this.userService.login(this.email, this.password);

    if (success) {
      // Navigate to a protected page (if needed) upon successful login
      this.router.navigate(['/protected-page']);
    } else {
      // Display error message if login attempt fails
      this.errorMessage = 'Invalid email or password';
    }
  }
}
