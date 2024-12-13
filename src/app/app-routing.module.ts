import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Outer Components
import { OuterHomeComponent } from './outer/outer-home/outer-home.component';
import { OuterAboutComponent } from './outer/outer-about/outer-about.component';
import { ServicesComponent } from './outer/services/services.component';
import { OuterContactComponent } from './outer/outer-contact/outer-contact.component';
import { SignupFormComponent } from './outer/signup-form/signup-form.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './outer/employee-login/employee-login.component';
import { ClientLoginComponent } from './outer/client-login/client-login.component';
import { ManagerLoginComponent } from './outer/manager-login/manager-login.component';

// Import Employee Components
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeeattendanceComponent } from './employee/employeeattendance/employeeattendance.component';
import { EmployeeprojectsComponent } from './employee/employeeprojects/employeeprojects.component';
import { EmployeetasksComponent } from './employee/employeetasks/employeetasks.component';
import { EmployeeleaverequestsComponent } from './employee/employeeleaverequests/employeeleaverequests.component';
import { EmployeeperformanceComponent } from './employee/employeeperformance/employeeperformance.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './admin/home/home.component';
import { ListManagerComponent } from './admin/manager/list-manager/list-manager.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { UpdateManagerComponent } from './admin/manager/update-manager/update-manager.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { UserRequestsComponent } from './admin/user-requests/user-requests.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { ListDepartmentComponent } from './admin/department/list-department/list-department.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './admin/department/update-department/update-department.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { RequestProjectsComponent } from './client/projects/request-projects/request-projects.component';
import { RequestNewProjectsComponent } from './client/projects/request-new-projects/request-new-projects.component';
import { ListProjectsComponent } from './client/projects/list-projects/list-projects.component';
import { UpdateRequestedProjectsComponent } from './client/projects/update-requested-projects/update-requested-projects.component';
import { JoinRoomComponent } from './client/chat/join-room/join-room.component';
import { ChatComponent } from './client/chat/chat/chat.component';
import { WelcomeComponent } from './client/chat/welcome/welcome.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerJoinRoomComponent } from './manager/chat/manager-join-room/manager-join-room.component';
import { ManagerChatComponent } from './manager/chat/manager-chat/manager-chat.component';
import { ManagerWelocomeComponent } from './manager/chat/manager-welocome/manager-welocome.component';
import { ClientProfileComponent } from './client/profile/client-profile/client-profile.component';
import { ClientProfileUpdateComponent } from './client/profile/client-profile-update/client-profile-update.component';
import { ClientSettingsComponent } from './client/settings/client-settings/client-settings.component';
import { ClientResetPasswordComponent } from './client/settings/client-reset-password/client-reset-password.component';
import { EmployeeprofileComponent } from './employee/profile/employeeprofile/employeeprofile.component';
import { EmployeeProfileUpdateComponent } from './employee/profile/employee-profile-update/employee-profile-update.component';
import { EmployeeSettingsComponent } from './employee/settings/employee-settings/employee-settings.component';
import { EmployeeResetPasswordComponent } from './employee/settings/employee-reset-password/employee-reset-password.component';
import { ManagerSettingsComponent } from './manager/settings/manager-settings/manager-settings.component';
import { ManagerResetPasswordComponent } from './manager/settings/manager-reset-password/manager-reset-password.component';
import { ManagerProfileComponent } from './manager/profile/manager-profile/manager-profile.component';
import { ManagerProfileUpdateComponent } from './manager/profile/manager-profile-update/manager-profile-update.component';
import { EmployeeWelcomeComponent } from './employee/chat/employee-welcome/employee-welcome.component';
import { EmployeeChatComponent } from './employee/chat/employee-chat/employee-chat.component';
import { EmployeeJoinRoomComponent } from './employee/chat/employee-join-room/employee-join-room.component';
import { ForgotPasswordComponent } from './outer/forgot-password/forgot-password.component';
import { AdminProfileComponent } from './admin/profile/admin-profile/admin-profile.component';
import { AdminProfileUpdateComponent } from './admin/profile/admin-profile-update/admin-profile-update.component';
import { ProjectsRequestsComponent } from './manager/projects/projects-requests/projects-requests.component';
import { ListAllProjectsComponent } from './manager/projects/list-all-projects/list-all-projects.component';
import { UpdateProjectsComponent } from './manager/projects/update-projects/update-projects.component';
import { AddProjectsComponent } from './manager/projects/add-projects/add-projects.component';


