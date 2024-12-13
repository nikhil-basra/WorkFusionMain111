import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerModel } from '../models/manager.model';
import { ClientsProjectRequestsModel } from '../models/clientProjectRequests.model';
import { ProjectModel } from '../models/projects.model';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiUrl = 'https://localhost:7036/api/Manager'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Fetch image by userId and roleId
  getImageByUserIdAndRoleId(userId: number, roleId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/managerImage/${userId}/${roleId}`,
      { headers: this.getAuthHeaders() }
    );
  }

   //------------------------------ Reset Password ------------------------------//
 resetPassword(userId: number, username: string, currentPassword: string, newPassword: string): Observable<any> {
  const headers = this.getAuthHeaders();
  const params = new HttpParams()
    .set('userId', userId.toString())
    .set('username', username)
    .set('currentPassword', currentPassword)
    .set('newPassword', newPassword);

  // Specify responseType: 'text' to handle plain text responses
  return this.http.post(`${this.apiUrl}/reset-password`, null, {
    headers,
    params,
    responseType: 'text' as 'json' // Casting the type to avoid type issues
  });
  }

   //-------------------manager---------------------//
   // Get a manager by ID
    getManagerById(managerId: number): Observable<ManagerModel> {
      return this.http.get<ManagerModel>(`${this.apiUrl}/managers/${managerId}`, { headers: this.getAuthHeaders() });
    }

    // Update an existing manager
    updateManager(manager: ManagerModel): Observable<any> {
      return this.http.put(`${this.apiUrl}/updateManager`, manager, { headers: this.getAuthHeaders() });
    }


    //----------------------------projects--------------------------//

      // Fetch all projects
  getAllProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(`${this.apiUrl}/projects`,{ headers: this.getAuthHeaders() }); // Assuming projects endpoint
  }

  // Fetch projects assigned to a specific manager by manager ID
  getProjectsForManager(managerId: number): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(`${this.apiUrl}/manager/${managerId}`,{ headers: this.getAuthHeaders() });
  }

  // Update project assigned to a manager
  updateProject(id: number, project: any): Observable<ProjectModel> {
    const url = `${this.apiUrl}/projects/${id}`;  
    return this.http.put<ProjectModel>(url, project,{ headers: this.getAuthHeaders() });
  }

  // Fetch a specific project by its ID
  getProjectById(projectId: number): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`${this.apiUrl}/projects/${projectId}`,{ headers: this.getAuthHeaders() });
  }

  // Fetch all project requests
  getAllProjectRequests(): Observable<ClientsProjectRequestsModel[]> {
    return this.http.get<ClientsProjectRequestsModel[]>(`${this.apiUrl}/projectsRequests`,{ headers: this.getAuthHeaders() });
  }

  // Fetch project requests for a specific manager by manager ID
  getProjectRequestsManager(managerId: number): Observable<ClientsProjectRequestsModel[]> {
    return this.http.get<ClientsProjectRequestsModel[]>(`${this.apiUrl}/project-requests/${managerId}`,{ headers: this.getAuthHeaders() });
  }


  createProject(project: any): Observable<any> {
    const url = `${this.apiUrl}/projects/`;
    return this.http.post<ProjectModel>(url, project,{ headers: this.getAuthHeaders() })
  }

  //-----------------------client-------------------------------------------
  getClientById(clientId: number): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.apiUrl}/clients/${clientId}`, { headers: this.getAuthHeaders() });
  }

   // Fetch employees by ManagerId
   getEmployeesByManagerId(managerId: number): Observable<any> {
    const url = `${this.apiUrl}/GetByManager/${managerId}`;
    return this.http.get<any>(url, { headers: this.getAuthHeaders() });
  }

}
