import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.css'] // Fixed the typo 'styleUrl'
})
export class ManagerHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Clear all items from local storage
    localStorage.clear();

    // Redirect to the outer home or login page
    this.router.navigate(['/outer-home']);
  }
}
