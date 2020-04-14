import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  public employees:any=[];
  retUrl:string="";

  constructor(public httpClient : HttpClient,
     public activatedRoute:ActivatedRoute,
      public authService:AuthService,
      public router:Router) { }

  ngOnInit() {
//     this.activatedRoute.queryParamMap
//     .subscribe(params => {
// this.retUrl = params.get('retUrl'); 
// console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
// });

    this.authService.sendGetRequest().subscribe((data: any)=>{
      this.employees = data.data;
      console.log(this.employees);
    })
  }

  viewDidEnter(){
    alert("aaaaaaaaaaaaa")
  }

  // sendGetRequest(){
  //   return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
  // }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

  addNewEmp() {
    this.router.navigate(['emp-create']);
  }

  updateEmp(data) {
    this.authService.sendEmpData(data);
  }

  deleteEmp(id) {
    this.authService.deleteEmp(id).subscribe(response => {
      if(response){
        alert("Deleted !!!")

      }
    },
    error => {
      console.log(error);
    });  }
}
