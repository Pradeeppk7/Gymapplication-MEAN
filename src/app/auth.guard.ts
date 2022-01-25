import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userSer : UsersService, public myRouter : Router)
  {

  }

  canActivate():  boolean  {

    if(!this.userSer.isLoggedIn())
    {
      this.myRouter.navigateByUrl("/login");
    }

    return this.userSer.isLoggedIn();
  }
  
}