const routes: Routes = [
  // ****************************Outer Page**************************
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: 'outer-home', component: OuterHomeComponent },      // Home Page
      { path: 'outer-contact', component: OuterContactComponent }, // Contact Us
      { path: 'outer-about', component: OuterAboutComponent },     // About Us
      { path: 'services', component: ServicesComponent },          // Our Services
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'manager-login', component: ManagerLoginComponent },
      { path: 'employee-login', component: EmployeeLoginComponent },
      { path: 'client-login', component: ClientLoginComponent },
      { path: 'signup-form', component: SignupFormComponent },     // Signup
      { path: 'forgot-password', component: ForgotPasswordComponent }, 
      { path: '', redirectTo: 'outer-home', pathMatch: 'full' },   // Default redirect to Home
    ]
  },

  //******************************Employee Page*************************
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    children: [
      { path: 'employeehome', component: EmployeehomeComponent },
      { path: 'employee-welcome', component: EmployeeWelcomeComponent },
      { path: 'employee-chat', component: EmployeeChatComponent },
      { path: 'employee-join-room', component: EmployeeJoinRoomComponent },
      { path: 'employeeprofile', component: EmployeeprofileComponent },
      { path: 'employee-profile-update/:id', component: EmployeeProfileUpdateComponent },
      { path: 'employeeattendance', component: EmployeeattendanceComponent },
      { path: 'employeeprojects', component: EmployeeprojectsComponent },
      { path: 'employeetasks', component: EmployeetasksComponent },
      { path: 'employeeleave-requests', component: EmployeeleaverequestsComponent }, // Consistent naming
      { path: 'employeeperformance', component: EmployeeperformanceComponent },
      { path: 'employee-settings', component: EmployeeSettingsComponent },
      { path: 'employee-reset-password', component: EmployeeResetPasswordComponent },
      { path: '', redirectTo: 'employeehome', pathMatch: 'full' } // Default route for the employee layout
    ]
  },

  //***************************manager*************************************** 

  {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
      { path: 'managerhome', component: ManagerHomeComponent },
      { path: 'manager-join-room', component : ManagerJoinRoomComponent},   
      {path : 'manager-chat', component:ManagerChatComponent},
      {path : 'manager-welcome', component:ManagerWelocomeComponent},
      { path: 'manager-settings', component: ManagerSettingsComponent },
      { path: 'manager-reset-password', component: ManagerResetPasswordComponent },
      { path: 'manager-profile', component: ManagerProfileComponent },
      { path: 'manager-profile-update/:id', component: ManagerProfileUpdateComponent },
      {path:'list-all-projects', component:ListAllProjectsComponent},
      {path:'add-projects/:id', component:AddProjectsComponent},
      {path:'update-projects/:id',component:UpdateProjectsComponent},
      {path: 'projects-requests', component:ProjectsRequestsComponent},
      { path: '', redirectTo: 'managerhome', pathMatch: 'full' } 
    ]
  },

  //*******************************Admin*************************************** */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'admin-profile-update/:id', component: AdminProfileUpdateComponent },
      { path: 'manager/list-manager', component: ListManagerComponent },
      { path: 'manager/add-manager', component: AddManagerComponent },
      { path: 'manager/update-manager/:id', component: UpdateManagerComponent },
      { path: 'employee/list-employee', component: ListEmployeeComponent },
      { path: 'employee/add-employee', component: AddEmployeeComponent },
      { path: 'employee/update-employee/:id', component: UpdateEmployeeComponent},
      { path: 'client/list-client', component: ListClientComponent },
      { path: 'client/add-client', component: AddClientComponent },
      { path: 'client/update-client/:id', component: UpdateClientComponent},
      { path: 'department/list-department', component: ListDepartmentComponent},
      { path: 'department/add-department', component: AddDepartmentComponent},
      { path: 'department/update-department', component: UpdateDepartmentComponent},
      { path: 'user-requests', component: UserRequestsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  },


  //********************************client***************** */
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: 'home', component: ClientHomeComponent },
      { path: 'request-projects', component: RequestProjectsComponent },
      { path: 'request-new-projects', component: RequestNewProjectsComponent },
      { path: 'list-projects', component: ListProjectsComponent },
      { path: 'update-requested-projects/:id', component: UpdateRequestedProjectsComponent },
      { path: 'join-room', component : JoinRoomComponent},   
      {path : 'chat', component:ChatComponent},
      {path : 'welcome', component:WelcomeComponent},
      {path : 'client-profile', component:ClientProfileComponent},    
      {path : 'client-profile-update/:id', component:ClientProfileUpdateComponent},
      {path : 'client-settings', component:ClientSettingsComponent},    
      {path : 'client-reset-password', component:ClientResetPasswordComponent},
     
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
