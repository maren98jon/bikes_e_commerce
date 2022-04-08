import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreSale } from '../Interfaces/pre-sale';

@Injectable({
  providedIn: 'root'
})
export class PreSaleService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    httpHeaders: new HttpHeaders({'Content-Type':'application/json'})
  }

  getPreSales():Observable<PreSale[]>{
    return this.http.get<PreSale[]>('https://localhost:5001/api/PreSales')
  }

  getPreSaleByData(userId:number,bikeId:number):Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/PreSales/'+userId+"/"+bikeId)
  }

  postPreSale(presale:PreSale):Observable<PreSale>{
    return this.http.post<PreSale>('https://localhost:5001/api/PreSales',presale,this.httpOptions)
  }

  deletePreSale(id:number):Observable<PreSale>{
    return this.http.delete<PreSale>('https://localhost:5001/api/PreSales/'+id)
  }
}
