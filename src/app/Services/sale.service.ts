import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../Interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(public http: HttpClient) { }

  httpOptions: Object = {
    httpHeaders: new HttpHeaders({'Content-Type':'application/json'})
  }

  getSales():Observable<Sale[]>{
    return this.http.get<Sale[]>('https://localhost:5001/api/Sales')
  }

  postSale(sale:Sale):Observable<Sale>{
    return this.http.post<Sale>('https://localhost:5001/api/Sales',sale,this.httpOptions)
  }
}
