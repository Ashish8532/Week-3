import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    id: 1,
    email: '',
    password: '',
    state: false,
    orderHistory: []
  };

  constructor(private userService: UserService, private router: Router) {
  }

  register(): void {
    this.userService.register(this.user);
    this.router.navigate(['/login']);
  }
}
