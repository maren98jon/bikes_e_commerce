import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../Interfaces/bike';
import { User } from '../Interfaces/user';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    httpHeaders: new HttpHeaders({'Content-Type':'application/json'})
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:5001/api/Users')
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:5001/api/Users/'+id)
  }

  existUserByMail(mail:string):Observable<boolean>{
    return this.http.get<boolean>('https://localhost:5001/api/Users/Mail/'+mail)
  }

  getUserByMail(mail:string):Observable<User>{
    return this.http.get<User>('https://localhost:5001/api/Users/getByMail/'+mail)
  }

  getUserIdByMail(mail:string):Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/Users/getIdByMail/'+mail)
  }

  checkPassword(user:User):Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/Users/checkPass',user,this.httpOptions)
  }

  postUser(user:User):Observable<User>{
    return this.http.post<User>('https://localhost:5001/api/Users',user,this.httpOptions)
  }

  updateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>('https://localhost:5001/api/Users/'+id,user,this.httpOptions)
  }

  getUserPreSales(id:number):Observable<Bike[]>{
    return this.http.get<Bike[]>('https://localhost:5001/api/Users/PreSale/'+id)
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>('https://localhost:5001/api/Users/'+id)
  }
}
