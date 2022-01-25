import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-mempackages',
  templateUrl: './mempackages.component.html',
  styleUrls: ['./mempackages.component.css']
})
export class MempackagesComponent implements OnInit {
  useriid:any= localStorage.getItem("loggeduser");
  
  constructor(public pac:PackService) {
    
   }
  
  ngOnInit(): void {console.log(this.useriid);
  }


}
