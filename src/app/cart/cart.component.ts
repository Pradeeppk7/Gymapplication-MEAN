import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isPackbuy = true;
  code: string = "452dfg";
  pay = 2000;
  userdataa: { _id: number, Fname: string, lname: string, uemail: string, userage: Number, usergender: Number, gender: String, userpass: string, userphone: number }
  codemsg: string;
  couponcode: string = "";
  packn: string;
  isdiet = false;
  msg: string;
  userdata: any = localStorage.getItem("loggeduser");
  date = new Date();
  offer: string;
  appliedmsg: string;
  taxy: number;
  istax: boolean;
  isnottax: boolean;
  val:string;
  coup:string;


  packname = localStorage.getItem("packna");
  packdesc = localStorage.getItem("packds");





  constructor(public activeRoute: ActivatedRoute, public pac: PackService, public userSer: UsersService, public rooter: Router) { this.packn = pac.packname }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      console.log(param.userid);



    });
  }

  bath(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 500;
      }
      else {
        this.pay += 1000;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 500
      }
      else {
        this.pay -= 1000;
      }
    }
  }
  train(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 1000;
      }
      else {
        this.pay += 2000;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 1000;
      }
      else {
        this.pay -= 2000;
      }
    }
  }
  diet(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 250;
      }
      else {
        this.pay += 500;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 250;
      }
      else {
        this.pay -= 500;
      }
    }
  }
  coupon(event: any) {

    if (this.couponcode == this.code) {
      event.target.disabled = true;
      this.pay *= 0.5;
      this.coup="Applied";
      this.appliedmsg = "Coupon Applied";
      this.codemsg = "50%";
    }
    else {
      this.codemsg = "Please Enter valid Code";
    }
  }
  iscoupon() {
    if (this.couponcode == this.code) {
      
      return true;
    }
    else {
      return false;
    }

  }
 
  
  
 
  packCb(form: NgForm) {

    console.log("Package Registered");
    console.log(form.value);
    var stringToConvert = localStorage.getItem("loggeduser");
    var numberValue = Number(stringToConvert);
    console.log(numberValue);
    form.value._id = numberValue;
    form.value.paid= this.pay;
    form.value.coupon=this.coup;
    form.value.date = this.date;
    form.value.pack = this.packn;
    this.userSer.addpackages(form.value).subscribe((data: string) => {
      this.msg = data;
      form.reset();
    }, (error: any) => {
      this.msg = "something went wrong";
    })
    this.rooter.navigateByUrl("/payment")




  }
}
