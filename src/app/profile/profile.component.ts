import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackService } from '../pack.service';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  msg: string;

  userdata: { _id: number, Fname: string, lname: string, uemail: string, userage: Number, usergender: Number, gender: String, userpass: string, userphone: number, level: string, pack: string, istrain: boolean, isdietplan: boolean, isbath: boolean; date: string; }
 
  useriid: any = localStorage.getItem("loggeduser");


  constructor(public userSer: UsersService, public activeRoute: ActivatedRoute, public pac: PackService, public myRouter: Router) {

  }


  ngOnInit(): void {
    console.log(this.useriid);

    this.userSer.getloggedUserData(this.useriid).subscribe((data: any[]) => {
      console.log(data);
      this.userdata = data[0];
    }, (error: any) => {
      console.log(error);
    });
  }
  addbath()
  {
    if(this.userdata.isbath==true){
      return true
    }
    else{
      return false
    }
  }
  addtrain()
  {
    if(this.userdata.istrain==true){
      return true
    }
    else{
      return false
    }
  }
  adddiet()
  {
    if(this.userdata.isdietplan==true){
      return true
    }
    else{
      return false
    }
  }
}


