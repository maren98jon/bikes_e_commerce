import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../Interfaces/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    httpHeaders: new HttpHeaders({'Content-Type':'application/json'})
  }

  getBikes():Observable<Bike[]>{
    return this.http.get<Bike[]>('https://localhost:5001/api/Bikes')
  }

  getBike(id:number):Observable<Bike>{
    return this.http.get<Bike>('https://localhost:5001/api/Bikes/'+id)
  }

  postBike(bike:Bike):Observable<Bike>{
    return this.http.post<Bike>('https://localhost:5001/api/Bikes',bike,this.httpOptions)
  }

  updateBike(id:number,bike:Bike):Observable<Bike>{
    return this.http.put<Bike>('https://localhost:5001/api/Bikes/'+id,bike,this.httpOptions)
  }

  deleteBike(id:number):Observable<Bike>{
    return this.http.delete<Bike>('https://localhost:5001/api/Bikes/'+id)
  }
}
