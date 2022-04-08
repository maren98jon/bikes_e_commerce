import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../Interfaces/bike';
import { Category } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>('https://localhost:5001/api/Categories')
  }

  getCategoryBikes(id:number):Observable<Bike[]>{
    return this.http.get<Bike[]>('https://localhost:5001/api/Categories/'+id+'/Bikes')
  }
}
