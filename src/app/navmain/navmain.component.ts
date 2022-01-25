import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navmain',
  templateUrl: './navmain.component.html',
  styleUrls: ['./navmain.component.css']
})
export class NavmainComponent implements OnInit {
  name: string;


  constructor(public userSer: UsersService, public activeRoute: ActivatedRoute, public myRouter: Router) { }

  ngOnInit(): void {

  }
  doLogout() {
    localStorage.clear();
    this.myRouter.navigateByUrl("/");
  }
  
   



}
