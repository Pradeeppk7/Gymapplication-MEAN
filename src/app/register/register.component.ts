import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg : string;
  uuseremailavail=false;
  date = new Date();

  constructor(public userSer : UsersService, public rooter:Router) { }

  ngOnInit(): void {
  }

  userRegistration(form:NgForm)
  {
    console.log("User Registered");
    form.value.date=this.date;
    console.log(form.value);
    this.rooter.navigateByUrl("/login")

    this.userSer.doUserRegistration(form.value).subscribe((data:string)=>{

      console.log(data);

      this.msg = data;
      
      form.reset();

    }, (error:any)=>{

      console.log(error);

      this.msg = "Something Went Wrong!!";

    });
    
  }
  uuemailcheck(uemail:string)
  {
    this.userSer.uuemailcheckAvail(uemail).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0)
      {
        this.msg=""
        this.uuseremailavail= true;
      }
      else{
        this.msg="Email already registered";
        this.uuseremailavail= false;
      }

    },(error:any)=>{
      console.log(error);
      this.msg="Something went wrong";
    })
  }
 
   
 

}
