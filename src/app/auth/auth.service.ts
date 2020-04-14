import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { Http ,HttpModule} from '@angular/http'

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  private userName:string;
private loggedInUser: any;
public list:any= [];

private empDataSource = new Subject<object>();
empData$ = this.empDataSource.asObservable();

  constructor(public httpClient : HttpClient, public router:Router) {
    this.isloggedIn=false;
  }

  login(email: string, password:string) {
    if(email=="admin@gmail.com" && password=="123456") {
      localStorage.setItem('isloggedIn', 'true');
      this.isloggedIn = true;
      this.loggedInUser = email;
    } else {""
      this.isloggedIn = false;
    }
    this.isUserLoggedIn();
    return of(this.isloggedIn); 	
    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    // this.isloggedIn=true;
    // this.userName=username;
    // return of(this.isloggedIn);
  }

  

  isUserLoggedIn() {
    var a = localStorage.getItem('isloggedIn');

    return  a;
  }

  sendGetRequest(){

    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((data: any)=>{
      this.list = data.data;
      return (this.list);
      // console.log(this.employees);
    });
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
    
  }

  sendEmpData(data){
    this.empDataSource.next(data);
    this.router.navigate(['emp-create']);

  }

  createEmp(details) {
    var data = JSON.stringify(details);
    var url = 'http://dummy.restapiexample.com/api/v1/create';
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-type", "application/json");
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     //Response received
    //     var response = JSON.parse(xhr.responseText);
    //     console.log(response);
    //     return response;

    //   }
    // }
    // xhr.send(data);
    return this.httpClient.post(url, data);

  }

  deleteEmp(id) {
    var url = 'http://dummy.restapiexample.com/api/v1/delete';

    return this.httpClient.delete(`${url}/${id}`);

  }

  // isAdminUser():boolean {
  //     if (this.userName=='Admin') {
  //         return true; 
  //     }
  //     return false;
  // }

  logoutUser(): void{
    localStorage.removeItem('isloggedIn');

      this.isloggedIn = false;
  }
}
