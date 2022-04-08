import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  localStorageData: User={
    name:"",
    lastName:"",
    mail:"",
    password:"",
  };
  checkpassword:string="";
  edit:boolean=false;
  counter:number=0;
  userId:number=-1;

  constructor(public userService:UserService) { }
  ngOnInit(): void {
    if (localStorage.getItem("user")) {
    
      this.localStorageData = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
      console.log(this.localStorageData);
      this.localStorageData.password="";
    }
  }
  changeEdit(){
    this.edit=!this.edit;
    this.userService.getUserIdByMail(this.localStorageData.mail).subscribe(data=>{
      this.userId=data;
    })
    
  }
  careful(){
    this.counter++;
    switch (this.counter) {
      case 1:
        alert("Si estás seguro de querer eliminar sigue clickando este botón");
        break;

      case 3:
        alert("No habrá vuelta atrás");
        break;

      case 4:
        alert("Tan malos somos?");
        break;

      case 5:
        alert("OK. La proxima vez que lo pulses no habrá vuelta atrás.");
        break;

      case 6:
        this.deleteAccount();
        
        break;
    
      default:
        break;
    }

  }

  deleteAccount():void{
    this.getUserIdByMail();
    console.log(this.userId)
    
  }

  getUserIdByMail():void{
    this.userService.getUserIdByMail(this.localStorageData.mail).subscribe(data=>{
      this.userId=data;
      this.userService.deleteUser(this.userId).subscribe();
      console.log("BIEN");
      console.log("MAL")
        alert("Su cuenta ha sido eliminada con éxito");
        localStorage.clear();
        location.href="/";
    })
  }

  updateUser(){
    
    console.log(this.userId);
    console.log(this.localStorageData);
    this.userService.updateUser(this.userId,this.localStorageData).subscribe();
    alert("Actualizado con éxito");
    location.href="/";
  }

  

}
