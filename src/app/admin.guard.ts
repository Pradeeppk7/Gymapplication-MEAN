import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  useri:string=localStorage.getItem("loggeduser");

  constructor(public userSer : UsersService, public myRouter : Router)
  {

  }

  canActivate():  boolean  {

    if(!this.userSer.isAdmin())
    {
      this.myRouter.navigateByUrl("/");
    }

    return this.userSer.isAdmin();
  }
  
}