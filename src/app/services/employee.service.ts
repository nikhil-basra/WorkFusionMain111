import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7036/api/Employee'; // Your API base URL

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getEmployeeByUserId(userId: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${userId}`);
  }

    // Fetch employee by ID
    getEmployeeById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/employees/${id}`, { headers: this.getAuthHeaders() });
    }
  
  // Update an existing employee
  updateEmployee(employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateEmployee`, employeeData, { headers: this.getAuthHeaders() });
  }

    // Fetch image by userId and roleId
    getImageByUserIdAndRoleId(userId: number, roleId: number): Observable<any> {
      return this.http.get<any>(
        `${this.apiUrl}/employeeImage/${userId}/${roleId}`,
        { headers: this.getAuthHeaders() }
      );
    }

    ///-------------------------departments-----------------------------//
      // Fetch all departments
  getDepartments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departments`, { headers: this.getAuthHeaders() });
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
}
