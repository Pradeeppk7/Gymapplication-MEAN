import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
ad:string= '1635362908540';
name:string="";
  constructor(public http : HttpClient,) {
   }

  doUserRegistration(data:any)
  {
    return this.http.post<string>("http://localhost:3000/register", data);
  }
  doUserLogin(data:any)
  {
    return this.http.post<any[]>("http://localhost:3000/login", data);
  }
  

  
  isAdmin(){
    return !!localStorage.getItem("loggedadmin");
  }
  isLoggedIn()
  {
    this.name=localStorage.getItem("loggedusername");
    return !!localStorage.getItem("loggeduser");
  }
  getAllUsers()
  {
    return this.http.get<any[]>("http://localhost:3000/allusers");
    
  }
  getloggedUserData(userid:string)
  {
    return this.http.get<any[]>("http://localhost:3000/profile/"+userid);
  }
  
  uemailcheckAvail(uemail:string)
  {
    return this.http.get<any[]>("http://localhost:3000/uemailcheck/"+uemail);
  }
  uuemailcheckAvail(uemail:string)
  {
    return this.http.get<any[]>("http://localhost:3000/uuemailcheck/"+uemail);
  }
  getSingleUserData(userid:string)
  {
    return this.http.get<any[]>("http://localhost:3000/getuser/"+userid);
  }
  editsingleUserdata(data:any)
  {
    return this.http.put<string>("http://localhost:3000/updateuser/",data);
  }
  
  addpackages(data:any)
  {
    return this.http.put<string>("http://localhost:3000/cart/",data);
  }
  
  deleteUserData(userid:number)
  {
    return this.http.delete<string>("http://localhost:3000/deleteuser/"+userid);
  }
  searchUsers(searchtxt:string)
  {
    return this.http.get<any[]>("http://localhost:3000/searchuser/"+searchtxt);
  }
 
  
}
