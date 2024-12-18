import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import { TaskModel } from '../../../models/task.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-all-tasks',
  templateUrl: './list-all-tasks.component.html',
  styleUrls: ['./list-all-tasks.component.css']
})
export class ListAllTasksComponent implements OnInit {
  tasks: TaskModel[] = []; // Array to hold the list of tasks
  isLoading: boolean = false; // Loading state for spinner
  errorMessage: string = ''; // Error handling

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  // Method to fetch tasks by manager ID
  fetchTasks(): void {
    const managerId = Number(localStorage.getItem('EntityId')); // Retrieve managerId from local storage
    if (!managerId) {
      this.errorMessage = 'Manager ID not found in local storage.';
      return;
    }

    this.isLoading = true; // Start loading spinner
    this.managerService.getTasksByManagerId(managerId).subscribe({
      next: (data: TaskModel[]) => {
        this.tasks = data; // Store the fetched tasks
        this.isLoading = false; // Stop loading spinner
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
        this.errorMessage = 'Failed to load tasks. Please try again later.';
        this.isLoading = false; // Stop loading spinner
      }
    });
  }

// Method to trigger SweetAlert before task deletion
  confirmDelete(taskId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteTask(taskId); // Proceed to delete task if confirmed
      }
    });
  }

  // Method to delete task
  deleteTask(taskId: number): void {
    this.managerService.deleteTask(taskId).subscribe({
      next: () => {
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success'); // Show success message
        this.fetchTasks(); // Refresh the task list
      },
      error: (error) => {
        console.error('Error deleting task:', error);
        Swal.fire('Error!', 'There was an issue deleting the task. Please try again later.', 'error');
      }
    });
  }
}
