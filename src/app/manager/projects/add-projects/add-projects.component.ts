import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../../services/manager.service';
import { Router } from '@angular/router';
import { ClientsProjectRequestsModel } from '../../../models/clientProjectRequests.model';  // Make sure to import the correct model

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrl: './add-projects.component.css'
})
export class AddProjectsComponent {
  addProjectForm!: FormGroup;
  selectedFile: File | null = null;
  clientId: number | null = null;  // Declare a variable to store clientId
  teamMembers: { id: number, name: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchTeamMembers();
    this.getProjectData();  // Fetch project data when the component initializes

    const managerId = localStorage.getItem('EntityId');
    if (managerId) {
      // Autofill managerId in the form
      this.addProjectForm.patchValue({ managerId });
    }
  }

  initializeForm(): void {
    this.addProjectForm = this.fb.group({
      clientId: ['', Validators.required],  // Client ID will be prefilled
      managerId: ['', Validators.required],  // Manager ID will be prefilled
      projectName: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      deadline: ['', Validators.required],
      actualCost: ['', Validators.required],
      teamMembers: ['', Validators.required],
      milestones: ['', Validators.required],
      isActive: ['', Validators.required],  // Assuming this is a boolean
      attachments: [null]  // Will store file data (Base64)
    });
  }
  fetchTeamMembers(): void {
    const managerId = localStorage.getItem('EntityId');
    if (managerId) {
      this.managerService.getEmployeesByManagerId(Number(managerId)).subscribe(
        (response: any[]) => {
          this.teamMembers = response.map((employee: any) => ({
            id: employee.id,
            name: `${employee.firstName} ${employee.lastName}`
          }));
        },
        (error) => {
          console.error('Error fetching team members:', error);
        }
      );
    }
  }
  // Fetch project data (including clientId) from the backend and prefill the form
  getProjectData(): void {
    const managerId = localStorage.getItem('EntityId');
    if (managerId) {
      this.managerService.getProjectRequestsManager(Number(managerId)).subscribe(
        (response: ClientsProjectRequestsModel[]) => {
          if (response && response.length > 0) {
            const project = response[0];  // Assuming you want to prefill with the first project
  
            // Prefill the form fields with the fetched data
            this.addProjectForm.patchValue({
              clientId: project.clientID,  // Prefill clientId
              projectName: project.projectTitle,
              description: project.projectDescription,
              budget: project.budget,
              status: project.isActive ,
              deadline: project.deadline,
               // Assuming budget as actual cost, modify as needed
              isActive: project.isActive,
              attachments: project.attachments  // If you need to handle file attachments
            });
  
            this.clientId = project.clientID;  // Store clientId for future use if needed
          }
        },
        (error) => {
          console.error('Error fetching project data:', error);
        }
      );
    }
  }
  

  // Method to convert selected file to Base64
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      this.selectedFile = input.files[0];
      this.convertFileToBase64(this.selectedFile);
    }
  }

  goBack() {
    this.router.navigate(['/manager/projects-requests']);
  }

  // Convert the file to Base64
  convertFileToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      this.addProjectForm.patchValue({
        attachments: base64String  // Store the Base64 string in the form
      });
      console.log('File converted to Base64:', base64String);
    };
    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }

  // Handle form submission
  onSubmit(): void {
    if (this.addProjectForm.invalid) {
      console.log("Form is invalid");
      return; // Stop execution if form is invalid
    }
  
    // Prepare the project object from form values
    const project = this.addProjectForm.value;
  
    // Call the createProject method of the service with project data and Base64 file
    this.managerService.createProject(project).subscribe(
      (response: any) => {
        console.log('Project created successfully!', response);
        alert('Project created successfully!');
        
      // Reset the form after successful submission
      this.addProjectForm.reset();
       
       },
      (error: any) => {
        console.error('Error creating project:', error);
        // Optionally, show an error message
      }
    );
  }
}  