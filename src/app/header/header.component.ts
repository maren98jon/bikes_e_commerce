import { ThisReceiver } from '@angular/compiler';
import { Component,Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() autentification?:string;
  no:boolean = false;
  showUserOptions:boolean = false;
  admin:boolean = false;
  logged:boolean=false;
  
  localStorageData?:User;
  
  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.logged=true;
      this.localStorageData = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
      console.log(this.localStorageData)
      if (this.localStorageData?.accountType == "admin") {
        this.admin=true;
      }
      this.autentification=this.localStorageData?.name;
    }
  }
  changeShow(){
    this.no = !this.no;
  }

  showMore(){
    this.showUserOptions=!this.showUserOptions;
  }

  logOut(){
    localStorage.clear();
    location.href="/";
  }

  

}
