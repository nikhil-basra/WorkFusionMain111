import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrl: './update-projects.component.css'
})
export class UpdateProjectsComponent {
  updateProjectForm!: FormGroup; // Reactive Form
  projectId: string | null = null; // To store projectId from route



  constructor(
    private fb: FormBuilder,        // For building reactive form
    private route: ActivatedRoute,  // To get route parameters
    private managerService: ManagerService, // Service for API calls
    private router: Router          // To navigate between routes
  ) {}

  ngOnInit(): void {
    // Initialize form with default values
    this.updateProjectForm = this.fb.group({
      projectId: [{ value: '', }, Validators.required],
      clientId: [{ value: '', }, Validators.required],
      managerId: [{ value: '',  }, Validators.required],
      projectName: ['', Validators.required],
      description: ['',],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      clientFirstName:['',Validators.required],
      clientLastName:['',Validators.required],
      budget: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      deadline: ['', Validators.required],
      actualCost: ['', Validators.required],
      teamMembers: ['', Validators.required],
      milestones: ['', Validators.required],
      attachments: [null], // Will store file data if any
      isActive: [true, Validators.required], // Assuming this is a boolean
    });

    // Get the projectId from route params and fetch the project data
    this.projectId = this.route.snapshot.paramMap.get('id'); // Assuming route is like '/projects/update/:id'
    if (this.projectId) {
      this.fetchProjectData(+this.projectId); // Convert projectId to number
    }
  }

  // Fetch project data using service and prefill the form
  fetchProjectData(projectId: number): void {
    this.managerService.getProjectById(projectId).subscribe(
      (data: any) => {
        if (data && typeof data === 'object') {
          console.log('Fetched Project Data:', data);
          this.updateProjectForm.patchValue({
            projectId: data.projectId ?? '',
            clientId: data.clientId ?? '',
            managerId: data.managerId ?? '',
            createdAt: data.createdAt ?? '',
            updatedAt: data.updatedAt ?? '',
            projectName: data.projectName ?? '',
            description: data.description ?? '',
            startDate: data.startDate ?? '',
            endDate: data.endDate ?? '',
            budget: data.budget ?? '',
            status: data.status ?? '',
            deadline: data.deadline ?? '',
            clientFirstName: data.clientFirstName ??'',
            clientLastName:data.clientLastName ??'',
            actualCost: data.actualCost ?? '',
            teamMembers: data.teamMembers ?? '',
            milestones: data.milestones ?? '',
            attachments: data.attachments ?? '', // Assuming attachments could be a string or file data
            isActive: data.isActive ?? true,
          });
        } else {
          console.error('Unexpected response structure:', data);
        }
      },
      (error) => {
        console.error('Error fetching project data:', error);
      }
    );
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create FileReader instance
  
      // Convert the file to a Base64 string
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64File = reader.result as string; // Get the Base64 string
  
        // Assign the Base64 string directly to the form control
        this.updateProjectForm.patchValue({ attachments: base64File });
        this.updateProjectForm.get('attachments')?.updateValueAndValidity(); // Trigger validation
  
        console.log(base64File); // Log Base64 string for debugging (optional)
      };
  
      // Handle potential errors
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
    }
  }
  goBack() {
    this.router.navigate(['/manager/list-all-projects']);
  }
 
  
  // Handle form submission to update project data
  onSubmit(): void {
    if (this.updateProjectForm.valid && this.projectId) {
      const formValues = this.updateProjectForm.value;

      // Send the form data to backend
      console.log('Project ID:', this.projectId);
      this.managerService.updateProject(+this.projectId, formValues).subscribe(
        (response) => {
          console.log('Project updated successfully:', response);
          alert('Project updated successfully!');
          this.router.navigate(['/projects']); // Navigate back to the project list or desired route
        },
        (error) => {
          console.error('Error updating project:', error);
          alert('Failed to update project. Please try again!');
        }
      );
    } 
  }
}