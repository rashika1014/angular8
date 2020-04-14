import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { EmpCreateComponent } from './emp-create/emp-create.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    LoginComponent,
    EmpCreateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
