import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService:UserService) { }
  logUser?:User;
  newUser: User = {
    name:"",
    lastName:"",
    mail:"",
    password:"",
    accountType:"cliente",
  }

  myUser: User = {
    id:-1,
    name:"",
    lastName:"",
    mail:"",
    accountType:"",
  }
  

  exist:boolean=false;
  show:boolean= true;
  regName:string="";
  regLastName:string="";
  regPass1:string="";
  regPass2:string="";
  checkBox:boolean=false;
  correct:string="red";

  ngOnInit(): void {
  }
  logMail:string = "";
  regMail:string="";
  logPass:string="";
  password:boolean= false;
  rememberPass():void{
    for (let index = 0; index <10; index++) {
      alert("No haberla olvidado");
    }
  }
  
  changeShow():void{
    this.show=!this.show;
  }

  createButton():void{
    if (this.correctData()) {
      this.createAccount()
    }
  }
  correctData():boolean{
    if (this.checkBox) {
    if (this.regPass1==this.regPass2) {
      if (!this.existAccount()) {
        return true;
      } else {
        return false;
      }
    } else {
      alert("No ha introducido datos correctos o ya tiene una cuenta.");
      return false;
    }
    }
    alert ("Acepta la política de privacidad aunque no la leas!!")
    return false;
  }

  existAccount():boolean{
    this.userService.existUserByMail(this.regMail).subscribe(data=>{
      this.exist = data
  })
  return this.exist;
}

  createAccount():void{
    this.newUser.name=this.regName;
    this.newUser.lastName=this.regLastName;
    this.newUser.mail=this.regMail;
    this.newUser.password=this.regPass1;

    this.userService.postUser(this.newUser).subscribe();
    alert("Cuenta creada con éxito");
    location.href="/login";
    
  }

  logIn():void{
    this.myUser.mail=this.logMail;
    this.myUser.password=this.logPass;
    if (this.checkPassword()) {
      this.userService.getUserByMail(this.logMail).subscribe(data => {
        this.logUser = data;
        localStorage.clear();
        this.logUser.password="suerte payaso";
        localStorage.setItem("user",JSON.stringify(this.logUser));
        location.href="/";
      });
    } else {
      alert("mail y/o contraseña incorrecta")
    }
  }

  checkPassword():boolean{
    this.userService.checkPassword(this.myUser).subscribe(data =>{
      this.password = data
    });
    console.log("intento");
    console.log(this.password);
    return this.password;
  }
}