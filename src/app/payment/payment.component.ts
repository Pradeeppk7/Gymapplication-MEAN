import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
packname=localStorage.getItem("packna");
  constructor( public pac: PackService) { }

  ngOnInit(): void {
  }

}
