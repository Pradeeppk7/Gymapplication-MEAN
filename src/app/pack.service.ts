import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  packname="";
  packdesc="";
  accountStatus="Inactive";
  calisThen="Calisthenic";
  caliS="Calisthenic is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc. These exercises are often performed rhythmically and with minimal equipment, as bodyweight exercises.";
  gyM="Gymnasium";
  gymNa="Gymnasium is a form of strength training consisting of a variety of heavy weight movements that exercise all muscle groups, such as pulling and pushing, etc. These exercises are often performed with heavy weight and with machine assist.";
  crossFi="Cross Fitness";
  crossFitness="A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level. These movements are actions that you perform in your day-to-day life, like squatting, pulling, pushing."
  kickBo="Kickboxing";
  kickBoxing="Kickboxing is a group of stand-up combat sports based on kicking and punching, historically developed from karate mixed with boxing. Kickboxing is practiced for self-defence, general fitness, or as a contact sport."
  sporT="Sports";
  sporTs=" Sports fitness leads to better athletic performance, and persistent training will usually develop physical fitness. ... Ability of the endurance athlete to use oxygen is related to circulatory and respiratory capacity, but in sprints, weight lifting, and swimming.";
  cardiO="Cardio is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process. Aerobic is defined as relating to, involving, or requiring free oxygen, and refers to the use of oxygen to adequately meet energy demands.";
  card="Cardio";
  stbath=1000;
  pt=2000;
  dplan=500;
  name=localStorage.getItem("loggedusername");
  namee=localStorage.getItem("loggedusernamee");
  gender=localStorage.getItem("loggedusergen");
  age=localStorage.getItem("loggeduserage");
  

  constructor(public http:HttpClient,public rooter: Router) { 
    console.log("service created");
  }
  calisBuy(){
    this.packname=this.calisThen;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.caliS;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
   }
  gymBuy(){
    this.packname=this.gyM;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.gymNa;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  crossBuy(){
    this.packname=this.crossFi;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.crossFitness;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  kickBuy(){
    this.packname=this.kickBo;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.kickBoxing;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  cardioBuy(){
    this.packname=this.card;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.cardiO;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  sportsBuy(){
    this.packname=this.sporT;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.sporTs;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  
  

}
