import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-reset-password',
  templateUrl: './employee-reset-password.component.html',
  styleUrl: './employee-reset-password.component.css'
})
export class EmployeeResetPasswordComponent {
  userId!: number; // Dynamically fetched from local storage
  username!: string; // Dynamically fetched from local storage
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  isLoading: boolean = false;
  message: string = '';
  isError: boolean = false;

  constructor(private location: Location, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // Fetch userId and username from local storage
    const storedUserId = localStorage.getItem('UserId');
    const storedUsername = localStorage.getItem('UserName');

    if (storedUserId && storedUsername) {
      this.userId = +storedUserId; // Convert to number
      this.username = storedUsername;
    } else {
      this.isError = true;
      this.message = 'Failed to retrieve user information. Please log in again.';
    }
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.isError = true;
      this.message = 'New password and confirm password do not match.';
      return;
    }

    this.isLoading = true;
    this.employeeService
      .resetPassword(this.userId, this.username, this.currentPassword, this.newPassword)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.isError = false;
          this.message = 'Password reset successfully!';
          this.clearFields();
        },
        (error) => {
          this.isLoading = false;
          this.isError = true;
          this.message = 'Failed to reset password. Please try again.';
        }
      );
  }

  clearFields() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  goBack() {
    this.location.back(); // Navigate to the previous page
  }
}
