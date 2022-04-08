import { Component, OnInit } from '@angular/core';
import { Bike } from '../Interfaces/bike';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(public categoryService:CategoryService) { }
  bikes?:Bike[];
  option:string="nada";
  ngOnInit(): void {
  }

  getCategoryBikes(id:number):void{
    this.categoryService.getCategoryBikes(id).subscribe(data=>{
      this.bikes=data;
      console.log(this.bikes)
    })
  }

  showBikes(id:number,option:string):void{
    if (this.option==option){
      this.option="algo"
    } else{
      this.option=option;
    };
    this.getCategoryBikes(id);
  }



}
