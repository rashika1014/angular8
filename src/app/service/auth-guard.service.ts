import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private loginComponent: LoginComponent, 
    private router: Router) { }

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    // here we check if user is logged in or not
    // the authService returs user object, or
    // it returns undefined/null when user is not logged in
    console.log(22222222222);
    if(this.authService.isUserLoggedIn()){
      return true
    } else {
      alert("bbbbbbbbbbbbbb")
      this.router.navigate(['/login'], {
        //       // note: this queryParams returns the current URL
        //       // that we can have in 'return' parameter,
        //       // so when the '/login' page opens,
        //       // this param tell us from where it comes
        //       // read-more to understand better👇👇
              queryParams: {
                return: state.url
              }
            });
    }
    // this.authService.isUserLoggedIn().subscribe((user) => {
    //   console.log(user);
    //   if (!user) {
    //     console.log(3333333333333333);

    //     // just return false - if user is not logged in
    //     this.router.navigate(['/login'], {
    //       // note: this queryParams returns the current URL
    //       // that we can have in 'return' parameter,
    //       // so when the '/login' page opens,
    //       // this param tell us from where it comes
    //       // read-more to understand better👇👇
    //       queryParams: {
    //         return: state.url
    //       }
    //     });
    //     return false;
    //   } else {
        
    //     console.log(44444444444444444);

    //     // just return true - if user is logged in
    //     return true;
    //   }
    // });
  }
}