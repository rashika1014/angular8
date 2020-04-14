import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators }    from '@angular/forms';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  public employeeForm : FormGroup;
  public retUrl :any="emp-form";
  public employee : any;
  public name: any;
  public salary: any;
  public age: any;


  constructor(public formBuilder:FormBuilder, public router: Router, private authService: AuthService, public activatedRoute :ActivatedRoute) {
    this.employeeForm = this.formBuilder.group({
      // profile_image: new FormControl('', Validators.required),
      name    : new FormControl('', Validators.required),
      salary : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),

    });

    this.authService.empData$.subscribe(
      data => {
        console.log(data);
        this.employee = data;
        this.name =this.employee.employee_name;
        this.salary =this.employee.employee_salary;
        this.age =this.employee.employee_age;

      }
    )
   }

  ngOnInit() {
    this.authService.empData$.subscribe(
      data => {
        console.log(data);
        this.employee = data;
        this.name =this.employee.employee_name;
        this.salary =this.employee.employee_salary;
        this.age =this.employee.employee_age;

      }
    )
  
    
  }
  
  createEmp(event) {
    this.authService.createEmp(this.employeeForm.value).subscribe(data => {
      if(data){
        alert("Bravo Created !!!")
        this.router.navigate([this.retUrl]);

      }
    },
    error => {
      console.log(error);
    });
  }
}
