import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login(): void {
    const success = this.userService.login(this.email, this.password);
    if (success) {
      // Navigate to a protected page (if needed) upon successful login
      this.router.navigate(['']);
    } else {
      // Display error message if login attempt fails
      this.errorMessage = 'Invalid email or password';
    }
  }
}
