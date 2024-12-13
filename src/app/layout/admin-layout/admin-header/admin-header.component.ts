import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  fullName: string | null = ''; // Store full name from localStorage
  userImage: string | null = null; // Store the user's image URL

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    // Fetch FullName from localStorage
    this.fullName = localStorage.getItem('FullName') || 'Guest User';

    // Fetch UserId and Role from localStorage
    const userId = parseInt(localStorage.getItem('UserId') || '0', 10);
    const roleId = parseInt(localStorage.getItem('role') || '0', 10);

    // Fetch and decode the user's image
    if (userId && roleId) {
      this.adminService.getImageByUserIdAndRoleId(userId, roleId).subscribe(
        (response) => {
          this.userImage = `data:image/png;base64,${response.base64Image}`;
        },
        (error) => {
          console.error('Error fetching user image:', error);
        }
      );
    }
  }

  logout(): void {
    localStorage.clear(); // Clear the auth token from local storage
    this.router.navigate(['/outer-home']); // Redirect to the login page
  }

  openprofile(): void {
    this.router.navigate(['admin/admin-profile']); // Navigate to the admin profile page
  }
}
