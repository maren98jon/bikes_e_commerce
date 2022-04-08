import { Component, Input, OnInit } from '@angular/core';
import { Bike } from '../Interfaces/bike';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() bike?:Bike;
  ngOnInit(): void {
  }

}
