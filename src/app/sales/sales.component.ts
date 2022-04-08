import { Component, OnInit } from '@angular/core';
import { Bike } from '../Interfaces/bike';
import { BikeService } from '../Services/bike.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public bikeService:BikeService) { }
  bikes?:Bike[];
  ngOnInit(): void {
  this.getBikes();
  }

  getBikes():void{
    this.bikeService.getBikes().subscribe(data=>{
      this.bikes=data;
      console.log(this.bikes)
    })
  }


}
