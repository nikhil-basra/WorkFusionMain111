import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('authToken'); // Clear the auth token from local storage
    this.router.navigate(['/outer-home']); // Redirect to the login page
  }
}
