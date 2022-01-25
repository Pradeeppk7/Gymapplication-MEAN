import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { NavmainComponent } from './navmain/navmain.component';
import { SlideComponent } from './slide/slide.component';
import { Footer1Component } from './footer1/footer1.component';
import { MarqComponent } from './marq/marq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MempackagesComponent } from './mempackages/mempackages.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ManagerComponent } from './manager/manager.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmainComponent,
    SlideComponent,
    Footer1Component,
    MarqComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NotfoundComponent,
    MempackagesComponent,
    CartComponent,
    PaymentComponent,
    ManagerComponent,
    AdduserComponent,
    EdituserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
