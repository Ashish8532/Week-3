import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email = '';
  password = '';
  isAuthenticated$: Observable<boolean>; 

  constructor(private userService: UserService, private router: Router) {
    this.isAuthenticated$ = this.userService.isAuthenticated$;
  }

  register(): void {
    this.userService.register(this.email, this.password);

    this.router.navigate(['/login']);
  }
}
