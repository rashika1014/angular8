import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';

import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path:'login', component:LoginComponent, pathMatch: 'full'},
  {path:'emp-form', component:EmpFormComponent, canActivate:[AuthGuardService]},
  {path:'emp-create', component:EmpCreateComponent, canActivate:[AuthGuardService] },
  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
