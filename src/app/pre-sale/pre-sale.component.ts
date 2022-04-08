import { Component, OnInit } from '@angular/core';
import { Bike } from '../Interfaces/bike';
import { Sale } from '../Interfaces/sale';
import { User } from '../Interfaces/user';
import { BikeService } from '../Services/bike.service';
import { PreSaleService } from '../Services/pre-sale.service';
import { SaleService } from '../Services/sale.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-pre-sale',
  templateUrl: './pre-sale.component.html',
  styleUrls: ['./pre-sale.component.css']
})
export class PreSaleComponent implements OnInit {
  logged:boolean=false;
  myUser:User={
    id:-1,
    name:"",
    lastName:"",
    mail:"",
    password:"",
  }
  bikeID:number=0;
  
  singleBike?:Bike;
  myId:any;
  empty:boolean = true;
  id:any;
  myCart?:Bike[];
  precioTotal:number=0;
  deleteCart:number=-1;
  sale: Sale={
    userId:-1,
    bikeId:-1,
    saleDate: new Date()
  }
  amount:number=0;
  

  constructor(public bikeService:BikeService, public userService:UserService,public preSaleService:PreSaleService,public saleService:SaleService) { }

  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.logged=true;
      this.myUser = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
      this.id = this.myUser.id;
      this.getUserPreSales();
    }
  }

  getUserPreSales():void{
    this.userService.getUserPreSales(this.id).subscribe(data => {
      this.myCart = data;
      console.log(this.myCart);
      if ((this.myCart).length > 0) {
        this.empty = false;
      }
      console.log(this.empty)
      this.getTotalPrice();
    })
  }

  getTotalPrice():void{
    (this.myCart)?.forEach(bike => {
      this.precioTotal += bike.price
    })
  }

  deletePreSale(id:any):void{
    id = parseInt(id);
    console.log(id);
    
    this.myId=this.myUser.id
    this.preSaleService.getPreSaleByData(this.myId,id).subscribe(data => {
    this.deleteCart = data;
    console.log(this.deleteCart);
    this.preSaleService.deletePreSale(this.deleteCart).subscribe();
    console.log("borrado del carro")
    location.reload();
    })
    
  }

  payAllBikes():void{
    (this.myCart)?.forEach(bike => {
      this.postSale(bike.id,bike);
    })
    alert("Compra realizada con exito!");
    location.href="/";
  }

  postSale(bikeid:any,bike:Bike):void{
    this.myId=this.myUser.id;
   
    this.bikeID=bikeid;
    
    // this.sale.userId=this.myId;
    // this.sale.bikeId=bike.Id;
    // console.log(this.sale);
    this.sale.bikeId=this.bikeID;
    this.sale.userId=this.myId;
    console.log(bike.amount);
    
    this.amount = bike.amount - 1;
    bike.amount = this.amount;
    console.log(bike.amount);
    this.saleService.postSale(this.sale).subscribe();
    this.bikeService.updateBike(this.sale.bikeId,bike).subscribe();
    
  }

}
