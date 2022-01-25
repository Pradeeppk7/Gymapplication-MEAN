import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  msg:string;
  useremailavail=false;
  date = new Date();

  constructor(public userSer :UsersService) { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){

    
    form.value.date = this.date;
  this.userSer.doUserRegistration(form.value).subscribe((data:string)=>{
    console.log(data);
   
    this.msg = data;
    
    form.reset();

  }, (error:any)=>{

    console.log(error);

    this.msg = "Something Went Wrong!!";

  });

  }
  uemailcheck(uemail:string)
  {
    this.userSer.uemailcheckAvail(uemail).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0)
      {
        this.msg=""
        this.useremailavail= true;
      }
      else{
        this.msg="Email already registered";
        this.useremailavail= false;
      }

    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong";
    })
  }

}
