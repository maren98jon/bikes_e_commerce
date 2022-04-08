import { Component, OnInit } from '@angular/core';
import { Bike } from '../Interfaces/bike';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { BikeService } from '../Services/bike.service';
import { SalesComponent } from '../sales/sales.component';
import { SaleService } from '../Services/sale.service';
import { Sale } from '../Interfaces/sale';
import { PreSaleService } from '../Services/pre-sale.service';
import { PreSale } from '../Interfaces/pre-sale';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-show-bike-info',
  templateUrl: './show-bike-info.component.html',
  styleUrls: ['./show-bike-info.component.css']
})
export class ShowBikeInfoComponent implements OnInit {

  bikeid: any;
  amount:any;
  singleBike?:Bike;
  sale:boolean=false;
  available:boolean=true;
  makeSale:PreSale={
    userId:-1,
    bikeId:-1
  };
  logged:boolean=false;
  
  
  
  constructor(private router: ActivatedRoute,public bikeService:BikeService,public preSaleService:PreSaleService) { }
  localStorageData: User={
    name:"",
    lastName:"",
    mail:"",
    password:"",
  };
  userid:any;
  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.logged=true;
      this.localStorageData = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
      console.log(this.localStorageData);
      this.localStorageData.password="";
      this.userid=this.localStorageData.id;
    }
    this.bikeid = this.router.snapshot.paramMap.get('id');
    this.bikeid = parseInt(this.bikeid);
    this.getBikeById(this.bikeid);
    console.log(this.singleBike);
    
  }

  getBikeById(id:number):void{
    this.bikeService.getBike(id).subscribe(data=>{
      this.singleBike=data;
      if (this.singleBike?.originalPrice !== this.singleBike?.price) {
        console.log("oferta");
        
        this.sale=true;
      } else {
        console.log("no oferta");
        
        this.sale=false;
      }
      if (this.singleBike.amount <= 0) {
        this.available = false;
      }
    })
  }

  buyBike():void{
    this.makeSale.userId=this.userid;
    this.makeSale.bikeId=this.bikeid;
    this.preSaleService.postPreSale(this.makeSale).subscribe();
    // this.amount=this.singleBike?.amount;
    // this.singleBike!.amount=this.amount-1;
    alert("Bicicleta añadida a la cesta.");
    //this.bikeService.updateBike(this.bikeid,this.singleBike!).subscribe();
    location.href="/cart";
  }

}
