import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  msg: string;
  date = new Date();

  userdata: { _id: number, Fname: string, lname: string, uemail:string, userage:Number, usergender:Number, gender:String, userpass:string, userphone:number ,level:string; isbath:boolean,istrain:boolean,isdietplan:boolean,pack:string }

  constructor(public activeRoute: ActivatedRoute, public userSer: UsersService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      console.log(param);
      if (param.userid) {
        this.userSer.getSingleUserData(param.userid).subscribe((data: any[]) => {
          console.log(data);
          this.userdata = data[0];
        }, (error: any) => {
          console.log(error);
        });
      }


    });
  }
  editUser(form: NgForm) {
    form.value._id = this.userdata._id
    form.value.date=this.date;
    console.log(form.value);
    this.userSer.editsingleUserdata(form.value).subscribe((data: string) => {
      this.msg = data;
    }, (error: any) => {
      this.msg = "something went wrong";
    
    });
}
}




