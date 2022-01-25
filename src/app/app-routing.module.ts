import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { logGuard } from './log.guard';
import { LoginComponent } from './login/login.component';
import { MempackagesComponent } from './mempackages/mempackages.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SlideComponent } from './slide/slide.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ManagerComponent } from './manager/manager.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
   {path:"",component:SlideComponent},
   {path:"register", component:RegisterComponent,canActivate:[logGuard]},
   {path:"contact",component:ContactComponent},
   {path:"login", component:LoginComponent ,canActivate:[logGuard]},
   {path:"profile", component:ProfileComponent, canActivate:[AuthGuard]},
   {path:"packages", component:MempackagesComponent},
   {path:"cart", component:CartComponent, canActivate:[AuthGuard]},
   {path:"payment", component:PaymentComponent, canActivate:[AuthGuard]},
   {path:"manager", component:ManagerComponent, canActivate:[AdminGuard]},
   {path:"edituser/:userid",component:EdituserComponent,canActivate:[AdminGuard]},
   {path:"adduser", component:AdduserComponent,canActivate:[AdminGuard]},
   {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
