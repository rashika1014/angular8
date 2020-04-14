import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators }    from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../service/auth-guard.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  error : any='';
  retUrl:string="emp-form";


  constructor(public formBuilder:FormBuilder, public router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email    : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
    // redirect to home if already logged in
  //   if (this.authService.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
   }

  ngOnInit() {
  }

  loginUser(event) {

    if (this.loginForm.invalid) {
      alert('Invalid credentials!');
      return;
    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
      if(data){
        this.router.navigate([this.retUrl]);

      }
    },
    error => {
        this.error = error;
    });
    // event.preventDefault();
    console.log(1111111111111111);
		// call loginUser in all cases - so as to show errors in email or password

  }

  // changeUrl(){
  //   this.router.navigate(['emp-form']);
  // }
  // isLoggedIn(){
  //   return true;
  // }
  //loginUser, it takes an email and a password, both strings.
  // login(callback:any, email: string, password: string): any {
  // var self = this;
  // if(email.trim() == "" || password.trim() == "") {
  //   // return if email or password are empty
  //   callback (false, this.router);
  // } else {
  //   callback (true, this.router);
  // }
    //Display loader
    // self.presentLoading();

    // //passing the email & password.
    // return this.fireAuth.signInWithEmailAndPassword(email, password)
    // .then(function(response) {
    //   // optionally handle a successful login})
    //   console.log("response :: " + response);
    //   //console.log("response :: " + response);
    //   db.collection('UserCollection').doc(response.user.uid)
    //   .get().then(function(doc) {
    //     let userInfo = doc.data();
		// localStorage.setItem('isAdmin', 'true');
		// self.isAdmin = true;
    //     //On successful login it�s going to set the rootPage  to be the HomePage
    //     self.router.navigateByUrl('home').then(data => {
    //       if(userInfo != null) {
    //         if(userInfo.name == undefined || userInfo.name == "undefined") {
    //             userInfo.name = "Guest";
    //         }
    //         // self.isLoggedIn = true; //Set user loggedIn is false;
		// 	localStorage.setItem('isAdmin', 'true');
    //         var msg = 'Hi ' + userInfo.name + '! Welcome back to Goyal land surveyors & consultant';
    //         self.presentToast(msg);
    //         setTimeout(function(){
		// 		self.isAdmin = true;
		// 		this.navCtrl.navigateBack('home');
    //           	// window.location.reload();
    //         }, 100);
    //       }

    //       //Hide loader
    //     }, (error) => {
    //       console.log(error);
    //       //Hide loader
    //     })
    //   });
    // })
    // .catch(function(error: any) {
    //   // unsuccessful authentication response here});
    //   console.log("error :: " + error);
    //   var msg = error.message;
    //   self.presentToast(msg);
    //   //console.log("error :: " + error.message);
    //   //If there is a problem its going to show an alert to the user with the error message.
    // });

}
