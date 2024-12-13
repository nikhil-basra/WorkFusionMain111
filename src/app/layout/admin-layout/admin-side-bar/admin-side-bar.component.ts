import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {
  employeeMenuVisible: boolean = false;
  managerMenuVisible: boolean = false;
  clientMenuVisible: boolean = false;

  constructor(private router: Router) {}

  toggleEmployeeMenu(event: Event): void {
    event.preventDefault();
    this.employeeMenuVisible = !this.employeeMenuVisible;
    this.closeOtherMenus('employee');
  }

  toggleManagerMenu(event: Event): void {
    event.preventDefault();
    this.managerMenuVisible = !this.managerMenuVisible;
    this.closeOtherMenus('manager');
  }

  toggleClientMenu(event: Event): void {
    event.preventDefault();
    this.clientMenuVisible = !this.clientMenuVisible;
    this.closeOtherMenus('client');
  }

  closeOtherMenus(openMenu: string): void {
    if (openMenu !== 'employee') this.employeeMenuVisible = false;
    if (openMenu !== 'manager') this.managerMenuVisible = false;
    if (openMenu !== 'client') this.clientMenuVisible = false;
  }

  navigateAndClose(route: string): void {
    this.router.navigate([route]);
    this.employeeMenuVisible = false;
    this.managerMenuVisible = false;
    this.clientMenuVisible = false;
  }
}
